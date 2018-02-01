import React, {Component} from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import AddContactToGroup from './harmonica/AddContactToGroup';
import ErrorModal from '../../../components/modal/ErrorModal';
import RegistrationHarmonica from './harmonica/RegistrationHarmonica';
import OpportunityHarmonica from './harmonica/OpportunityHarmonica';
import TaskHarmonica from "./harmonica/TaskHarmonica";
import ContactGroupHarmonica from "./harmonica/ContactGroupHarmonica";
import EmailInboxHarmonica from './harmonica/EmailInboxHarmonica';
import EmailSentHarmonica from "./harmonica/EmailSentHarmonica";
import DocumentHarmonica from '../../contact-groups/details/harmonica/DocumentHarmonica';

class ContactDetailsHarmonica extends Component {
    constructor(props){
        super(props);

        this.state = {
            toggleShowList: {
                registrations: false,
                opportunities: false,
                tasks: false,
                contactGroups: false,
                emailsInbox: false,
                emailsSent: false,
                documents: false,
            },
            showModalAddGroup: false,
        };

        this.toggleShowList = this.toggleShowList.bind(this);
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.id !== nextProps.id) {
            this.setState({
                toggleShowList: {
                    registrations: false,
                    opportunities: false,
                    tasks: false,
                    contactGroups: false,
                    emailsInbox: false,
                    emailsSent: false,
                    documents: false,
                },
            })
        }
    };

    newRegistration = () => {
        let address = this.props.contactDetails.addresses.find((address) => {
            return address.primary
        });
        if (typeof address === 'undefined') {
            address = this.props.contactDetails.addresses[0];
            if (typeof address === 'undefined') {
                this.setState({
                    showModalError: !this.state.showModalError,
                    modalErrorTitle: 'Waaschuwing',
                    modalErrorMessage: 'Dit contact heeft nog geen adres.',
                });
            }
            else
                {
                    hashHistory.push(`/aanmelding/nieuw/contact/${this.props.contactDetails.id}/adres/${address.id}`);
                }
            }
        else {
            hashHistory.push(`/aanmelding/nieuw/contact/${this.props.contactDetails.id}/adres/${address.id}`);
        }
    };

    toggleErrorModal = () => {
        this.setState({
            showModalError: !this.state.showModalError
        });
    };

    toggleShowList(name) {
        this.setState({
            ...this.state,
            toggleShowList: {
                ...this.state.toggleShowList,
                [name]: !this.state.toggleShowList[name],
            }
        });
    };

    newOpportunity = () => {
        hashHistory.push(`/kans/nieuw/contact/${this.props.id}`);
    };

    newTask = () => {
        hashHistory.push(`/taak/nieuw/contact/${this.props.contactDetails.id}`);
    };

    newEmail = () => {
        hashHistory.push(`/email/nieuw`);
    };

    newDocument = (type) => {
        hashHistory.push(`/document/nieuw/${type}/contact/${this.props.contactDetails.id}`);
    };

    toggleAddGroup = () => {
        this.setState({
            showModalAddGroup: !this.state.showModalAddGroup
        });
    };

    render(){
        return (
            <div className="margin-10-top">
                <RegistrationHarmonica
                    toggleShowList={() => this.toggleShowList('registrations')}
                    showRegistrationsList={this.state.toggleShowList.registrations}
                    registrationCount={this.props.contactDetails.registrationCount}
                    newRegistration={this.newRegistration}
                />

                <OpportunityHarmonica
                    toggleShowList={() => this.toggleShowList('opportunities')}
                    showOpportunitiesList={this.state.toggleShowList.opportunities}
                    opportunityCount={this.props.contactDetails.opportunityCount}
                    newOpportunity={this.newOpportunity}
                />

                <TaskHarmonica
                    toggleShowList={() => this.toggleShowList('tasks')}
                    showTasksList={this.state.toggleShowList.tasks}
                    taskCount={this.props.contactDetails.taskCount}
                    newTask={this.newTask}
                />

                <ContactGroupHarmonica
                    toggleShowList={() => this.toggleShowList('contactGroups')}
                    showContactGroupsList={this.state.toggleShowList.contactGroups}
                    toggleAddGroup={this.toggleAddGroup}
                    groupCount={this.props.contactDetails.groupCount}
                />

                <EmailInboxHarmonica
                    toggleShowList={() => this.toggleShowList('emailsInbox')}
                    showEmailsInboxList={this.state.toggleShowList.emailsInbox}
                    newEmail={this.newEmail}
                    emailInboxCount={this.props.contactDetails.emailInboxCount}
                />

                <EmailSentHarmonica
                    toggleShowList={() => this.toggleShowList('emailsSent')}
                    showEmailsSentList={this.state.toggleShowList.emailsSent}
                    newEmail={this.newEmail}
                    emailSentCount={this.props.contactDetails.emailSentCount}
                />

                <DocumentHarmonica
                    toggleShowList={() => this.toggleShowList('documents')}
                    showDocumentsList={this.state.toggleShowList.documents}
                    newDocument={this.newDocument}
                    documentCount={this.props.contactDetails.documentCount}
                />


                { this.state.showModalError &&
                <ErrorModal
                    closeModal={this.toggleErrorModal}
                    title={this.state.modalErrorTitle}
                    errorMessage={this.state.modalErrorMessage}
                />
                }
                { this.state.showModalAddGroup &&
                <AddContactToGroup
                    toggleAddGroup={this.toggleAddGroup}
                    toggleGroup={() => this.toggleShowList('contactGroups')}
                />
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        contactDetails: state.contactDetails,
        permissions: state.meDetails.permissions
    };
};

export default connect(mapStateToProps, null)(ContactDetailsHarmonica);