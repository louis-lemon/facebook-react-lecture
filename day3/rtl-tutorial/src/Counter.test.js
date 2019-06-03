import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Counter from './Counter';

describe('<Counter />', () => {
  it('matches snapshot', () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });

  it('has a number and two buttons', () => {
    const utils = render(<Counter />);
    const numberText = '0';
    const plusButtonText = '+1';
    const minusButtonText = '-1';

    utils.getByText(numberText);
    utils.getByText(plusButtonText);
    utils.getByText(minusButtonText);
  });

  it('increases', () => {
    const utils = render(<Counter />);
    const number = utils.getByText('0');
    const plusButton = utils.getByText('+1');
    
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    
    expect(number).toHaveTextContent('2');
    expect(number.textContent).toBe('2'); // 이와 같이 쓸 수 있다.
  });

  it('decreases', () => {
    const utils = render(<Counter />);
    const number = utils.getByText('0');
    const minusButton = utils.getByText('-1');
    
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    
    expect(number).toHaveTextContent('-2');
  });
});
