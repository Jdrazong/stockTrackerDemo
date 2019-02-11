import React from 'react';
import { shapes } from 'shared';
import Change from './Change';
import DeleteCompanyButtonContainer from './DeleteCompanyButtonContainer';

const SavedCompany = ({ company }) => (
    <div className="saved-companies-company-container">
        <div className="saved-companies-image-container">
            <img
                className="saved-companies-image"
                src={company.logo}
                alt=""
            />
        </div>
        <div className="saved-companies-company-properties-container">
            <div className="saved-companies-company-name">{company.name}</div>
            <div className="saved-companies-company-property">{company.symbol}</div>
            <a
                className="saved-companies-company-link"
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
            >
                {company.website}
            </a>
            <div className="saved-companies-company-property">{company.region}</div>
            <div className="saved-companies-company-property">{`${company.timezone} ${company.latestTradingDay}`}</div>
            <div className="saved-companies-company-property">
                <span className="saved-companies-company-price">{company.price}</span>
                <span className="saved-companies-company-currency">{company.currency}</span>
            </div>
            <Change
                change={company.change}
                changePercent={company.changePercent}
            />
        </div>
        <DeleteCompanyButtonContainer symbol={company.symbol} />
    </div>
);

SavedCompany.propTypes = {
    company: shapes.savedCompany.isRequired
};

export default SavedCompany;
