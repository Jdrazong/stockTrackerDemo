import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    changeHandler,
    value,
    className,
    type,
    blurHandler
}) => (
    <input
        className={className}
        value={value}
        onChange={changeHandler}
        type={type}
        onBlur={blurHandler}
    />
);

Input.defaultProps = {
    type: 'text',
    blurHandler: () => {}
};

Input.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string,
    blurHandler: PropTypes.func
};

export default Input;
