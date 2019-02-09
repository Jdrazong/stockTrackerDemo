import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Header from './Header';

describe('Header: Header', () => {
    it('should render with basic components', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find(Link)).to.have.length(2);
        expect(wrapper.find('.header-item')).to.have.length(1);
    });
});
