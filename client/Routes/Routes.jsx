import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TrackCompany } from 'TrackCompany';
import { SavedCompaniesContainer } from 'SavedCompanies';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={TrackCompany} />
        <Route exact path="/trackedCompanies" component={SavedCompaniesContainer} />
    </Switch>
);

export default Routes;
