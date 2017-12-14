import React from 'react';
import { hashHistory, Link } from 'react-router';

import ButtonIcon from '../../../components/button/ButtonIcon';

const RegistrationsListToolbar = props => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="btn-group" role="group">
                    <ButtonIcon iconName={"glyphicon-refresh"} onClickAction={props.refreshRegistrationsData} />
                </div>
            </div>
            <div className="col-md-4"><h3 className="text-center table-title">Aanmeldingen</h3></div>
            <div className="col-md-4" />
        </div>
    );
};

export default RegistrationsListToolbar;