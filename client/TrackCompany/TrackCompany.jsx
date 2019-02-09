import React from 'react';
import { components, messages } from 'shared';
import TrackCompanyInputContainer from './TrackCompanyInputContainer';
import FetchCompaniesButtonContainer from './FetchCompaniesButtonContainer';

const { Content } = components;

const TrackCompany = () => (
    <Content>
        <div className="page-content-header">{messages.trackCompany.header}</div>
        <div className="track-company-input-container">
            <TrackCompanyInputContainer />
            <FetchCompaniesButtonContainer />
        </div>
    </Content>
);

export default TrackCompany;
