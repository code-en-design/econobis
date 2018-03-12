import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import validator from 'validator';

import InputText from '../../../components/form/InputText';
import InputSelect from '../../../components/form/InputSelect';
import ButtonText from '../../../components/button/ButtonText';
import PanelBody from "../../../components/panel/PanelBody";
import PanelHeader from "../../../components/panel/PanelHeader";
import Panel from "../../../components/panel/Panel";
import TeamDetailsAPI from '../../../api/team/TeamDetailsAPI';

class TeamNewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: {
                id: '',
                name: '',

            },
            errors: {
                name: false,
            },
        };
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            team: {
                ...this.state.team,
                [name]: value
            },
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { team }  = this.state;

        // Validation
        let errors = {};
        let hasErrors = false;

        if(validator.isEmpty(team.name)){
            errors.name = true;
            hasErrors = true;
        };

        this.setState({ ...this.state, errors: errors });

        // If no errors send form
        !hasErrors &&
            TeamDetailsAPI.newTeam(team).then((payload) => {
                hashHistory.push(`/team/${payload.data.data.id}`);
            }).catch(function (error) {
                console.log(error)
            });
    };

    render() {
        const { name } = this.state.team;

        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <Panel>
                    <PanelBody>
                        <div className="row">
                            <InputText
                                label="Naam"
                                name={"name"}
                                value={name}
                                onChangeAction={this.handleInputChange}
                                required={"required"}
                                error={this.state.errors.name}
                            />
                        </div>
                    </PanelBody>

                    <PanelBody>
                        <div className="pull-right btn-group" role="group">
                            <ButtonText buttonText={"Opslaan"} onClickAction={this.handleSubmit} type={"submit"} value={"Submit"}/>
                        </div>
                    </PanelBody>
                </Panel>
            </form>
        );
    };
};

export default TeamNewForm;