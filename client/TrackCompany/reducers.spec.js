import { expect } from 'chai';
import reducer from './reducers';
import * as constants from './constants';

const {
    FETCH_COMPANIES_SUCCESS,
    SET_COMPANY_NAME
} = constants.types;

describe('Checkout: reducers', () => {
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
});
