import { asyncActionCreator } from 'redux-action-creator';
import { api } from 'shared';
import * as constants from './constants';

const {
    types: {
        FETCH_SAVED_COMPANIES,
        DELETE_COMPANY
    },
    FETCH_SAVED_COMPANIES_URL,
    DELETE_COMPANY_URL
} = constants;

const actions = {
    fetchSavedCompanies: asyncActionCreator(FETCH_SAVED_COMPANIES, () => api.get(FETCH_SAVED_COMPANIES_URL)),
    deleteCompany: asyncActionCreator(DELETE_COMPANY, 'symbol', payload => api.post(DELETE_COMPANY_URL, { symbol: payload.symbol }))
};

export default actions;
