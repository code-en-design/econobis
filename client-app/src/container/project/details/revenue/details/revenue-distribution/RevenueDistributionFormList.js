import React from 'react';
import { connect } from 'react-redux';

import RevenueDistributionFormView from './RevenueDistributionFormView';
import DataTablePagination from '../../../../../../components/dataTable/DataTablePagination';

const RevenueDistributionFormList = props => {
    return (
        <div>
            <div className="row border header">
                {props.projectRevenue.confirmed && props.showCheckboxList && props.checkedAll ? (
                    <div className="col-sm-1">
                        <input type="checkbox" onChange={props.toggleCheckedAll} checked />
                    </div>
                ) : (
                    ''
                )}
                {props.projectRevenue.confirmed && props.showCheckboxList && !props.checkedAll ? (
                    <div className="col-sm-1">
                        <input type="checkbox" onChange={props.toggleCheckedAll} />
                    </div>
                ) : (
                    ''
                )}
                <div className="col-sm-1">Type</div>
                <div className="col-sm-2">Naam</div>
                <div className="col-sm-1">Deelnames</div>
                <div className="col-sm-1">Uit te keren bedrag</div>
                <div className="col-sm-1">Uitkeren op</div>
                <div className="col-sm-1">Datum uitkering</div>
                {props.projectRevenue.category.codeRef === 'revenueKwh' ? (
                    <React.Fragment>
                        <div className="col-sm-2">Energieleverancier</div>
                        <div className="col-sm-1">Geleverd totaal</div>
                        <div className="col-sm-1">Teruggave energiebelasting</div>
                    </React.Fragment>
                ) : null}
            </div>
            {props.projectRevenue.distribution && props.projectRevenue.distribution.data.length > 0 ? (
                props.projectRevenue.distribution.data.map(participation => {
                    return (
                        <RevenueDistributionFormView
                            key={participation.id}
                            participation={participation}
                            showCheckboxList={props.showCheckboxList}
                            checkedAll={props.checkedAll}
                            toggleParticipantCheck={props.toggleParticipantCheck}
                            toggleParticipantCheckNoEmail={props.toggleParticipantCheckNoEmail}
                            projectRevenueCategoryCodeRef={props.projectRevenue.category.codeRef}
                        />
                    );
                })
            ) : (
                <div>Geen deelnemers bekend.</div>
            )}
            <DataTablePagination
                initialPage={0}
                onPageChangeAction={props.changePage}
                recordsPerPage={100}
                totalRecords={
                    props.projectRevenue.distribution &&
                    props.projectRevenue.distribution.meta &&
                    props.projectRevenue.distribution.meta.total
                }
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        project: state.projectRevenue.project,
        projectRevenue: state.projectRevenue,
    };
};

export default connect(mapStateToProps)(RevenueDistributionFormList);
