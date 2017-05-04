import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Main from '../app/components/Main';

describe('<Main />', () => {

	it('should contains a h1 tag', () => {
		const wrapper = shallow(<Main />);
		expect(wrapper.find('h1')).to.have.length(1);
	})
	it('should contains a button from SearchBeer component', () => {
		const wrapper = mount(<Main />);
		expect(wrapper.find('SearchBeer').find('button')).to.have.length(1);
	})
})
