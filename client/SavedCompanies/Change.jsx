import React from 'react';
import PropTypes from 'prop-types';

const Change = ({ change, changePercent }) => (
    <div className="saved-companies-company-change-container">
        {
            <div className={parseFloat(change) >= 0 ? 'saved-company-positive-change' : 'saved-company-negative-change'}>
                {`${change} (${changePercent})`}
            </div>
        }
    </div>
);

Change.propTypes = {
    change: PropTypes.string.isRequired,
    changePercent: PropTypes.string.isRequired
};

export default Change;
