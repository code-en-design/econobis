import React from 'react';
import {connect} from 'react-redux';

import Panel from "../../../../components/panel/Panel";
import PanelBody from "../../../../components/panel/PanelBody";
import RegistrationList from './RegistrationList';

const TaskHarmonica = ({toggleShowList, showRegistrationsList, newRegistration, registrationCount, permissions}) => {
    return (
        <Panel className={"harmonica-button"}>
            <PanelBody>
                <div className="col-sm-9" onClick={toggleShowList}>
                    <span className="">AANMELDINGEN <span className="badge">{ registrationCount }</span></span>
                </div>
                <div className="col-sm-3">
                    {permissions.manageRegistration &&
                    <a role="button" className="pull-right" onClick={newRegistration}><span
                        className="glyphicon glyphicon-plus glyphicon-white"/></a>
                    }
                </div>
                { showRegistrationsList && <RegistrationList /> }
            </PanelBody>
        </Panel>
    );
};

const mapStateToProps = (state) => {
    return {
        permissions: state.meDetails.permissions
    };
};

export default connect(mapStateToProps, null)(TaskHarmonica);