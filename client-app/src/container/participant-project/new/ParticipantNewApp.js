import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import ParticipantNewToolbar from './ParticipantNewToolbar';

import ParticipantProjectDetailsAPI from '../../../api/participant-project/ParticipantProjectDetailsAPI';
import Panel from '../../../components/panel/Panel';
import PanelBody from '../../../components/panel/PanelBody';
import ContactsAPI from '../../../api/contact/ContactsAPI';
import ProjectsAPI from '../../../api/project/ProjectsAPI';
import { connect } from 'react-redux';
import MultipleMessagesModal from '../../../components/modal/MultipleMessagesModal';
import ParticipantNewForm from './ParticipantNewForm';
import ParticipantSubmitHelper from './ParticipantSubmitHelper';
import ParticipantValidateForm from './ParticipantValidateForm';
import moment from 'moment';

class ParticipantNewApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalText: [],
            modalRedirectTask: '',
            modalRedirectParticipation: '',
            contacts: [],
            projects: [],
            participationWorth: 0,
            projectTypeCodeRef: '',
            participation: {
                contactId: props.params.contactId || '',
                statusId: '',
                projectId: props.params.projectId || '',
                quantityInterest: 0,
                amountInterest: 0,
                dateInterest: moment().format('YYYY-MM-DD'),
                quantityOption: 0,
                amountOption: 0,
                dateOption: moment().format('YYYY-MM-DD'),
                quantityGranted: 0,
                amountGranted: 0,
                dateGranted: moment().format('YYYY-MM-DD'),
                quantityFinal: 0,
                amountFinal: 0,
                dateContractRetour: null,
                datePayment: null,
                dateEntry: moment().format('YYYY-MM-DD'),
            },
            errors: {
                contactId: false,
                statusId: false,
                projectId: false,
                amountOption: false,
                dateOption: false,
                amountGranted: false,
                dateGranted: false,
                amountFinal: false,
                dateEntry: false,
            },
            isLoading: false,
        };
    }

    componentDidMount() {
        ContactsAPI.getContactsPeek().then(payload => {
            this.setState({
                contacts: payload,
            });
        });

        ProjectsAPI.peekProjects().then(payload => {
            this.setState({
                projects: payload,
            });

            if (this.props.params.projectId) {
                let project = payload.find(project => project.id == this.props.params.projectId);

                this.setState({
                    ...this.state,
                    projectTypeCodeRef: project.typeCodeRef,
                    participation: {
                        ...this.state.participation,
                        dateEntry: project.dateEntry
                            ? moment(project.dateEntry).format('YYYY-MM-DD')
                            : moment().format('YYYY-MM-DD'),
                    },
                });
            }
        });
    }

    redirectTask = () => {
        hashHistory.push(this.state.modalRedirectTask);
    };

    redirectParticipation = () => {
        hashHistory.push(this.state.modalRedirectParticipation);
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {
                ...this.state,
                participation: {
                    ...this.state.participation,
                    [name]: value,
                },
            },
            () => this.linkedValueAdjustment(name)
        );
    };

    linkedValueAdjustment = name => {
        // If field statusId is changed then change dateGranted when applicable
        if (name === 'statusId') {
            const currentStatusId = Number(this.state.participation.statusId);
            const checkStatusId = this.props.participantMutationStatuses.find(
                participantMutationStatuses => participantMutationStatuses.codeRef === 'final'
            ).id;
            const dateGranted = currentStatusId === checkStatusId ? null : moment().format('YYYY-MM-DD');

            this.setState({
                ...this.state,
                participation: {
                    ...this.state.participation,
                    dateGranted,
                },
            });
        }

        if (name === 'projectId') {
            let project = this.state.projects.find(project => project.id == this.state.participation.projectId);

            this.setState({
                ...this.state,
                projectTypeCodeRef: project.typeCodeRef,
                participation: {
                    ...this.state.participation,
                    dateEntry: project.dateEntry
                        ? moment(project.dateEntry).format('YYYY-MM-DD')
                        : moment().format('YYYY-MM-DD'),
                },
            });
        }
    };

    handleInputChangeDate = (value, name) => {
        this.setState({
            ...this.state,
            participation: {
                ...this.state.participation,
                [name]: value,
            },
        });
    };

    handleInputChangeContactId = selectedOption => {
        this.setState({
            ...this.state,
            participation: {
                ...this.state.participation,
                contactId: selectedOption,
            },
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { participation } = this.state;

        let errors = {};
        let hasErrors = false;

        const status = this.props.participantMutationStatuses.find(
            participantMutationStatuses => participantMutationStatuses.id == participation.statusId
        );
        const statusCodeRef = status ? status.codeRef : null;

        const validatedForm = ParticipantValidateForm(
            participation,
            errors,
            hasErrors,
            statusCodeRef,
            this.state.projectTypeCodeRef
        );

        this.setState({ ...this.state, errors: validatedForm.errors });

        if (!validatedForm.hasErrors) {
            const values = ParticipantSubmitHelper(participation, statusCodeRef, this.state.projectTypeCodeRef);
            this.setState({ isLoading: true });

            ParticipantProjectDetailsAPI.storeParticipantProject(values).then(payload => {
                if (payload.data.message !== undefined && payload.data.message.length > 0) {
                    this.setState({
                        showModal: true,
                        modalText: payload.data.message,
                    });
                    this.setState({
                        modalRedirectTask: `/taak/nieuw/contact/${participation.contactId}/project/${
                            participation.projectId
                        }/deelnemer/${payload.data.id}`,
                        modalRedirectParticipation: `/project/deelnemer/${payload.data.id}`,
                    });
                } else {
                    hashHistory.push(`/project/deelnemer/${payload.data.id}`);
                }
                this.setState({ isLoading: false });
            });
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <div className="col-md-12">
                        <ParticipantNewToolbar />
                    </div>

                    <div className="col-md-12">
                        <Panel>
                            <PanelBody>
                                <div className="col-md-12">
                                    <ParticipantNewForm
                                        editForm={false}
                                        participation={this.state.participation}
                                        errors={this.state.errors}
                                        handleInputChange={this.handleInputChange}
                                        handleInputChangeDate={this.handleInputChangeDate}
                                        handleSubmit={this.handleSubmit}
                                        contacts={this.state.contacts}
                                        projects={this.state.projects}
                                        handleProjectChange={this.handleProjectChange}
                                        projectTypeCodeRef={this.state.projectTypeCodeRef}
                                        projectDateEntry={this.state.projectDateEntry}
                                        participantMutationStatuses={this.props.participantMutationStatuses}
                                        handleInputChangeContactId={this.handleInputChangeContactId}
                                        isLoading={this.state.isLoading}
                                    />
                                </div>
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
                <div className="col-md-3" />
                {this.state.showModal && (
                    <MultipleMessagesModal
                        closeModal={this.redirectParticipation}
                        buttonCancelText={'Nee'}
                        confirmAction={this.redirectTask}
                        buttonConfirmText={'Ja'}
                        closingText={
                            'De deelname is aangemaakt, maar de gegevens zijn niet compleet. Wil je ook een taak aanmaken om je daar aan te herinneren ?'
                        }
                    >
                        {this.state.modalText}
                    </MultipleMessagesModal>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        participantMutationStatuses: state.systemData.participantMutationStatuses,
    };
};

export default connect(mapStateToProps)(ParticipantNewApp);
