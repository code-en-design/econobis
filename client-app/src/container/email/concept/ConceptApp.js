import React, {Component} from 'react';
import validator from 'validator';
import {union} from 'lodash';

import ConceptForm from './ConceptForm';
import ConceptToolbar from './ConceptToolbar';
import Panel from '../../../components/panel/Panel';
import PanelBody from '../../../components/panel/PanelBody';
import EmailAPI from '../../../api/email/EmailAPI';
import EmailAddressAPI from '../../../api/contact/EmailAddressAPI';
import {hashHistory} from "react-router";

class ConceptApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailAddresses: [],
            email: {
                from: '',
                mailboxId: '',
                to: '',
                cc: '',
                bcc: '',
                subject: '',
                htmlBody: '',
                attachments: [],
            },
            errors: {
                to: false,
            },
            hasLoaded: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleToIds = this.handleToIds.bind(this);
        this.handleCcIds = this.handleCcIds.bind(this);
        this.handleBccIds = this.handleBccIds.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.addAttachment = this.addAttachment.bind(this);
        this.deleteAttachment = this.deleteAttachment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        EmailAddressAPI.fetchEmailAddressessPeek().then((payload) => {
            this.setState({
                emailAddresses: [...this.state.emailAddresses, ...payload],
            });
        });

        EmailAPI.fetchEmail(this.props.params.id).then((payload) => {
            const extraOptions = this.createExtraOptions(payload.to, payload.cc, payload.bcc);

            this.setState({
                ...this.state,
                email: {
                    id: payload.id,
                    from: payload.from,
                    mailboxId: payload.mailboxId,
                    to: payload.to ? payload.to.join(',') : '',
                    cc: payload.cc ? payload.cc.join(',') : '',
                    bcc: payload.bcc ? payload.bcc.join(',') : '',
                    subject: payload.subject ? payload.subject : '',
                    htmlBody: payload.htmlBody ? payload.htmlBody : '',
                    attachments: payload.attachments ? payload.attachments : '',
                },
                emailAddresses: [...this.state.emailAddresses, ...extraOptions],
                hasLoaded: true,
            });
        });
    };

    createExtraOptions(to, cc, bcc) {
        const emailAddresses = union(to, cc, bcc);

        let options = [];

        emailAddresses.map((emailAddress) => {
            options.push({id: emailAddress, name: emailAddress});
        });

        return options;
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            email: {
                ...this.state.email,
                [name]: value
            },
        });
    };

    handleToIds(selectedOption) {
        this.setState({
            ...this.state,
            email: {
                ...this.state.email,
                to: selectedOption
            },
        });
    };

    handleCcIds(selectedOption) {
        this.setState({
            ...this.state,
            email: {
                ...this.state.email,
                cc: selectedOption
            },
        });
    };

    handleBccIds(selectedOption) {
        this.setState({
            ...this.state,
            email: {
                ...this.state.email,
                bcc: selectedOption
            },
        });
    };

    handleTextChange(event) {
        this.setState({
            ...this.state,
            email: {
                ...this.state.email,
                htmlBody: event.target.getContent()
            },
        });
    };

    addAttachment(files) {

        const data = new FormData();

        files.map((file, key) => {
            data.append('attachments[' +  key +  ']', file);
        });
        EmailAPI.storeAttachment(this.state.email.id, data).then((payload) => {
            this.setState({
                ...this.state,
                email: {
                    ...this.state.email,
                    attachments: payload.data.data,
                },
            });
        });
    }

    deleteAttachment(name, id){
        EmailAPI.deleteAttachment(id).then(() => {
            this.setState({
                ...this.state,
                email: {
                    ...this.state.email,
                    attachments: this.state.email.attachments.filter((attachment) => attachment.name !== name),
                },
            });
        });
    }

    handleSubmit(event, concept = false) {
        event.preventDefault();

        const { email } = this.state;

        // Validation
        let errors = {};
        let hasErrors = false;

        if(validator.isEmpty(email.to)){
            errors.to = true;
            hasErrors = true;
        };

        if(validator.isEmpty('' + email.from)){
            errors.from = true;
            hasErrors = true;
        };

        this.setState({ ...this.state, errors: errors });

        // If no errors send form
        if(!hasErrors) {
            if (email.to.length > 0) {
                email.to = email.to.split(',');
            }

            if (email.cc.length > 0) {
                email.cc = email.cc.split(',');
            }

            if (email.bcc.length > 0) {
                email.bcc = email.bcc.split(',');
            }
            const data = new FormData();

            data.append('to', JSON.stringify(email.to));
            data.append('cc', JSON.stringify(email.cc));
            data.append('bcc', JSON.stringify(email.bcc));
            data.append('subject', email.subject);
            data.append('htmlBody', email.htmlBody);

            if(concept) {
                EmailAPI.updateConcept(data, this.props.params.id).then(() => {
                    hashHistory.push(`/emails/concept`);
                }).catch(function (error) {
                    console.log(error)
                });
            }
            else{
                EmailAPI.sendConcept(data, this.props.params.id).then(() => {
                    hashHistory.push(`/emails/sent`);
                }).catch(function (error) {
                    console.log(error)
                });
            }
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <div className="col-md-12 margin-10-top">
                        <Panel>
                            <PanelBody className="panel-small">
                                <ConceptToolbar handleSubmit={this.handleSubmit}/>
                            </PanelBody>
                        </Panel>
                    </div>

                    <div className="col-md-12 margin-10-top">
                        <ConceptForm
                            email={this.state.email}
                            emailAddresses={this.state.emailAddresses}
                            errors={this.state.errors}
                            hasLoaded={this.state.hasLoaded}
                            handleSubmit={this.handleSubmit}
                            handleToIds={this.handleToIds}
                            handleCcIds={this.handleCcIds}
                            handleBccIds={this.handleBccIds}
                            handleInputChange={this.handleInputChange}
                            handleTextChange={this.handleTextChange}
                            addAttachment={this.addAttachment}
                            deleteAttachment={this.deleteAttachment}
                        />

                    </div>
                </div>
                <div className="col-md-3"/>
            </div>
        )
    }
};

export default ConceptApp;