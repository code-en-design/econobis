import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ViewText from '../../../../components/form/ViewText';
import PanelHeader from "../../../../components/panel/PanelHeader";

const TaskDetailsFormGeneralView = props => {
    const {
        note,
        type,
        contact,
        finished,
        intakeId,
        intakeName,
        contactGroup,
        campaign,
        housingFile,
        productionProject,
        participant,
        datePlannedStart,
        datePlannedFinish,
        startTimePlanned,
        endTimePlanned,
        dateFinished,
        responsibleUser,
        responsibleTeam,
        finishedBy,
        opportunityId,
        opportunityName
    } = props.taskDetails;

    return (
        <div>
            <div onClick={props.switchToEdit}>
                <div className="row">
                    <ViewText
                        label="Type"
                        value={type && type.name}
                    />
                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <label htmlFor="description" className="col-sm-12">Taak / notitie</label>
                    </div>
                    <div className="col-sm-9" id="description">
                        {note}
                    </div>
                </div>

                <div className="row margin-20-top">
                    <ViewText
                        label={"Datum afhandelen"}
                        value={datePlannedStart && moment(datePlannedStart.date).format('L')}
                    />

                    <ViewText
                        label={"Start tijd"}
                        value={startTimePlanned && moment('1900-01-01 ' + startTimePlanned).format("HH:mm")}
                    />
                </div>

                <div className="row">
                    <ViewText
                        label={"Eind datum"}
                        value={datePlannedFinish && moment(datePlannedFinish.date).format('L')}
                    />

                    <ViewText
                        label={"Eind tijd"}
                        value={endTimePlanned && moment('1900-01-01 ' + endTimePlanned).format("HH:mm")}
                    />
                </div>

                <div className="row">
                    <ViewText
                        label={"Afgehandeld?"}
                        value={finished ? 'Ja' : 'Nee'}
                    />
                    <ViewText
                        label={"Verantwoordelijke"}
                        value={responsibleUser ? responsibleUser.fullName : responsibleTeam.name}
                        link={responsibleUser ? 'gebruiker/' + responsibleUser.id : 'team/' + responsibleTeam.id}
                    />
                </div>

                <div className="row">
                    <ViewText
                        label={"Datum gereed"}
                        value={dateFinished && moment(dateFinished.date).format('L')}
                    />
                    <ViewText
                        label="Afgerond door"
                        value={finishedBy && finishedBy.fullName}
                        link={finishedBy ? 'gebruiker/' + finishedBy.id : ''}
                    />
                </div>

                <div className="row margin-20-top">
                    <ViewText
                        label={"Contact"}
                        value={contact && contact.fullName}
                        link={contact ? 'contact/' + contact.id : ''}
                    />
                </div>
            </div>

            <div className="margin-10-top">
                <PanelHeader>
                    <div className="row" onClick={props.toggleExtraConnections}>
                        {
                            props.showExtraConnections ?
                                <span className="glyphicon glyphicon-menu-down"/>
                                :
                                <span className="glyphicon glyphicon-menu-right" />
                        }
                        <span className="h5">Overige koppelingen</span>
                    </div>
                </PanelHeader>
                {
                    props.showExtraConnections &&
                    <div>
                        <div className="row">
                            <ViewText
                                label={"Campagne"}
                                value={campaign && campaign.name}
                                link={campaign ? 'campagne/' + campaign.id : ''}
                            />
                            <ViewText
                                label={"Intake"}
                                value={intakeName}
                                link={intakeId ? 'intake/' + intakeId : ''}
                            />

                        </div>

                        <div className="row">
                            <ViewText
                                label={"Groep"}
                                value={contactGroup && contactGroup.name}
                                link={contactGroup ? 'contact-groep/' + contactGroup.id : ''}
                            />
                            <ViewText
                                label={"Kans"}
                                value={opportunityName}
                                link={opportunityId ? 'kans/' + opportunityId : ''}
                            />
                        </div>

                        <div className="row">
                            <ViewText
                                label={"Woningdossier"}
                                value={housingFile && housingFile.id}
                                link={housingFile ? 'woningdossier/' + housingFile.id : ''}
                            />
                            <ViewText
                                label={"Productie project"}
                                value={productionProject && productionProject.name}
                                link={productionProject ? 'productie-project/' + productionProject.id : ''}
                            />
                        </div>

                        <div className="row">
                            <ViewText
                                label={"Participant productie project"}
                                value={participant && participant.name}
                                link={participant ? 'productie-project/participant/' + participant.id : ''}
                            />
                        </div>

                    </div>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        taskDetails: state.taskDetails,
    };
};

export default connect(mapStateToProps)(TaskDetailsFormGeneralView);