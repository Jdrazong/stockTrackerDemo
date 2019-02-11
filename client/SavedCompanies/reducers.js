import { combineReducers } from 'redux';
import * as constants from './constants';

const {
    FETCH_SAVED_COMPANIES,
    FETCH_SAVED_COMPANIES_SUCCESS,
    FETCH_SAVED_COMPANIES_FAIL,
    DELETE_COMPANY,
    DELETE_COMPANY_FAIL,
    DELETE_COMPANY_SUCCESS
} = constants.types;

const savedCompanies = (state = [], action) => {
    switch (action.type) {
    case FETCH_SAVED_COMPANIES_SUCCESS:
        return action.response;
    default:
        return state;
    }
};

const isFetchingSavedCompanies = (state = false, action) => {
    switch (action.type) {
    case FETCH_SAVED_COMPANIES:
        return true;
    case FETCH_SAVED_COMPANIES_SUCCESS:
    case FETCH_SAVED_COMPANIES_FAIL:
        return false;
    default:
        return state;
    }
};

const isDeletingCompany = (state = false, action) => {
    switch (action.type) {
    case DELETE_COMPANY:
        return true;
    case DELETE_COMPANY_SUCCESS:
    case DELETE_COMPANY_FAIL:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    savedCompanies,
    isFetchingSavedCompanies,
    isDeletingCompany
});
