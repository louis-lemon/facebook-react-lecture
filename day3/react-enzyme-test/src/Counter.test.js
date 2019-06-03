import React from 'react';
import { shallow } from 'enzyme'; // 겉에 컴포넌트만
import Counter from './Counter';

describe('<Counter />', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper).toMatchSnapshot();
    });

    it('has initial number', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.state().number).toBe(0);
    });

    it('increases', () => {
        const wrapper = shallow(<Counter />);
        wrapper.instance().handleIncrease();
        expect(wrapper.state().number).toBe(1);

        wrapper.instance().handleIncrease();
        expect(wrapper.state().number).toBe(2);
    });

    it('decreases', () => {
        const wrapper = shallow(<Counter />);
        wrapper.instance().handleDecrease();
        expect(wrapper.state().number).toBe(-1);

        wrapper.instance().handleDecrease();
        expect(wrapper.state().number).toBe(-2);
    });

    it('calls handleIncrease', () => {
        // 이번에는 DOM에서 직접 클릭을 수행하여 테스트 함
        // 위 테스트와는 다른 방식
        const wrapper = shallow(<Counter />);
        const plusButton = wrapper.findWhere(node => node.type() === 'button' && node.text() === '+1');
        plusButton.simulate('click');

        expect(wrapper.state().number).toBe(1);
    });

    it('calls handleDecrease', () => {
        const wrapper = shallow(<Counter />);
        const isMinusButtonType = (node) => node.type() === 'button' && node.text() === '-1';
        const minusButton = wrapper.findWhere(isMinusButtonType);
        minusButton.simulate('click');

        const number = wrapper.find('h2');
        expect(number.text()).toBe('-1');
    });
});