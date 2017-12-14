import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import validator from 'validator';

import InputText from '../../../../components/form/InputText';
import InputSelect from '../../../../components/form/InputSelect';
import InputDate from '../../../../components/form/InputDate';
import ButtonText from '../../../../components/button/ButtonText';
import PanelFooter from "../../../../components/panel/PanelFooter";

import ContactsAPI from '../../../../api/ContactsAPI';
import UsersAPI from '../../../../api/UsersAPI';
import RegistrationsAPI from '../../../../api/registration/RegistrationsAPI';
import OpportunityAPI from '../../../../api/OpportunityAPI';

import { fetchOpportunity } from '../../../../actions/OpportunitiesActions';

class OpportunityFormEdit extends Component {
    constructor(props) {
        super(props);

        const {id, campaign, contact, desiredDate, measure, number, quotationText, reaction, status, ownedBy, registration} = props.opportunity;

        this.state = {
            opportunity: {
                id,
                campaignId: campaign ? campaign.id : '',
                measureName: measure ? measure.name : '',
                contactId: contact ? contact.id : '',
                desiredDate: desiredDate ? desiredDate : '',
                measureId: measure ? measure.id : '',
                number: number,
                quotationText: quotationText,
                reactionId: reaction ? reaction.id : '',
                statusId: status ? status.id : '',
                ownedById: ownedBy ? ownedBy.id : '',
                registrationId: registration ? registration.id : '',
            },
            contacts: [],
            users: [],
            registrations: [],
            errors: {
                contact: false,
                status: false,
            },
        }
    };

    componentWillMount() {
        ContactsAPI.getPerson().then(payload => {
            this.setState({
                contacts: payload
            });
        });

        UsersAPI.peekUsers().then(payload => {
            this.setState({
                users: payload
            });
        });

        RegistrationsAPI.peekRegistrations().then(payload => {
            this.setState({
                registrations: payload
            });
        });
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            opportunity: {
                ...this.state.opportunity,
                [name]: value
            },
        });
    };

    handleChangeDesiredDate = (date) => {
        const formattedDate = (date ? moment(date).format('Y-MM-DD') : '');

        this.setState({
            ...this.state,
            opportunity: {
                ...this.state.opportunity,
                desiredDate: formattedDate
            },
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {opportunity} = this.state;

        let errors = {};
        let hasErrors = false;

        if(validator.isEmpty('' + opportunity.contactId)){
            errors.contact = true;
            hasErrors = true;
        };

        if(validator.isEmpty('' + opportunity.statusId)){
            errors.status = true;
            hasErrors = true;
        };

        this.setState({ ...this.state, errors: errors });

        !hasErrors &&
        OpportunityAPI.updateOpportunity(opportunity.id, opportunity).then(payload => {
            this.props.fetchOpportunity(opportunity.id);
            this.props.switchToView();
        });
    };

    render() {
        const {campaignId, contactId, desiredDate, measureName, number, quotationText, reactionId, statusId, ownedById, registrationId} = this.state.opportunity;

        return (
            <form className="form-horizontal col-md-12" onSubmit={this.handleSubmit}>
                <div className="row">
                    <InputText
                        label={"Kans"}
                        size={"col-sm-6"}
                        name={"measureId"}
                        value={measureName}
                        readOnly={true}
                    />
                    <InputText
                        label={"Kans nummer"}
                        name={"number"}
                        value={number}
                        readOnly={true}
                    />
                </div>

                <div className="row">
                    <InputSelect
                        label={"Contact"}
                        size={"col-sm-6"}
                        name={"contactId"}
                        options={this.state.contacts}
                        value={contactId}
                        onChangeAction={this.handleInputChange}
                        optionName={'fullName'}
                        required={"required"}
                        error={this.state.errors.contact}
                    />
                    <InputSelect
                        label={"Reactie"}
                        size={"col-sm-6"}
                        name={"reactionId"}
                        options={this.props.reactions}
                        value={reactionId}
                        onChangeAction={this.handleInputChange}
                    />
                </div>

                <div className="row">
                    <InputSelect
                        label={"Aanmelding"}
                        size={"col-sm-6"}
                        name={"registrationId"}
                        options={this.state.registrations}
                        value={registrationId}
                        onChangeAction={this.handleInputChange}
                    />
                    <InputSelect
                        label={"Status"}
                        size={"col-sm-6"}
                        name={"statusId"}
                        options={this.props.status}
                        value={statusId}
                        onChangeAction={this.handleInputChange}
                        required={"required"}
                        error={this.state.errors.status}
                    />
                </div>

                <div className="row">
                    <div className='form-group col-sm-12'>
                        <div className="row">
                            <div className="col-sm-3">
                                <label htmlFor="campaignId" className="col-sm-12">Campagne</label>
                            </div>
                            <div className="col-sm-8">
                                <select className='form-control input-sm' name='campaignId' value={campaignId} onChange={this.handleInputChange}>
                                    <option value=''></option>
                                    {this.props.campaigns.map((option) => {
                                        return <option key={option.id} value={option.id}>{option.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <div className="row">
                            <div className="col-sm-3">
                                <label htmlFor="quotationText" className="col-sm-12">Offerte tekst</label>
                            </div>
                            <div className="col-sm-8">
                                <textarea name='quotationText' value={quotationText} onChange={this.handleInputChange}
                                          className="form-control input-sm"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <InputDate
                        label={"Gewenste realisatie"}
                        size={"col-sm-6"}
                        name={"desiredDate"}
                        value={desiredDate}
                        onChangeAction={this.handleChangeDesiredDate}
                    />
                    <InputSelect
                        label={"Verantwoordelijke"}
                        size={"col-sm-6"}
                        name={"ownedById"}
                        options={this.state.users}
                        value={ownedById}
                        onChangeAction={this.handleInputChange}
                        optionName={'fullName'}
                    />
                </div>

                <PanelFooter>
                    <div className="pull-right btn-group" role="group">
                        <ButtonText buttonClassName={"btn-default"} buttonText={"Annuleren"}
                                    onClickAction={this.props.switchToView}/>
                        <ButtonText buttonText={"Opslaan"} onClickAction={this.handleSubmit} type={"submit"}
                                    value={"Submit"}/>
                    </div>
                </PanelFooter>
            </form>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    fetchOpportunity: (id) => {
        dispatch(fetchOpportunity(id));
    },
});

const mapStateToProps = (state) => {
    return {
        opportunity: state.opportunity,
        status: state.systemData.opportunityStatus,
        reactions: state.systemData.opportunityReactions,
        measures: state.systemData.measures,
        campaigns: state.systemData.campaigns,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityFormEdit);