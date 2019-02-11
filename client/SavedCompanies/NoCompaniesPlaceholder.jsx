import React from 'react';
import { messages } from 'shared';
import { Link } from 'react-router-dom';
import {
    HOME_LINK
} from 'Header/constants';

const NoCompaniesPlaceholder = () => (
    <div className="saved-companies-no-companies-container">
        <p className="saved-companies-no-companies-placeholder">{messages.savedCompanies.noCompanies}</p>
        <Link
            className="saved-companies--link"
            to={HOME_LINK}
        >
            {messages.savedCompanies.trackNewCompany}
        </Link>
    </div>
);

export default NoCompaniesPlaceholder;
