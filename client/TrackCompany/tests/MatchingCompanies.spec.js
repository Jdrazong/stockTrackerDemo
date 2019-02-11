import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { messages } from 'shared';
import MatchingCompany from '../MatchingCompany';
import MatchingCompanies from '../MatchingCompanies';

describe('TrackCompany: MatchingCompanies', () => {
    const props = {
        matchingCompanies: [
            {
                '1. symbol': 'value'
            },
            {
                '1. symbol': 'value2'
            }
        ]
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<MatchingCompanies {...props} />);

        expect(wrapper.find(MatchingCompany)).to.have.length(2);
        expect(wrapper.find('.page-content-header').text()).to.contain(messages.trackCompany.matchingCompaniesSectionHeader);
    });

    it('should not render itself when there are no matching companies', () => {
        const propsWithoutCompanies = {
            matchingCompanies: []
        };

        const wrapper = shallow(<MatchingCompanies {...propsWithoutCompanies} />);

        expect(wrapper.find(MatchingCompany)).to.have.length(0);
        expect(wrapper.find('.page-content-header')).to.have.length(0);
    });
});
