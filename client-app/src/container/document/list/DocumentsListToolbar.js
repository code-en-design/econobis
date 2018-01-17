import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { browserHistory } from 'react-router';

import ButtonIcon from '../../../components/button/ButtonIcon';

const DocumentsListToolbar = (props) => {
    const newDocument = () => {
        hashHistory.push('document/nieuw');
    };

    const { permissions = {} } = props;

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="btn-group" role="group">
                    <ButtonIcon iconName={"glyphicon-arrow-left"} onClickAction={browserHistory.goBack}/>
                    <ButtonIcon iconName={'glyphicon-plus'} onClickAction={newDocument}/>
                </div>

            </div>
            <div className="col-md-4"><h3 className="text-center table-title">Documenten</h3></div>
            <div className="col-md-4"/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        permissions: state.meDetails.permissions,
    }
};

export default connect(mapStateToProps)(DocumentsListToolbar);

