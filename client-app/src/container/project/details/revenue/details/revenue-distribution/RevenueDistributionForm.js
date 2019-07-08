import React, { Component } from 'react';

import RevenueDistributionFormList from './RevenueDistributionFormList';
import Panel from '../../../../../../components/panel/Panel';
import PanelBody from '../../../../../../components/panel/PanelBody';
import PanelHeader from '../../../../../../components/panel/PanelHeader';
import { connect } from 'react-redux';
import ButtonText from '../../../../../../components/button/ButtonText';
import Modal from '../../../../../../components/modal/Modal';
import InputSelect from '../../../../../../components/form/InputSelect';
import DocumentTemplateAPI from '../../../../../../api/document-template/DocumentTemplateAPI';
import validator from 'validator';
import { hashHistory } from 'react-router';
import ViewText from '../../../../../../components/form/ViewText';
import EmailTemplateAPI from '../../../../../../api/email-template/EmailTemplateAPI';
import InputText from '../../../../../../components/form/InputText';
import { getDistribution, previewReport } from '../../../../../../actions/project/ProjectDetailsActions';
import { setError } from '../../../../../../actions/general/ErrorActions';
import ProjectRevenueAPI from '../../../../../../api/project/ProjectRevenueAPI';

class RevenueDistributionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            distributionIds: [],
            templateId: '',
            templateIdError: false,
            templates: [],
            emailTemplateId: '',
            emailTemplateIdError: false,
            emailTemplates: [],
            subject: [],
            documentGroup: '',
            checkedAll: false,
            showCheckboxList: false,
            showModal: false,
            showSuccessMessage: false,
            modalText: '',
            buttonConfirmText: '',
            readyForCreation: false,
            createType: '',
            redirect: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleParticipantCheck = this.toggleParticipantCheck.bind(this);
        this.toggleParticipantCheckNoEmail = this.toggleParticipantCheckNoEmail.bind(this);
        this.handleEmailTemplateChange = this.handleEmailTemplateChange.bind(this);
    }

    componentDidMount() {
        DocumentTemplateAPI.fetchDocumentTemplatesPeekGeneral().then(payload => {
            let templates = [];

            payload.forEach(function(template) {
                if (template.group == 'revenue') {
                    templates.push({ id: template.id, name: template.name });
                }
            });

            this.setState({
                templates: templates,
            });
        });

        EmailTemplateAPI.fetchEmailTemplatesPeek().then(payload => {
            this.setState({
                emailTemplates: payload,
            });
        });

        this.props.getDistribution(this.props.projectRevenue.id, 0);
    }

    changePage = event => {
        const page = event.selected;

        this.props.getDistribution(this.props.projectRevenue.id, page);
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            templateId: value,
        });
    }

    handleSubjectChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            subject: value,
        });
    };

    handleEmailTemplateChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            emailTemplateId: value,
        });

        EmailTemplateAPI.fetchEmailTemplateWithUser(value).then(payload => {
            this.setState({
                subject: payload.subject ? payload.subject : this.state.subject,
            });
        });
    }

    toggleShowCheckboxList = createType => {
        if (this.state.showCheckboxList) {
            this.setState({
                showCheckboxList: false,
                distributionIds: [],
                createType: '',
            });
        } else {
            this.setState({
                showCheckboxList: true,
                createType: createType,
            });
        }
    };

    redirectPayoutInvoicesSend = () => {
        hashHistory.push(this.state.redirect);
    };

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    };

    toggleCheckedAll = () => {
        this.setState({
            distributionIds: [],
            checkedAll: !this.state.checkedAll,
        });
    };

    toggleParticipantCheck = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let distributionIds = this.state.distributionIds;

        if (value) {
            distributionIds.push(name);
            this.setState({
                distributionIds,
            });
        } else {
            distributionIds = distributionIds.filter(id => id != name);
            this.setState({
                distributionIds,
            });
        }
    };

    toggleParticipantCheckNoEmail = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let distributionIds = this.state.distributionIds;

        if (value) {
            distributionIds.push(name);
            this.setState({
                distributionIds,
                showModal: true,
                modalText: 'Waarschuwing: deze participant heeft nog geen primair e-mailadres.',
                buttonConfirmText: 'Ok',
            });
        } else {
            distributionIds = distributionIds.filter(id => id != name);
            this.setState({
                distributionIds,
            });
        }
    };

    checkParticipantRevenueReport = () => {
        let error = false;

        if (validator.isEmpty(this.state.templateId)) {
            error = true;
            this.setState({
                templateIdError: true,
            });
        } else {
            this.setState({
                templateIdError: false,
            });
        }

        if (validator.isEmpty(this.state.emailTemplateId)) {
            error = true;
            this.setState({
                emailTemplateIdError: true,
            });
        } else {
            this.setState({
                emailTemplateIdError: false,
            });
        }

        let distributionIds = [];

        if (this.state.checkedAll) {
            this.props.projectRevenue.distribution.data.forEach(function(distribution) {
                distributionIds.push(distribution.id);
            });

            this.setState({
                distributionIds: distributionIds,
            });
        }

        if ((this.state.distributionIds.length > 0 && !error) || (distributionIds.length > 0 && !error)) {
            this.setState({
                showModal: true,
                modalText: "Er wordt eerst een preview getoond van de PDF's en e-mails.",
                buttonConfirmText: 'Preview',
                readyForCreation: true,
            });
        } else if (!error) {
            this.setState({
                showModal: true,
                modalText: 'Er zijn geen deelnemers geselecteerd.',
                buttonConfirmText: 'Voeg deelnemers toe',
            });
        }
    };

    createParticipantRevenueReport = () => {
        if (!this.state.readyForCreation) {
            this.setState({
                showModal: false,
            });
        } else {
            if (!this.props.projectRevenue.project.administration.canCreatePaymentInvoices['can']) {
                this.props.setError(
                    412,
                    this.props.projectRevenue.project.administration.canCreatePaymentInvoices['message']
                );
                this.setState({
                    showModal: false,
                });
                return;
            } else {
                this.props.previewReport({
                    templateId: this.state.templateId,
                    emailTemplateId: this.state.emailTemplateId,
                    subject: this.state.subject,
                    distributionIds: this.state.distributionIds,
                });
                hashHistory.push(`/project/opbrengst/${this.props.projectRevenue.id}/facturen`);
            }
        }
    };

    checkParticipantRevenueInvoices = () => {
        let distributionIds = [];

        if (this.state.checkedAll) {
            this.props.projectRevenue.distribution.data.forEach(function(distribution) {
                distributionIds.push(distribution.id);
            });

            this.setState(
                {
                    distributionIds,
                },
                () => this.createPaymentInvoices(false, true)
            );
        } else {
            if (this.state.distributionIds.length) {
                this.createPaymentInvoices(false, true);
            } else {
                this.setState({
                    showModal: true,
                    modalText: 'Er zijn geen deelnemers geselecteerd.',
                    buttonConfirmText: 'Voeg deelnemers toe',
                });
            }
        }
    };

    createPaymentInvoices = (createReport, createInvoice) => {
        document.body.style.cursor = 'wait';
        ProjectRevenueAPI.createPaymentInvoices(
            null,
            null,
            null,
            this.state.distributionIds,
            createReport,
            createInvoice
        ).then(payload => {
            document.body.style.cursor = 'default';
            this.setState({
                showSuccessMessage: true,
                successMessage: 'De facturen worden gemaakt.',
                redirect: `/financieel/${payload.data}/uitkering-facturen/verzonden`,
            });
        });
    };

    render() {
        let administrationIds = [];
        this.props.administrations.forEach(function(administration) {
            administrationIds.push(administration.id);
        });

        return (
            <Panel>
                <PanelHeader>
                    <span className="h5 text-bold">Opbrengstverdeling deelnemers</span>
                    <div className="btn-group pull-right">
                        {this.props.projectRevenue.confirmed == 1 &&
                            administrationIds.includes(this.props.projectRevenue.project.administrationId) && (
                                <React.Fragment>
                                    <ButtonText
                                        buttonText={'Rapportage maken'}
                                        onClickAction={() => this.toggleShowCheckboxList('createReport')}
                                    />

                                    {this.state.showCheckboxList && this.state.createType === 'createInvoices' ? (
                                        <ButtonText
                                            buttonText={'Maak facturen'}
                                            onClickAction={this.checkParticipantRevenueInvoices}
                                            buttonClassName={'btn-primary'}
                                        />
                                    ) : (
                                        <React.Fragment>
                                            {this.props.projectRevenue.category.codeRef !== 'revenueKwh' ? (
                                                <ButtonText
                                                    buttonText={'Facturen maken'}
                                                    onClickAction={() => this.toggleShowCheckboxList('createInvoices')}
                                                    buttonClassName={'btn-primary'}
                                                />
                                            ) : null}
                                        </React.Fragment>
                                    )}
                                </React.Fragment>
                            )}
                    </div>
                </PanelHeader>
                <PanelBody>
                    {this.state.showCheckboxList && this.state.createType === 'createReport' ? (
                        <Panel>
                            <PanelBody>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ViewText label="Documentgroep" value={'Opbrengst'} />
                                        <InputSelect
                                            label="Document template"
                                            name={'templateId'}
                                            value={this.state.templateId}
                                            options={this.state.templates}
                                            onChangeAction={this.handleInputChange}
                                            required={'required'}
                                            error={this.state.templateIdError}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <InputSelect
                                            label="E-mail template"
                                            name={'emailTemplateId'}
                                            value={this.state.emailTemplateId}
                                            options={this.state.emailTemplates}
                                            onChangeAction={this.handleEmailTemplateChange}
                                            required={'required'}
                                            error={this.state.emailTemplateIdError}
                                        />
                                        <InputText
                                            label={'E-mail onderwerp'}
                                            name={'subject'}
                                            value={this.state.subject}
                                            onChangeAction={this.handleSubjectChange}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="margin-10-top pull-right btn-group" role="group">
                                            <ButtonText
                                                buttonClassName={'btn-default'}
                                                buttonText={'Annuleren'}
                                                onClickAction={this.toggleShowCheckboxList}
                                            />
                                            <ButtonText
                                                buttonText={'Maak rapport'}
                                                onClickAction={this.checkParticipantRevenueReport}
                                                type={'submit'}
                                                value={'Submit'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </PanelBody>
                        </Panel>
                    ) : null}
                    <div className="col-md-12">
                        <RevenueDistributionFormList
                            changePage={this.changePage}
                            showCheckboxList={this.state.showCheckboxList}
                            checkedAll={this.state.checkedAll}
                            toggleCheckedAll={this.toggleCheckedAll}
                            toggleParticipantCheck={this.toggleParticipantCheck}
                            toggleParticipantCheckNoEmail={this.toggleParticipantCheckNoEmail}
                        />
                    </div>
                </PanelBody>
                {this.state.showModal && (
                    <Modal
                        title={'Deelnemer rapport maken'}
                        closeModal={this.toggleModal}
                        buttonConfirmText={this.state.buttonConfirmText}
                        confirmAction={this.createParticipantRevenueReport}
                    >
                        {this.state.modalText}
                    </Modal>
                )}
                {this.state.showSuccessMessage && (
                    <Modal
                        title={'Succes'}
                        closeModal={this.redirectPayoutInvoicesSend}
                        buttonCancelText={'Ok'}
                        showConfirmAction={false}
                    >
                        {this.state.successMessage}
                    </Modal>
                )}
            </Panel>
        );
    }
}

const mapStateToProps = state => {
    return {
        projectRevenue: state.projectRevenue,
        documentGroups: state.systemData.documentGroups,
        administrations: state.meDetails.administrations,
    };
};

const mapDispatchToProps = dispatch => ({
    previewReport: id => {
        dispatch(previewReport(id));
    },
    getParticipants: (id, page) => {
        dispatch(getParticipants({ id, page }));
    },
    getDistribution: (id, page) => {
        dispatch(getDistribution({ id, page }));
    },
    setError: (http_code, message) => {
        dispatch(setError(http_code, message));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RevenueDistributionForm);
