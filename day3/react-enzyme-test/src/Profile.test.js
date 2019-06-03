import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
    it('mathces snapshot', () => {
        const wrapper = mount(<Profile username="louis" name="tak" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders username and name', () => {
        const wrapper = mount(<Profile username="louis" name="tak" />);
        expect(wrapper.props().username).toBe('louis');
        expect(wrapper.props().name).toBe('tak');

        const boldElement = wrapper.find('b');
        expect(boldElement.contains('louis')).toBe(true);

        const spanElement = wrapper.find('span');
        expect(spanElement.text()).toBe('(tak)');
    });
});