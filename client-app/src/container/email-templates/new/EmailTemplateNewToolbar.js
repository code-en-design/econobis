import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import Panel from '../../../components/panel/Panel';
import PanelBody from '../../../components/panel/PanelBody';
import ButtonIcon from '../../../components/button/ButtonIcon';


class EmailTemplateNewToolbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            showDelete: false,
        }
    }

    render() {

        return (
            <div className="row">
                <div className="col-sm-12">
                    <Panel>
                        <PanelBody className={"panel-small"}>
                            <div className="col-md-4">
                                <div className="btn-group margin-small" role="group">
                                    <ButtonIcon iconName={"glyphicon-arrow-left"} onClickAction={browserHistory.goBack} />
                                </div>
                            </div>
                            <div className="col-md-4"><h3 className="text-center table-title">Nieuwe e-mail template</h3></div>
                            <div className="col-md-4" />
                        </PanelBody>
                    </Panel>
                </div>
            </div>
        );
    };
};

export default EmailTemplateNewToolbar;
