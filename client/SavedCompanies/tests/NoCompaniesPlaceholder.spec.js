import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { messages } from 'shared';
import { Link } from 'react-router-dom';
import NoCompaniesPlaceholder from '../NoCompaniesPlaceholder';

describe('SavedCompanies: NoCompaniesPlaceholder', () => {
    it('should render with basic components', () => {
        const wrapper = shallow(<NoCompaniesPlaceholder />);

        expect(wrapper.find(Link)).to.have.length(1);
        expect(wrapper.find('.saved-companies-no-companies-placeholder').text()).to.contain(messages.savedCompanies.noCompanies);
    });
});
