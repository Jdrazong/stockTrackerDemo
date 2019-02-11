import { combineReducers } from 'redux';
import { trackCompany } from 'TrackCompany';
import { savedCompanies } from 'SavedCompanies';

export default combineReducers({
    trackCompany,
    savedCompanies
});
