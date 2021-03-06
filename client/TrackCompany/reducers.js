import { combineReducers } from 'redux';
import * as constants from './constants';

const {
    FETCH_COMPANIES,
    FETCH_COMPANIES_FAIL,
    FETCH_COMPANIES_SUCCESS,
    SET_COMPANY_NAME
} = constants.types;

const companyName = (state = '', action) => {
    switch (action.type) {
    case SET_COMPANY_NAME:
        return action.payload.companyName;
    default:
        return state;
    }
};

const matchingCompanies = (state = [], action) => {
    switch (action.type) {
    case SET_COMPANY_NAME:
        return [];
    case FETCH_COMPANIES_SUCCESS:
        return action.response;
    default:
        return state;
    }
};

const isFetchingCompanies = (state = false, action) => {
    switch (action.type) {
    case FETCH_COMPANIES:
        return true;
    case FETCH_COMPANIES_FAIL:
    case FETCH_COMPANIES_SUCCESS:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    companyName,
    matchingCompanies,
    isFetchingCompanies
});
