import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { components, messages } from 'shared';
import TrackCompanyInputContainer from '../TrackCompanyInputContainer';
import FetchCompaniesButtonContainer from '../FetchCompaniesButtonContainer';
import TrackCompany from '../TrackCompany';

const {
    Content
} = components;

describe('TrackCompany: TrackCompany', () => {
    it('should render with basic components', () => {
        const wrapper = shallow(<TrackCompany />);

        expect(wrapper.find(Content)).to.have.length(1);
        expect(wrapper.find(TrackCompanyInputContainer)).to.have.length(1);
        expect(wrapper.find(FetchCompaniesButtonContainer)).to.have.length(1);
        expect(wrapper.find('.page-content-header').text()).to.contain(messages.trackCompany.header);
    });
});
