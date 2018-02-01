import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEmails, clearEmails } from '../../../actions/email/EmailsActions';
import { setEmailsPagination } from '../../../actions/email/EmailsPaginationActions';
import EmailsInList from './EmailsInList';
import EmailsInListToolbar from './EmailsInListToolbar';
import Panel from "../../../components/panel/Panel";
import PanelBody from "../../../components/panel/PanelBody";
import { isEmpty } from 'lodash';
import MailboxAPI from '../../../api/mailbox/MailboxAPI';
import filterHelper from "../../../helpers/FilterHelper";
import {bindActionCreators} from "redux";
import {clearFilterEmail} from "../../../actions/email/EmailFiltersActions";

class EmailsInListApp extends Component {
    constructor(props) {
        super(props);

        this.refreshData = this.refreshData.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        this.fetchEmailsData();
    };

    componentWillUnmount() {
        this.props.clearEmails();
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.params.folder !== nextProps.params.folder) {
            if (!isEmpty(nextProps.params.folder)) {
                this.props.setEmailsPagination({page: 0, offset: 0});
                this.props.clearEmails();
                this.fetchEmailsData();
                }
            }
        }

    resetEmailsFilters() {
        this.props.clearFilterEmail();

        this.fetchEmailsData();
    };

    onSubmitFilter() {
        this.props.clearEmails();

        this.props.setEmailsPagination({page: 0, offset: 0});

        this.fetchEmailsData();
    };

    fetchEmailsData() {
        setTimeout(() => {
            const filters = filterHelper(this.props.emailsFilters);
            const sorts = this.props.emailsSorts.reverse();
            const pagination = { limit: 20, offset: this.props.emailsPagination.offset };

            this.props.fetchEmails(this.props.params.folder, filters, sorts, pagination);
        },100 );
    };

    refreshData() {
        MailboxAPI.receiveMailFromMailboxesUser().then(payload => {
            const pagination = { limit: 20, offset: 0 };

            this.props.clearEmails();
            this.resetEmailsFilters();
            this.props.fetchEmails(this.props.params.folder, pagination);
        });
    }

    handlePageClick(data) {
        let page = data.selected;
        let offset = Math.ceil(page * 20);

        this.props.setEmailsPagination({page, offset});

        this.fetchEmailsData();
    };

    render() {
        return (
                <Panel className="col-md-9">
                    <PanelBody>
                        <div className="col-md-12 margin-10-top">
                            <EmailsInListToolbar
                                refreshData={this.refreshData}
                                folder={this.props.params.folder == 'inbox' ? 'inbox' : 'verzonden'}
                            />
                        </div>

                        <div className="col-md-12 margin-10-top">
                            <EmailsInList
                                handlePageClick={this.handlePageClick}
                                emails={this.props.emails}
                                emailsPagination={this.props.emailsPagination}
                                onSubmitFilter={() => this.onSubmitFilter()}
                                fetchEmailsData={() => this.fetchEmailsData()}/>
                        </div>
                    </PanelBody>
                </Panel>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        emails: state.emails.list,
        emailsPagination: state.emails.pagination,
        emailsFilters: state.emails.filters,
        emailsSorts: state.emails.sorts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchEmails, clearEmails, clearFilterEmail, setEmailsPagination }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailsInListApp);