import React, { useState } from "react";
import "./App.scss";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import CustomHeader from "./components/Header";
import MainPage from "./pages/main/Main";
const { Sider, Content } = Layout;

const App = () => {
  const [sideIsClose, setSideClose] = useState(true);

  function handleSearchChange(value: string) {
    console.log(`selected ${value}`);
  }

  return (
    <Layout className="App">
      <Sider
        trigger={null}
        collapsible
        collapsed={sideIsClose}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <UserOutlined />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <CustomHeader
          sideIsClose={sideIsClose}
          handleSearchChange={handleSearchChange}
        />
        <Content className="App__body">
          <MainPage />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
