import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NoCompaniesPlaceholder from '../NoCompaniesPlaceholder';
import SavedCompany from '../SavedCompany';
import CompaniesList from '../CompaniesList';

describe('SavedCompanies: SavedCompany', () => {
    const props = {
        savedCompanies: [
            {
                change: '0.4000',
                changePercent: '0.3800%',
                currency: 'USD',
                latestTradingDay: '2019-02-08',
                logo: 'https://logo.clearbit.com/microsoft.com',
                name: 'Microsoft Corporation',
                price: '105.6700',
                region: 'United States',
                symbol: 'MSFT',
                timezone: 'UTC-05',
                website: 'microsoft.com'
            },
            {
                change: '0.4000',
                changePercent: '0.3800%',
                currency: 'USD',
                latestTradingDay: '2019-02-08',
                logo: 'https://logo.clearbit.com/microsoft.com',
                name: 'Microsoft Corporation',
                price: '105.6700',
                region: 'United States',
                symbol: 'MSFTtest',
                timezone: 'UTC-05',
                website: 'microsoft.com'
            }
        ]
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<CompaniesList {...props} />);

        expect(wrapper.find(SavedCompany)).to.have.length(2);
        expect(wrapper.find(NoCompaniesPlaceholder)).to.have.length(0);
    });

    it('should render no companiesPlaceholder', () => {
        const propsWithNoCompanies = {
            savedCompanies: []
        };

        const wrapper = shallow(<CompaniesList {...propsWithNoCompanies} />);

        expect(wrapper.find(SavedCompany)).to.have.length(0);
        expect(wrapper.find(NoCompaniesPlaceholder)).to.have.length(1);
    });
});
