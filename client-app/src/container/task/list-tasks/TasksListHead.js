import React from 'react';
import { connect } from 'react-redux';

import DataTableHeadTitleAndSort from '../../../components/dataTable/DataTableHeadTitleAndSort';
import { setTasksSortsFilter } from '../../../actions/task/TasksSortsActions';

const TasksListHead = (props) => {
    const setSorts = (field, order) => {
        props.setTasksSortsFilter(field, order);

        setTimeout(() => {
            props.fetchTasksData();
        }, 100);
    };

    return (
        <tr className="thead-title">
            <DataTableHeadTitleAndSort sortColumn={'createdAt'} title={'Datum'} width={'8%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'typeName'} title={'Type taak'} width={'10%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'note'} title={'Taak / notitie'} width={'20%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'contactName'} title={'Contact'} width={'17%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'datePlannedStart'} title={'Datum afhandelen'} width={'8%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'responsibleName'} title={'Verantwoordelijke'} width={'15%'} setSorts={setSorts} />
            <th width="5%" />
        </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    setTasksSortsFilter: (field, order) => {
        dispatch(setTasksSortsFilter(field, order));
    },
});

export default connect(null, mapDispatchToProps)(TasksListHead);