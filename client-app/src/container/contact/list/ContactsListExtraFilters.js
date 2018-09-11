import React, {Component} from 'react';

import Modal from '../../../components/modal/Modal';
import DataTableCustomFilter from "../../../components/dataTable/DataTableCustomFilter";
import ButtonText from "../../../components/button/ButtonText";
import {connect} from "react-redux";

class ContactsListExtraFilters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterType: props.filterType ? props.filterType : 'and',
            amountOfFilters: props.amountOfFilters !== undefined ? props.amountOfFilters : 1,
            filters: props.extraFilters !== undefined ? props.extraFilters : [{
                field: 'name',
                type: 'eq',
                data: '',
            }],
        };
    };

    closeModal = () => {
        this.props.toggleShowExtraFilters();
    };

    confirmAction = () => {
        this.props.handleExtraFiltersChange(this.state.filters, this.state.amountOfFilters, this.state.filterType);
    };

    handleFilterChange = (field, data, filterNumber) => {
        let filters = this.state.filters;
        let amountOfFilters = this.state.amountOfFilters;

        if(data === 'product') {
            filters[filterNumber] = {
                field: 'product',
                type: 'eq',
                data: '',
                connectName: data + filterNumber,
            };

            filters.splice(filterNumber + 1, 0, {
                field: 'dateStart',
                type: 'eq',
                data: '',
                connectedTo: data + filterNumber,
                }
            );

            filters.splice(filterNumber + 2, 0, {
                    field: 'dateFinish',
                    type: 'eq',
                    data: '',
                    connectedTo: data + filterNumber,
                }
            );

            filters.splice(filterNumber + 3, 0, {
                    field: 'orderStatus',
                    type: 'eq',
                    data: '',
                    connectedTo: data + filterNumber,
                }
            );

            amountOfFilters = amountOfFilters + 3;
        } else {
            filters[filterNumber][field] = data;
        }

        this.setState({
            ...this.state,
            filters: filters
        });

        setTimeout(() => {
            this.setState({
                amountOfFilters
            });
        }, 300);
    };

    handleFilterTypeChange = (type) => {
        this.setState({
            ...this.state,
            filterType: type
        });
    };

    addFilterRow = () => {

        let filters = this.state.filters;

        filters[this.state.amountOfFilters] =
            {
                field: 'name',
                type: 'eq',
                data: ''
            };

        setTimeout(() => {
            this.setState({
                ...this.state,
                filters: filters
            });
        }, 300);

        setTimeout(() => {
            this.setState({
                amountOfFilters: this.state.amountOfFilters + 1,
            });
        }, 300);
    };

    render() {
        const fields = {
            name: {
                name: 'Naam',
                type: 'string',
            },
            postalCodeNumber: {
                name: 'Postcode nummer',
                type: 'number',
            },
            createdAt: {
                name: 'Gemaakt op',
                type: 'date',
            },
            currentParticipations: {
                name: 'Aantal participaties',
                type: 'number',
            },
            occupation: {
                name: 'Verbinding',
                type: 'dropdownHas',
                dropDownOptions: this.props.occupations,
            },
            opportunity: {
                name: 'Kans',
                type: 'dropdownHas',
                dropDownOptions: this.props.measureCategories,
            },
            product: {
                name: 'Product',
                type: 'dropdownHas',
                dropDownOptions: this.props.products,
            },
            dateOfBirth: {
                name: 'Geboortedatum',
                type: 'date',
            },
            energySupplier: {
                name: 'Energie leverancier',
                type: 'dropdown',
                dropDownOptions: this.props.energySuppliers,
            },
        };

        // Options only if product is set
        const customProductFields = {
            dateStart: {
                name: 'Begin datum',
                type: 'date'
            },
            dateFinish: {
                name: 'Eind datum',
                type: 'date'
            },
            orderStatus: {
                name: 'Order status',
                type: 'dropdownHas',
                dropDownOptions: this.props.orderStatuses,
            },
        };

        let filters = [];

        for (let i = 0; i < this.state.amountOfFilters; i++) {
            filters.push(<DataTableCustomFilter key={i} filter={this.state.filters[i]} filterNumber={i} fields={{...fields, ...customProductFields}}
                                                handleFilterChange={this.handleFilterChange}/>);
        }

        return (
            <Modal
                title="Extra filters"
                buttonConfirmText="Toepassen"
                confirmAction={this.confirmAction}
                closeModal={this.closeModal}
                buttonCancelText={'Sluiten'}
                extraButtonLabel={'Maak groep'}
                extraButtonClass={'btn-success'}
                extraButtonAction={this.props.saveAsGroup}
            >
                <div className={'row filter-row'}>
                    <h5>
                        <div className={'col-xs-4'}>
                            <input
                                onChange={() => this.handleFilterTypeChange('and')}
                                type="radio" name='type' value="and" id='and'
                                checked={this.state.filterType === 'and'}/>
                            <label htmlFor='and'>Alle filters zijn en</label>
                        </div>
                        <div className={'col-xs-4'}>
                            <input
                                onChange={() => this.handleFilterTypeChange('or')}
                                type="radio" name='type' value="or" id='or'
                                checked={this.state.filterType === 'or'}/>
                            <label htmlFor='or'>Alle filters zijn of</label>
                        </div>
                    </h5>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="col-md-4">Zoekveld</th>
                        <th className="col-md-4"/>
                        <th className="col-md-4">Waarde</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filters}
                    </tbody>
                </table>
                <div className='row'>
                    <div className='col-xs-12 text-right'>
                        <ButtonText buttonText={'Extra filter'} onClickAction={this.addFilterRow}/>
                    </div>
                </div>
            </Modal>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        participantProductionProjectStatus: state.systemData.participantProductionProjectStatus,
        contactStatuses: state.systemData.contactStatuses,
        occupations: state.systemData.occupations,
        measureCategories: state.systemData.measureCategories,
        products: state.systemData.products,
        energySuppliers: state.systemData.energySuppliers,
        orderStatuses: state.systemData.orderStatuses,
    };
};

export default connect(mapStateToProps)(ContactsListExtraFilters);