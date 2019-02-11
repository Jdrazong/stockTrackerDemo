import { expect } from 'chai';
import reducer from '../reducers';
import * as constants from '../constants';

const {
    FETCH_SAVED_COMPANIES,
    FETCH_SAVED_COMPANIES_SUCCESS,
    FETCH_SAVED_COMPANIES_FAIL,
    DELETE_COMPANY,
    DELETE_COMPANY_FAIL,
    DELETE_COMPANY_SUCCESS
} = constants.types;

describe('SavedCompanies: reducers', () => {
    it('should handle set savedCompanies', () => {
        const response = [{
            test: 'value'
        }];

        expect(
            reducer({}, {
                type: FETCH_SAVED_COMPANIES_SUCCESS,
                response
            }).savedCompanies
        ).to.deep.equal(response);
    });

    it('should set isFetchingSavedCompanies', () => {
        expect(
            reducer({}, {
                type: FETCH_SAVED_COMPANIES
            }).isFetchingSavedCompanies
        ).to.equal(true);

        expect(
            reducer({
                isFetchingCompanies: true
            }, {
                type: FETCH_SAVED_COMPANIES_SUCCESS,
                response: ['test']
            }).isFetchingSavedCompanies
        ).to.equal(false);

        expect(
            reducer({
                isFetchingCompanies: true
            }, {
                type: FETCH_SAVED_COMPANIES_FAIL
            }).isFetchingSavedCompanies
        ).to.equal(false);
    });

    it('should set isDeletingCompany', () => {
        expect(
            reducer({}, {
                type: DELETE_COMPANY
            }).isDeletingCompany
        ).to.equal(true);

        expect(
            reducer({
                isFetchingCompanies: true
            }, {
                type: DELETE_COMPANY_SUCCESS,
                response: ['test']
            }).isDeletingCompany
        ).to.equal(false);

        expect(
            reducer({
                isFetchingCompanies: true
            }, {
                type: DELETE_COMPANY_FAIL
            }).isDeletingCompany
        ).to.equal(false);
    });
});
