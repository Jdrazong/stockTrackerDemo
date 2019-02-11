import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Change from '../Change';

describe('SavedCompanies: Change', () => {
    const props = {
        change: '1',
        changePercent: '20%'
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<Change {...props} />);

        expect(wrapper.find('.saved-company-positive-change')).to.have.length(1);
        expect(wrapper.find('.saved-company-negative-change')).to.have.length(0);
    });

    it('should render negative change', () => {
        const propsWithNegativeChange = {
            ...props,
            change: '-1'
        };

        const wrapper = shallow(<Change {...propsWithNegativeChange} />);

        expect(wrapper.find('.saved-company-positive-change')).to.have.length(0);
        expect(wrapper.find('.saved-company-negative-change')).to.have.length(1);
    });
});
