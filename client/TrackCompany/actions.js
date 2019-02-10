import { asyncActionCreator, actionCreator } from 'redux-action-creator';
import { api } from 'shared';
import * as constants from './constants';

const {
    types: {
        FETCH_COMPANIES,
        SET_COMPANY_NAME,
        TRACK_COMPANY
    },
    FETCH_COMPANIES_URL,
    TRACK_COMPANY_URL
} = constants;

const actions = {
    fetchCompanies: asyncActionCreator(FETCH_COMPANIES, 'name', payload => api.get(`${FETCH_COMPANIES_URL}?name=${payload.name}`)),
    trackCompany: asyncActionCreator(TRACK_COMPANY, 'company', payload => api.post(TRACK_COMPANY_URL, payload.company)),
    setCompanyName: actionCreator(SET_COMPANY_NAME, 'companyName')
};

export default actions;
