import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Main from '../app/components/Main';

describe('<Main />', () => {

	it('should contains 2 Link tag', () => {
		const wrapper = shallow(<Main />);
		expect(wrapper.find('Link')).to.have.length(2);
	})
})
