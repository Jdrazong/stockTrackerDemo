import React from 'react';
import { messages } from 'shared';
import MatchingCompany from './MatchingCompany';

const MatchingCompanies = ({ matchingCompanies }) => Boolean(matchingCompanies.length) && (
    <div>
        <div className="page-content-header">{messages.trackCompany.matchingCompaniesSectionHeader}</div>
        <div className="track-company-matching-companies-container">
            {matchingCompanies.map(({ alreadyTracked, ...company }) => (
                <MatchingCompany
                    key={company['1. symbol']}
                    company={company}
                    alreadyTracked={alreadyTracked}
                />
            ))}
        </div>
    </div>
);

export default MatchingCompanies;
