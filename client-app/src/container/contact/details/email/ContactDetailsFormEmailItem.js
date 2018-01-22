import React, {Component} from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import EmailAddressAPI from '../../../../api/contact/EmailAddressAPI';
import { updateEmailAddress } from '../../../../actions/contact/ContactDetailsActions';
import ContactDetailsFormEmailView from './ContactDetailsFormEmailView';
import ContactDetailsFormEmailEdit from './ContactDetailsFormEmailEdit';
import ContactDetailsFormEmailDelete from './ContactDetailsFormEmailDelete';

class ContactDetailFormEmailItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showActionButtons: false,
            highlightLine: '',
            showEdit: false,
            showDelete: false,
            typeIdError: false,
            emailError: false,
            emailAddress: {
                ...props.emailAddress,
            },
            errors: {
                typeId: false,
                email: false,
            },
        };
    };

    onLineEnter = () => {
        this.setState({
            showActionButtons: true,
            highlightLine: 'highlight-line',
        });
    };

    onLineLeave = () => {
        this.setState({
            showActionButtons: false,
            highlightLine: '',
        });
    };

    openEdit = () => {
        this.setState({showEdit: true});
    };

    closeEdit = () => {
        this.setState({showEdit: false});
    };

    cancelEdit = () => {
        this.setState({
            ...this.state,
            emailAddress: {...this.props.emailAddress}
        });

        this.closeEdit();
    };

    toggleDelete = () => {
        this.setState({showDelete: !this.state.showDelete});
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            emailAddress: {
                ...this.state.emailAddress,
                [name]: value
            },
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { emailAddress } = this.state;

        let errors = {};
        let hasErrors = false;

        if(!validator.isEmail(emailAddress.email)){
            errors.email = true;
            hasErrors = true;
        };

        if(validator.isEmpty(emailAddress.typeId)){
            errors.typeId = true;
            hasErrors = true;
        };

        this.setState({ ...this.state, errors: errors });

        // If no errors send form
        !hasErrors &&
            EmailAddressAPI.updateEmailAddress(emailAddress).then((payload) => {
                this.props.updateEmailAddress(payload);
                this.closeEdit();
            });
    };

    render() {
        return (
            <div>
                <ContactDetailsFormEmailView
                    highlightLine={this.state.highlightLine}
                    showActionButtons={this.state.showActionButtons}
                    onLineEnter={this.onLineEnter}
                    onLineLeave={this.onLineLeave}
                    openEdit={this.openEdit}
                    toggleDelete={this.toggleDelete}
                    emailAddress={this.state.emailAddress}
                />
                {
                    this.state.showEdit &&
                    <ContactDetailsFormEmailEdit
                        emailAddress={this.state.emailAddress}
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        typeIdError={this.state.errors.typeId}
                        emailError={this.state.errors.email}
                        cancelEdit={this.cancelEdit}
                    />
                }
                {
                    this.state.showDelete &&
                    <ContactDetailsFormEmailDelete
                        closeDeleteItemModal={this.toggleDelete}
                        {...this.props.emailAddress}
                    />
                }
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateEmailAddress: (id) => {
        dispatch(updateEmailAddress(id));
    },
});

export default connect(null, mapDispatchToProps)(ContactDetailFormEmailItem);