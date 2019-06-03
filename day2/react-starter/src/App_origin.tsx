import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import './styles/index';

const Container = styled.div`
  margin: 50px auto;
  width: auto;
  display: inline-block;
  background: #eee;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  padding: 10px;

  .ant-btn + .ant-btn {
    margin-left: 10px;
  }
`;

const App: React.FC = () => {
  return (
    <Container>
      <Button>My First Button</Button>
      <Button type="primary">My First Button</Button>
      <Button type="danger">My First Button</Button>
    </Container>
  );
};

export default App;
