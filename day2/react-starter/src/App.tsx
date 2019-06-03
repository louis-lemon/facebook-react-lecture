import React from 'react';
import styled from 'styled-components';

import JoinForm from './pages/JoinForm';
import MarkdownView from './pages/markdown/MarkdownView';
import UserProfile from './pages/UserProfile';
import PanelResize from './pages/PanelResize';
import DragDrop from './pages/DragDrop';

import { Layout, Breadcrumb } from 'antd';
import './styles/index';

const SLayout = styled(Layout)`
  > .ant-layout-sider {
    background: #eee;
  }

  .main-content {
    background: #fff;
    padding: 24px;
    margin: 0;
    min-height: 280;
  }
`;

const Container = styled.div``;

const App: React.FC = () => {
  return (
    // <Container>
    //   <MarkdownView />
    // </Container>

    // <SLayout style={{ height: '100vh' }}>
    //   <Layout.Sider width={300}>
    //     <UserProfile />
    //   </Layout.Sider>
    //   <Layout style={{ padding: '0 24px 24px' }}>
    //     <Breadcrumb style={{ margin: '16px 0' }}>
    //       <Breadcrumb.Item>Home</Breadcrumb.Item>
    //       <Breadcrumb.Item>List</Breadcrumb.Item>
    //       <Breadcrumb.Item>App</Breadcrumb.Item>
    //     </Breadcrumb>
    //     <Layout.Content className="main-content">
    //       <JoinForm email={'louis@lemoncloud.io'} />
    //     </Layout.Content>
    //   </Layout>
    // </SLayout>

    // <PanelResize />

    <DragDrop />
  );
};

export default App;
