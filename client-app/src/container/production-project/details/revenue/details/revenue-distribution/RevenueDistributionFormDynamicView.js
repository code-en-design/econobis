import React from 'react';
import moment from "moment/moment";
moment.locale('nl');

const RevenueDistributionFormDynamicView = props => {
    const { id, contact, participationsCurrent, type} = props.participation;
    const { datePayed, revenue, payPercentage } = props.productionProjectRevenue;
    const { currentParticipations } = props.productionProject;

    let payout = ((revenue * (payPercentage / 100)) / currentParticipations) * participationsCurrent;

    return (
        <div className={`row border`}>
            <div className="col-sm-1">
                {id}
            </div>
            <div className="col-sm-1">
                {contact.type ? contact.type.name : ''}
            </div>
            <div className="col-sm-1">
                {contact ? contact.fullName : ''}
            </div>
            <div className="col-sm-1">
                {contact.primaryAddress ? contact.primaryAddress.street + ' ' + contact.primaryAddress.number : ''}
            </div>
            <div className="col-sm-1">
                {contact.primaryAddress ? contact.primaryAddress.postalCode : ''}
            </div>
            <div className="col-sm-1">
                {contact.primaryAddress ? contact.primaryAddress.city : ''}
            </div>
            <div className="col-sm-1">
                {contact.status ? contact.status.name : ''}
            </div>
            <div className="col-sm-1">
                {participationsCurrent ? participationsCurrent : 0}
            </div>
            <div className="col-sm-1">
                {payout && payout}
            </div>
            <div className="col-sm-1">
                {type ? type.name : ''}
            </div>
            <div className="col-sm-1">
                {datePayed ? moment(datePayed).format('L') : ''}
            </div>
            <div className="col-sm-1">
                {contact.primaryContactEnergySupplier ? contact.primaryContactEnergySupplier.energySupplier.name : ''}
            </div>
        </div>
    );
};

export default RevenueDistributionFormDynamicView;
