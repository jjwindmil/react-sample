import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const menuList = [
    {
        key:1,
        name: "Counter Sample",
        icon: <UserOutlined/>,
    },
    {
        key:2,
        name: "Express Sample",
        icon: <AppstoreOutlined/>,
    },
    {
        key:3,
        name: "Redux Sample",
        icon: <BarChartOutlined/>,
    },
    {
        key:4,
        name: "Redux Saga Sample",
        icon: <CloudOutlined/>,
    },
    {
        key:5,
        name: "Webworker Sample",
        icon: <ShopOutlined/>,
    },
]

function LayoutTemplate(props) {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo" />

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    menuList.map((menu)=>{
                        return <Menu.Item key={menu.key} icon={menu.icon}>menu.name</Menu.Item>
                    })
                }
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        <h5>Test</h5>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default LayoutTemplate;