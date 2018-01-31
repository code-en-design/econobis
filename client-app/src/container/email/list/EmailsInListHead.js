import React from 'react';
import { connect } from 'react-redux';

import DataTableHeadTitleAndSort from '../../../components/dataTable/DataTableHeadTitleAndSort';
import DataTableHeadTitle from "../../../components/dataTable/DataTableHeadTitle";
import {setEmailSortsFilter} from "../../../actions/email/EmailSortsActions";

const EmailsInListHead = (props) => {
    const setSorts = (field, order) => {
        props.setEmailSortsFilter(field, order);

        setTimeout(() => {
            props.fetchEmailsData();
        }, 100);
    };

    return (
        <tr className="thead-title">
            <DataTableHeadTitleAndSort sortColumn={'date'} title={'Datum'} width={'10%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'mailbox'} title={'Mailbox'} width={'20%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'sentBy'} title={'Afzender'} width={'20%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'subject'} title={'Onderwerp'} width={'25%'} setSorts={setSorts} />
            <DataTableHeadTitleAndSort sortColumn={'statusId'} title={'Status'} width={'10%'} setSorts={setSorts} />
            <DataTableHeadTitle title={''} width={'5%'}/>
        </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    setEmailSortsFilter: (field, order) => {
        dispatch(setEmailSortsFilter(field, order));
    },
});

export default connect(null, mapDispatchToProps)(EmailsInListHead);
