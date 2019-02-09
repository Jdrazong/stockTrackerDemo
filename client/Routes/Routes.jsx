import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TrackCompany } from 'TrackCompany';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={TrackCompany} />
    </Switch>
);

export default Routes;
