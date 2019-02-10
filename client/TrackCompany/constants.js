import { createTypes, async } from 'redux-action-creator';

export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const FETCH_COMPANIES_URL = '/fetchCompanies';

export const TRACK_COMPANY = 'TRACK_COMPANY';
export const TRACK_COMPANY_URL = '/trackCompany';

export const SET_COMPANY_NAME = 'SET_COMPANY_NAME';
export const TRACK_COMPANY_NAMESPACE = 'TRACK_COMPANY';

export const types = createTypes(
    [
        ...async(FETCH_COMPANIES),
        ...async(TRACK_COMPANY),
        SET_COMPANY_NAME
    ],
    TRACK_COMPANY_NAMESPACE
);
