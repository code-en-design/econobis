import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContactListAddPersonToGroup from './ContactListAddPersonToGroup';
import ContactGroupAPI from '../../../api/contact-group/ContactGroupAPI';
import ButtonIcon from '../../../components/button/ButtonIcon';
import fileDownload from 'js-file-download';
import moment from 'moment/moment';
import { blockUI, unblockUI } from '../../../actions/general/BlockUIActions';

class ContactsInGroupListToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalAddToGroup: false,
            showModalEmail: false,
            groupName: '',
        };
    }

    closeModalAddToGroup = () => {
        this.setState({
            showModalAddToGroup: false,
        });
    };

    componentDidMount() {
        ContactGroupAPI.fetchContactGroup(this.props.groupId).then(payload => {
            this.setState({ groupName: payload.name });
        });
    }

    addPersonToGroup = contactId => {
        const contact = {
            groupId: this.props.groupId,
            contactId,
        };

        ContactGroupAPI.addContactToGroup(contact).then(payload => {
            this.setState({
                showModalAddToGroup: false,
            });
            this.props.refreshContactsInGroupData();
        });
    };

    toggleModalAddToGroup = () => {
        this.setState({
            showModalAddToGroup: !this.state.showModalAddToGroup,
        });
    };

    sendEmail = () => {
        hashHistory.push(`/email/nieuw/groep/${this.props.groupId}/to`);
    };

    newContact = () => {
        hashHistory.push(`/contact/nieuw`);
    };

    getCSV = () => {
        this.props.blockUI();
        ContactGroupAPI.getCsv(this.props.groupId)
            .then(payload => {
                fileDownload(
                    payload.data,
                    'Groep-' +
                        this.state.groupName.substring(0, 20) +
                        '-' +
                        moment().format('YYYY-MM-DD HH:mm:ss') +
                        '.csv'
                );
                this.props.unblockUI();
            })
            .catch(error => {
                this.props.unblockUI();
            });
    };

    openGroupDetails() {
        hashHistory.push(`/contact-groep/${this.props.groupId}`);
    }

    render() {
        const { permissions } = this.props;
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="btn-group" role="group">
                        <ButtonIcon
                            iconName={'glyphicon-refresh'}
                            onClickAction={this.props.refreshContactsInGroupData}
                        />
                        {this.props.permissions.updatePerson &&
                            this.props.permissions.updateOrganisation &&
                            this.props.contactGroupType &&
                            this.props.contactGroupType.id === 'static' && (
                                <div className="nav navbar-nav btn-group">
                                    <button onClick={this.toggleModalAddToGroup} className="btn btn-success btn-sm">
                                        <span className="glyphicon glyphicon-plus" />
                                    </button>
                                </div>
                            )}
                        <ButtonIcon iconName={'glyphicon-download-alt'} onClickAction={this.getCSV} />
                        <ButtonIcon iconName={'glyphicon-envelope'} onClickAction={this.sendEmail} />
                    </div>
                </div>
                <div className="col-md-4">
                    <h3 className="text-center table-title" onClick={() => this.openGroupDetails()} role="button">
                        Contacten in groep: {this.state.groupName}
                    </h3>
                </div>
                <div className="col-md-4" />

                {this.state.showModalAddToGroup && (
                    <ContactListAddPersonToGroup
                        closeModalAddToGroup={this.closeModalAddToGroup}
                        addPersonToGroup={this.addPersonToGroup}
                        groupName={this.state.groupName}
                    />
                )}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        permissions: state.meDetails.permissions,
        contactGroupType: state.contactGroupDetails.type,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ blockUI, unblockUI }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsInGroupListToolbar);
