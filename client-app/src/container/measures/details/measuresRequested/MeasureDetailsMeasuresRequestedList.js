import React from 'react';
import {connect} from 'react-redux';

import MeasureDetailsMeasureRequestedItem from "./MeasureDetailsMeasureRequestedItem";

const MeasureDetailsMeasuresRequestedList = props => {
    return (
        <div>
            <div className="row border header">
                <div className="col-sm-3">Aanmelding</div>
                <div className="col-sm-3">Gewenste datum</div>
                <div className="col-sm-5">Contact</div>
                <div className="col-sm-1"></div>
            </div>
            {
                props.measuresRequested.length > 0 ?
                    props.measuresRequested.map(measureRequested => {
                        return <MeasureDetailsMeasureRequestedItem
                            key={measureRequested.id}
                            measureRequested={measureRequested}
                        />;
                    })
                    :
                    <div>Geen aanmeldingen bekend waar deze maatregel gewenst is</div>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        measuresRequested: state.measure.measuresRequested,
    };
};
export default connect(mapStateToProps)(MeasureDetailsMeasuresRequestedList);

