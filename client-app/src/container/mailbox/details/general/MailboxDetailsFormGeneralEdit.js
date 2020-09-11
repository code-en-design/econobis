import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { bindActionCreators } from 'redux';

import MailboxAPI from '../../../../api/mailbox/MailboxAPI';
import { updateMailbox } from '../../../../actions/mailbox/MailboxDetailsActions';
import { fetchSystemData } from '../../../../actions/general/SystemDataActions';
import InputText from '../../../../components/form/InputText';
import InputSelect from '../../../../components/form/InputSelect';
import ButtonText from '../../../../components/button/ButtonText';
import Panel from '../../../../components/panel/Panel';
import PanelHeader from '../../../../components/panel/PanelHeader';
import PanelBody from '../../../../components/panel/PanelBody';
import InputToggle from '../../../../components/form/InputToggle';
import ViewText from "../../../../components/form/ViewText";
import moment from "moment/moment";

class MailboxDetailsFormGeneralEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mailbox: {
                ...props.mailboxDetails,
                usesGmailIncoming: props.mailboxDetails.incomingServerType === 'gmail' ? true : false,
                usesGmailOutgoing: props.mailboxDetails.outgoingServerType === 'gmail' ? true : false,
                usesMailgun: props.mailboxDetails.outgoingServerType === 'mailgun' ? true : false,
            },
            errors: {
                name: false,
                email: false,
                username: false,
                password: false,
                smtpHost: false,
                smtpPort: false,
                imapHost: false,
                imapPort: false,
                mailgunDomainId: false,
                gmailProjectId: false,
                gmailClientId: false,
                gmailClientSecret: false,
                gmailRedirectUrl: false,
            },
            loading: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            mailbox: {
                ...this.state.mailbox,
                [name]: value,
            },
        });
    };

    handleInputUsesGmailIncoming = event => {
        const target = event.target;
        const checked = target.checked;

        this.setState({
            ...this.state,
            mailbox: {
                ...this.state.mailbox,
                usesGmailIncoming: checked,
                incomingServerType: checked ? 'gmail' : 'imap',
            },
        });
    };

    handleInputUsesGmailOutgoing = event => {
        const target = event.target;
        const checked = target.checked;
        // const checkedUsesMailgun = this.state.mailbox.usesMailgun;

        this.setState({
            ...this.state,
            mailbox: {
                ...this.state.mailbox,
                usesGmailOutgoing: checked,
                // usesMailgun: checked ? false : checkedUsesMailgun,
                usesMailgun: false,
                outgoingServerType: checked ? 'gmail' : 'smtp',
            },
        });
    };

    handleInputUsesMailgun = event => {
        const target = event.target;
        const checked = target.checked;

        this.setState({
            ...this.state,
            mailbox: {
                ...this.state.mailbox,
                usesMailgun: checked,
                outgoingServerType: checked ? 'mailgun' : 'smtp',
            },
        });
    };

    handleSubmit(event) {
        event.preventDefault();

        const { mailbox } = this.state;

        // Validation
        let errors = {};
        let hasErrors = false;

        if (validator.isEmpty(mailbox.name)) {
            errors.name = true;
            hasErrors = true;
        }

        if (!validator.isEmail(mailbox.email)) {
            errors.email = true;
            hasErrors = true;
        }

        if (mailbox.usesGmailIncoming) {
            if (validator.isEmpty(mailbox.gmailClientId)) {
                errors.gmailClientId = true;
                hasErrors = true;
            }
            if (validator.isEmpty(mailbox.gmailRedirectUrl)) {
                errors.gmailRedirectUrl = true;
                hasErrors = true;
            }

        } else {
            if (validator.isEmpty(mailbox.username)) {
                errors.username = true;
                hasErrors = true;
            }
        }

        if (mailbox.usesMailgun) {
            if (validator.isEmpty(mailbox.mailgunDomainId.toString())) {
                errors.mailgunDomainId = true;
                hasErrors = true;
            }
        } else {
            if (validator.isEmpty(mailbox.smtpHost)) {
                errors.smtpHost = true;
                hasErrors = true;
            }

            if (validator.isEmpty(mailbox.smtpPort)) {
                errors.smtpPort = true;
                hasErrors = true;
            }
        }

        if (validator.isEmpty(mailbox.imapHost)) {
            errors.imapHost = true;
            hasErrors = true;
        }

        if (validator.isEmpty(mailbox.imapPort)) {
            errors.imapPort = true;
            hasErrors = true;
        }

        this.setState({ ...this.state, errors: errors });

        // If no errors send form
        !hasErrors &&
            this.setState(
                currentState => ({ loading: !currentState.loading }),
                () => {
                    MailboxAPI.updateMailbox(mailbox).then(payload => {
                        this.props.updateMailbox(payload);
                        this.props.fetchSystemData();
                        this.props.switchToView();
                    });
                }
            );
    }

    render() {
        const {
            name,
            email,
            smtpHost,
            smtpPort,
            smtpEncryption,
            imapHost,
            imapPort,
            imapEncryption,
            imapInboxPrefix,
            dateLastFetched,
            imapIdLastFetched,
            username,
            password,
            usesMailgun,
            mailgunDomainId,
            usesGmailIncoming,
            usesGmailOutgoing,
            gmailProjectId,
            gmailClientId,
            gmailClientSecret,
            gmailRedirectUrl,
            primary,
            isActive,
            linkContactFromEmailToAddress,
        } = this.state.mailbox;

        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <Panel>
                    <PanelBody>
                        <div className="row">
                            <InputText
                                label="Weergavenaam"
                                name={'name'}
                                value={name}
                                onChangeAction={this.handleInputChange}
                                required={'required'}
                                error={this.state.errors.name}
                            />
                            <InputText
                                label={'E-mail'}
                                name={'email'}
                                value={email}
                                onChangeAction={this.handleInputChange}
                                required={'required'}
                                error={this.state.errors.email}
                            />
                        </div>
                        <div className="row">
                            <InputToggle
                                label="Actief"
                                name={'isActive'}
                                value={isActive}
                                onChangeAction={this.handleInputChange}
                                disabled={primary}
                            />
                            <InputToggle
                                label="Primair (verzend wachtwoord mails)"
                                name={'primary'}
                                value={primary}
                                onChangeAction={this.handleInputChange}
                                disabled={!isActive || primary}
                            />
                        </div>
                        <div className="row">
                            <InputToggle
                                label={
                                    <span>
                                        Koppel contact op email <u>aan</u> adres
                                        <br />
                                        <small style={{ color: '#ccc', fontWeight: 'normal' }}>
                                            Koppeling contact standaard op email <u>afzender</u> adres
                                        </small>
                                    </span>
                                }
                                name={'linkContactFromEmailToAddress'}
                                value={linkContactFromEmailToAddress}
                                onChangeAction={this.handleInputChange}
                            />
                        </div>
                    </PanelBody>

                    <PanelHeader>
                        <span className="h5">Servergegevens</span>
                    </PanelHeader>
                    <PanelBody>
                        <div className="row">
                            <InputToggle
                                label="Inkomend gebruikt Gmail"
                                name={'usesGmailIncoming'}
                                value={usesGmailIncoming}
                                onChangeAction={this.handleInputUsesGmailIncoming}
                            />
                            <InputToggle
                                label="Uitgaand gebruikt Gmail"
                                name={'usesGmailOutgoing'}
                                value={usesGmailOutgoing}
                                disabled={!usesGmailIncoming}
                                onChangeAction={this.handleInputUsesGmailOutgoing}
                            />
                        </div>
                        {usesGmailIncoming ? (
                            <React.Fragment>
                                {!usesGmailOutgoing && (
                                <div className="row">
                                    <InputText
                                        label="Gebruikersnaam"
                                        name={'username'}
                                        value={username}
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.username}
                                    />
                                    <InputText
                                        type={'text'}
                                        label={'Wachtwoord'}
                                        name={'password'}
                                        value={password}
                                        placeholder="**********"
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.password}
                                        className={'numeric-password'}
                                    />
                                </div>
                                )}
                                <div className="row">
                                    <InputText
                                        label="ProjectId"
                                        name={'gmailProjectId'}
                                        value={gmailProjectId}
                                        onChangeAction={this.handleInputChange}
                                        // required={'required'}
                                        error={this.state.errors.gmailProjectId}
                                    />
                                    {!usesGmailOutgoing ? (
                                        <InputToggle
                                            label="Gebruikt mailgun"
                                            name={'usesMailgun'}
                                            value={usesMailgun}
                                            onChangeAction={this.handleInputUsesMailgun}
                                        />
                                    ) : (
                                        <div className="form-group col-md-6" />
                                    )}
                                </div>
                                <div className="row">
                                    <InputText
                                        label="Client Id"
                                        name={'gmailClientId'}
                                        value={gmailClientId}
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.gmailClientId}
                                    />
                                    {!usesGmailOutgoing ? (
                                        usesMailgun ? (
                                            <InputSelect
                                                label="Uitgaand"
                                                name={'mailgunDomainId'}
                                                value={mailgunDomainId}
                                                options={this.props.mailgunDomain}
                                                optionName={'domain'}
                                                onChangeAction={this.handleInputChange}
                                                error={this.state.errors.mailgunDomainId}
                                            />
                                        ) : (
                                            <InputText
                                                label="Uitgaand"
                                                name={'smtpHost'}
                                                value={smtpHost}
                                                onChangeAction={this.handleInputChange}
                                                required={'required'}
                                                error={this.state.errors.smtpHost}
                                            />
                                        )
                                    ) : (
                                        <div className="form-group col-md-6" />
                                    )}
                                </div>
                                <div className="row">
                                    <InputText
                                        type={'text'}
                                        label="Client secret"
                                        name={'gmailClientSecret'}
                                        value={gmailClientSecret}
                                        placeholder="**********"
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.gmailClientSecret}
                                        // className={'numeric-password'}
                                    />
                                    <div className="form-group col-md-6" />
                                </div>
                                <div className="row">
                                    <InputText
                                        label="Redirect Url"
                                        name={'gmailRedirectUrl'}
                                        value={gmailRedirectUrl}
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.gmailRedirectUrl}
                                    />
                                    <div className="form-group col-md-6" />
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <div className="row">
                                    <InputText
                                        label="Gebruikersnaam"
                                        name={'username'}
                                        value={username}
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.username}
                                    />
                                    <InputText
                                        type={'text'}
                                        label={'Wachtwoord'}
                                        name={'password'}
                                        value={password}
                                        placeholder="**********"
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.password}
                                        className={'numeric-password'}
                                    />
                                </div>
                                <div className="row">
                                    <InputText
                                        label="Inkomend"
                                        name={'imapHost'}
                                        value={imapHost}
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.imapHost}
                                    />
                                    <InputToggle
                                        label="Gebruikt mailgun"
                                        name={'usesMailgun'}
                                        value={usesMailgun}
                                        onChangeAction={this.handleInputUsesMailgun}
                                        required={'required'}
                                    />
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6" />
                                    {usesMailgun ? (
                                        <InputSelect
                                            label="Uitgaand"
                                            name={'mailgunDomainId'}
                                            value={mailgunDomainId}
                                            options={this.props.mailgunDomain}
                                            optionName={'domain'}
                                            onChangeAction={this.handleInputChange}
                                            error={this.state.errors.mailgunDomainId}
                                        />
                                    ) : (
                                        <InputText
                                            label="Uitgaand"
                                            name={'smtpHost'}
                                            value={smtpHost}
                                            onChangeAction={this.handleInputChange}
                                            required={'required'}
                                            error={this.state.errors.smtpHost}
                                        />
                                    )}
                                </div>
                            </React.Fragment>
                        )}
                    </PanelBody>

                    {usesGmailIncoming ? (
                        !usesGmailOutgoing && (
                            <React.Fragment>
                                <PanelHeader>
                                    <span className="h5">Extra instellingen</span>
                                </PanelHeader>
                                <PanelBody>
                                    <div className="row">
                                        <div className="form-group col-md-6" />
                                        {!usesMailgun && (
                                            <InputText
                                                label={'Smtp poort'}
                                                name={'smtpPort'}
                                                value={smtpPort}
                                                onChangeAction={this.handleInputChange}
                                                required={'required'}
                                                error={this.state.errors.smtpPort}
                                            />
                                        )}
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-md-6" />
                                        {!usesMailgun && (
                                            <InputSelect
                                                label="Smtp versleutelde verbinding"
                                                name={'smtpEncryption'}
                                                value={smtpEncryption}
                                                options={[{ id: 'ssl', name: 'SSL' }, { id: 'tls', name: 'TLS' }]}
                                                onChangeAction={this.handleInputChange}
                                            />
                                        )}
                                    </div>
                                </PanelBody>
                            </React.Fragment>
                        )
                    ) : (
                        <React.Fragment>
                            <PanelHeader>
                                <span className="h5">Extra instellingen</span>
                            </PanelHeader>
                            <PanelBody>
                                <div className="row">
                                    <InputText
                                        label={'Imap poort'}
                                        name={'imapPort'}
                                        value={imapPort}
                                        onChangeAction={this.handleInputChange}
                                        required={'required'}
                                        error={this.state.errors.imapPort}
                                    />
                                    {!usesMailgun && (
                                        <InputText
                                            label={'Smtp poort'}
                                            name={'smtpPort'}
                                            value={smtpPort}
                                            onChangeAction={this.handleInputChange}
                                            required={'required'}
                                            error={this.state.errors.smtpPort}
                                        />
                                    )}
                                </div>

                                <div className="row">
                                    <InputSelect
                                        label="Imap versleutelde verbinding"
                                        name={'imapEncryption'}
                                        value={imapEncryption}
                                        options={[{ id: 'ssl', name: 'SSL' }, { id: 'tls', name: 'TLS' }]}
                                        onChangeAction={this.handleInputChange}
                                    />
                                    {!usesMailgun && (
                                        <InputSelect
                                            label="Smtp versleutelde verbinding"
                                            name={'smtpEncryption'}
                                            value={smtpEncryption}
                                            options={[{ id: 'ssl', name: 'SSL' }, { id: 'tls', name: 'TLS' }]}
                                            onChangeAction={this.handleInputChange}
                                        />
                                    )}
                                </div>
                                <div className="row">
                                    <InputText
                                        label={'Inbox prefix'}
                                        name={'imapInboxPrefix'}
                                        value={imapInboxPrefix}
                                        onChangeAction={this.handleInputChange}
                                        error={this.state.errors.imapInboxPrefix}
                                    />
                                </div>
                            </PanelBody>
                        </React.Fragment>
                    )}

                    <PanelHeader>
                        <span className="h5">Log</span>
                    </PanelHeader>
                    <PanelBody>
                        <div className="row">
                            <ViewText label={'Datum email laatst opgehaald'} value={dateLastFetched}
                                      value={dateLastFetched ? moment(dateLastFetched).format('L HH:mm:ss') : 'Nog niet bepaald'}/>
                            <ViewText label={'UID email laatst opgehaald'} value={imapIdLastFetched} />
                        </div>
                    </PanelBody>

                    <PanelBody>
                        <div className="pull-right btn-group" role="group">
                            <ButtonText
                                buttonClassName={'btn-default'}
                                buttonText={'Sluiten'}
                                onClickAction={this.props.switchToView}
                            />
                            <ButtonText
                                buttonText={'Opslaan'}
                                onClickAction={this.handleSubmit}
                                type={'submit'}
                                value={'Submit'}
                                loading={this.state.loading}
                            />
                        </div>
                    </PanelBody>
                </Panel>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        mailboxDetails: state.mailboxDetails,
        mailgunDomain: state.systemData.mailgunDomain,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateMailbox, fetchSystemData }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MailboxDetailsFormGeneralEdit);
