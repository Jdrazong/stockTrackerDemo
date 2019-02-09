import React from 'react';
import PropTypes from 'prop-types';

const onClick = (event, clickHandler) => {
    event.stopPropagation();
    clickHandler();
};

const Button = ({
    clickHandler, isPrimary, text, imageSource, className, shouldRender
}) => shouldRender && (
    <button
        onClick={event => onClick(event, clickHandler)}
        className={isPrimary ? `${className} button-primary` : `${className} button-secondary`}
        type="button"
    >
        {text}
        {imageSource ? <img className="button-image" src={`${window.location.origin}/${imageSource}`} alt={text} /> : null}
    </button>
);

Button.defaultProps = {
    isPrimary: false,
    imageSource: ''
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    isPrimary: PropTypes.bool,
    text: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
    shouldRender: PropTypes.bool.isRequired
};

export default Button;
