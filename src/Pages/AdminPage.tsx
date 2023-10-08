import { Layout, Menu, Breadcrumb } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MenuItem from "antd/es/menu/MenuItem";

const AdminPage = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ed6307",
        }}
      >
        <div className="demo-logo" />
        <Menu
          style={{ backgroundColor: "#ed6307", width: "100vh", color: '#f5f3f2' }}
          mode="horizontal"
        >
          <MenuItem>
            <h3>HOME</h3>
          </MenuItem>
          <MenuItem>
            <h3>MEMBER</h3>
          </MenuItem>
          <MenuItem>
            <h3>ADMIN</h3>
          </MenuItem>
          <MenuItem>
            <h3>MANAGE</h3>
          </MenuItem>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", height: "90vh" }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            backgroundColor: "gray",
            height: "100%",
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AdminPage;
