import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { messages } from 'shared';
import MatchingCompany from './MatchingCompany';
import TrackCompanyButtonContainer from './TrackCompanyButtonContainer';

describe('TrackCompany: MatchingCompany', () => {
    const props = {
        company: {
            field: 'value',
            field2: 'value'
        },
        alreadyTracked: false
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<MatchingCompany {...props} />);

        expect(wrapper.find('.track-company-matching-company-property')).to.have.length(2);
        expect(wrapper.find(TrackCompanyButtonContainer)).to.have.length(1);
        expect(wrapper.find('.track-company-tracked-message')).to.have.length(0);
    });

    it('should render already tracked message instead of a button if company is tracked already', () => {
        const propsWithAlreadyTracked = {
            ...props,
            alreadyTracked: true
        };

        const wrapper = shallow(<MatchingCompany {...propsWithAlreadyTracked} />);

        expect(wrapper.find(TrackCompanyButtonContainer)).to.have.length(0);
        expect(wrapper.find('.track-company-tracked-message').text()).to.contain(messages.trackCompany.alreadyTrackedMessage);
    });
});
