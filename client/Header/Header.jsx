import React from 'react';
import { messages } from 'shared';
import { Link } from 'react-router-dom';
import {
    HOME_LINK,
    TRACKED_COMPANIES_LINK
} from './constants';

const Header = () => (
    <div className="header-container">
        <div
            className="header-item"
        >
            {messages.header.items.home}
        </div>
        <Link
            className="header-item--link"
            to={HOME_LINK}
        >
            {messages.header.items.trackNewCompany}
        </Link>
        <Link
            className="header-item--link"
            to={TRACKED_COMPANIES_LINK}
        >
            {messages.header.items.companies}
        </Link>
    </div>
);

export default Header;
