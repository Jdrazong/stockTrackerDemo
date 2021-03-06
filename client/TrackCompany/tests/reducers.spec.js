import { expect } from 'chai';
import reducer from '../reducers';
import * as constants from '../constants';

const {
    FETCH_COMPANIES,
    FETCH_COMPANIES_FAIL,
    FETCH_COMPANIES_SUCCESS,
    SET_COMPANY_NAME
} = constants.types;

describe('TrackCompany: reducers', () => {
    it('should handle set company name', () => {
        expect(
            reducer({}, {
                type: SET_COMPANY_NAME,
                payload: {
                    companyName: 'test'
                }
            }).companyName
        ).to.equal('test');
    });

    it('should set matchingCompanies after successful response', () => {
        const response = ['test'];

        expect(
            reducer({}, {
                type: FETCH_COMPANIES_SUCCESS,
                response
            }).matchingCompanies
        ).to.deep.equal(response);
    });

    it('should clear matchingCompanies after change in company name', () => {
        expect(
            reducer({
                matchingCompanies: ['test']
            }, {
                type: SET_COMPANY_NAME,
                payload: {
                    companyName: 'test'
                }
            }).matchingCompanies
        ).to.deep.equal([]);
    });

    it('should set isFetchingCompanies', () => {
        expect(
            reducer({}, {
                type: FETCH_COMPANIES
            }).isFetchingCompanies
        ).to.equal(true);

        expect(
            reducer({
                isFetchingCompanies: true
            }, {
                type: FETCH_COMPANIES_SUCCESS,
                response: ['test']
            }).isFetchingCompanies
        ).to.equal(false);

        expect(
            reducer({
                isFetchingCompanies: true
            }, {
                type: FETCH_COMPANIES_FAIL
            }).isFetchingCompanies
        ).to.equal(false);
    });
});
