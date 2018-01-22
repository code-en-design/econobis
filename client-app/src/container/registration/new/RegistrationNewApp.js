import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { isEmpty } from 'lodash';

import { fetchContactDetails } from '../../../actions/contact/ContactDetailsActions';
import RegistrationNewForm from './RegistrationNewForm';
import RegistrationNewToolbar from './RegistrationNewToolbar';

class RegistrationNewApp extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(isEmpty(this.props.contactDetails)) {
            this.props.fetchContactDetails(this.props.params.contactId);
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <div className="col-md-12 margin-10-top">
                        <RegistrationNewToolbar contactId={this.props.params.contactId} />
                    </div>

                    <div className="col-md-12 margin-10-top">
                        <RegistrationNewForm contactId={this.props.params.contactId} addressId={this.props.params.addressId}/>
                    </div>
                </div>
                <div className="col-md-3" />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        contactDetails: state.contactDetails,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchContactDetails: (id) => {
        dispatch(fetchContactDetails(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationNewApp);