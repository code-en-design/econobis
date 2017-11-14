import React, {Component} from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { fetchContactDetails } from '../../actions/ContactDetailsActions';
import ContactDetailsFormGeneral from './general/ContactDetailsFormGeneral';
import ContactDetailsFormAddress from './address/ContactDetailsFormAddress';
import ContactDetailsFormPhone from './phone/ContactDetailsFormPhone';
import ContactDetailsFormEmail from './email/ContactDetailsFormEmail';
import ContactDetailsFormPerson from './person/ContactDetailsFormPerson';
import ContactDetailsFormEnergy from './energy/ContactDetailsFormEnergy';
import ContactDetailsFormOther from './other/ContactDetailsFormOther';
import ContactDetailsFormNote from './note/ContactDetailsFormNote';
import ContactDetailsFormConclusion from './conclusion/ContactDetailsFormConclusion';

class ContactDetailsForm extends Component {
    constructor(props){
        super(props);
    };

    componentDidMount() {
        this.props.fetchContactDetails(this.props.id);
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.id !== nextProps.id) {
            this.props.fetchContactDetails(nextProps.id);
        }
    }

    render() {
        return (
            isEmpty(this.props.contactDetails) ?
                <div>Geen gegevens gevonden!</div>
                :
                <div>
                    <ContactDetailsFormGeneral />
                    { this.props.contactDetails.typeId == 'account' &&
                        <ContactDetailsFormPerson />
                    }
                    <ContactDetailsFormAddress />
                    <ContactDetailsFormEmail />
                    <ContactDetailsFormPhone />
                    {/* <ContactDetailsFormEnergy /> */}
                    { this.props.contactDetails.typeId == 'person' &&
                        <ContactDetailsFormOther />
                    }
                    <ContactDetailsFormNote />
                    <ContactDetailsFormConclusion />
                </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsForm);
