import React from 'react';
import PropTypes from 'prop-types';
import { messages, shapes } from 'shared';
import TrackCompanyButtonContainer from './TrackCompanyButtonContainer';

const MatchingCompany = ({ company, alreadyTracked }) => (
    <div className="track-company-matching-company-container">
        {Object.keys(company).map(
            key => (
                <div
                    key={`${company.symbol}${key}`}
                    className="track-company-matching-company-property"
                >
                    { `${key}: ${company[key]}` }
                </div>
            )
        )}
        {
            alreadyTracked ? <p className="track-company-tracked-message">{messages.trackCompany.alreadyTrackedMessage}</p>
                : <TrackCompanyButtonContainer company={company} />
        }
    </div>
);

MatchingCompany.defaultProps = {
    alreadyTracked: false
};

MatchingCompany.propTypes = {
    company: shapes.company.isRequired,
    alreadyTracked: PropTypes.bool
};

export default MatchingCompany;
