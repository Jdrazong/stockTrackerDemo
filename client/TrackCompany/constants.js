import { createTypes, async } from 'redux-action-creator';

export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const FETCH_COMPANIES_URL = '/fetchCompanies';

export const SET_COMPANY_NAME = 'SET_COMPANY_NAME';
export const TRACK_COMPANY_NAMESPACE = 'TRACK_COMPANY';

export const types = createTypes(
    [
        ...async(FETCH_COMPANIES),
        SET_COMPANY_NAME
    ],
    TRACK_COMPANY_NAMESPACE
);
