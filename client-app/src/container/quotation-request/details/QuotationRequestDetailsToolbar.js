import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import ButtonIcon from '../../../components/button/ButtonIcon';
import QuotationRequestDetailsDelete from './QuotationRequestDetailsDelete';
import Panel from '../../../components/panel/Panel';
import PanelBody from '../../../components/panel/PanelBody';

class QuotationRequestDetailsToolbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            showDelete: false,
        }
    };

    toggleDelete = () => {
        this.setState({showDelete: !this.state.showDelete});
    };

    render() {
        const { opportunity = {} } = this.props.quotationRequestDetails;
        const { measure = {}, contact = {}, intake = {} } = opportunity;

        let measureName = measure.name || '';
        let fullName = contact.fullName || '';
        let fullAddress = intake.fullAddress || '';

        return (
            <div className="row">
                <div className="col-sm-12">
                    <Panel>
                        <PanelBody className={"panel-small"}>
                            <div className="col-md-2">
                                <div className="btn-group" role="group">
                                    <ButtonIcon iconName={"glyphicon-arrow-left"} onClickAction={browserHistory.goBack} />
                                    {this.props.permissions.manageQuotationRequest &&
                                    < ButtonIcon iconName={"glyphicon-trash"} onClickAction={this.toggleDelete}/>
                                    }
                                </div>
                            </div>
                            <div className="col-md-8"><h4 className="text-center">{ `Offerteverzoek ${measureName} voor ${fullName} op ${fullAddress}` }</h4></div>
                            <div className="col-md-2" />
                        </PanelBody>
                    </Panel>
                </div>
                {
                    this.state.showDelete &&
                    <QuotationRequestDetailsDelete
                        closeDeleteItemModal={this.toggleDelete}
                        id={this.props.id}
                    />
                }
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        quotationRequestDetails: state.quotationRequestDetails,
        permissions: state.meDetails.permissions
    };
};

export default connect(mapStateToProps)(QuotationRequestDetailsToolbar);