import React from 'react';
import { messages } from 'shared';

const MatchingCompanies = ({ matchingCompanies }) => Boolean(matchingCompanies.length) && (
    <div>
        <div className="page-content-header">{messages.trackCompany.matchingCompaniesSectionHeader}</div>
        <div className="track-company-matching-companies-container">
            {matchingCompanies.map(company => (
                <div
                    key={company.symbol}
                    className="track-company-matching-company-container"
                >
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
                </div>
            ))}
        </div>
    </div>
);

export default MatchingCompanies;
