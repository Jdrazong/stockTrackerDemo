import { createTypes, async } from 'redux-action-creator';

export const SAVED_COMPANIES_NAMESPACE = 'SAVED_COMPANIES';

export const FETCH_SAVED_COMPANIES = 'FETCH_SAVED_COMPANIES';
export const FETCH_SAVED_COMPANIES_URL = '/fetchSavedCompanies';

export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANY_URL = '/deleteCompany';

export const types = createTypes(
    [
        ...async(FETCH_SAVED_COMPANIES),
        ...async(DELETE_COMPANY)
    ],
    SAVED_COMPANIES_NAMESPACE
);
