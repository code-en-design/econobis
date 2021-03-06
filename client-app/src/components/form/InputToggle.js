import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';

const InputToggle = props => {
    const { label, size, id, name, value, onChangeAction, required, divSize, className, disabled } = props;

    return (
        <div className={`form-group ${divSize} ${className}`}>
            <div>
                <label htmlFor={id} className={`col-sm-6 ${required}`}>
                    {label}
                </label>
            </div>
            <div className={`${size}`}>
                <Toggle id={id} name={name} onChange={onChangeAction} checked={value} disabled={disabled} />
            </div>
        </div>
    );
};

InputToggle.defaultProps = {
    className: '',
    size: 'col-sm-6',
    divSize: 'col-sm-6',
    required: '',
    disabled: false,
    value: null,
};

InputToggle.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.string,
    divSize: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChangeAction: PropTypes.func,
    required: PropTypes.string,
    disabled: PropTypes.bool,
};

export default InputToggle;
