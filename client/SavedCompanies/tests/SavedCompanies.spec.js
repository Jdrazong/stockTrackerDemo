import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { components } from 'shared';
import SavedCompanies from '../SavedCompanies';
import CompaniesListContainer from '../CompaniesListContainer';

describe('SavedCompanies: SavedCompanies', () => {
    const props = {
        fetchSavedCompanies: () => {}
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<SavedCompanies {...props} />);

        expect(wrapper.find(CompaniesListContainer)).to.have.length(1);
        expect(wrapper.find(components.Content)).to.have.length(1);
    });

    it('should fetch saved companies after mounting', () => {
        const propsWithSpy = {
            fetchSavedCompanies: global.sinonSandbox.spy()
        };

        shallow(<SavedCompanies {...propsWithSpy} />, { lifecycleExperimental: true });

        expect(propsWithSpy.fetchSavedCompanies.calledOnce).to.equal(true);
    });
});
