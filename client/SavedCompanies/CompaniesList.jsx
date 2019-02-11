import React from 'react';
import PropTypes from 'prop-types';
import { shapes } from 'shared';
import NoCompaniesPlaceholder from './NoCompaniesPlaceholder';
import SavedCompany from './SavedCompany';

const MatchingCompanies = ({ savedCompanies }) => {
    const hasSavedCompanies = Boolean(savedCompanies.length);

    return hasSavedCompanies ? (
        <div className="saved-companies-list-container">
            {savedCompanies.map(
                company => (
                    <SavedCompany key={company.symbol} company={company} />
                )
            )}
        </div>
    ) : (<NoCompaniesPlaceholder />);
};

MatchingCompanies.propTypes = {
    savedCompanies: PropTypes.arrayOf(shapes.savedCompany).isRequired
};

export default MatchingCompanies;
