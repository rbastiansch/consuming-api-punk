import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchBeer from '../app/components/SearchBeer';

describe('<SearchBeer />', () => {

	it('should contains a button', () => {
		const wrapper = shallow(<SearchBeer />);
		expect(wrapper.find('button')).to.have.length(1);
	})
})