import React from 'react';
import { render } from 'react-testing-library';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="louis" name="tak" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<Profile username="louis" name="tak" />);
    utils.getByText('louis'); // louis 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(tak)'); // (tak) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/louis/); // 정규식 /louis/ 을 통과하는 엘리먼트가 있는지 확인
  });


});
