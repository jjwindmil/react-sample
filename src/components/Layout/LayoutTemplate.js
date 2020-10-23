import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
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
        key: 'counterpage',
        name: 'Counter Sample',
        icon: <UserOutlined />,
        link: '/counterPage',
    },
    {
        key: 'expresspage',
        name: 'Express Sample',
        icon: <AppstoreOutlined />,
        link: '/expressPage',
    },
    {
        key: 'reduxpage',
        name: 'Redux Sample',
        icon: <BarChartOutlined />,
        link: '/reduxPage',
    },
    {
        key: 'sagapage',
        name: 'Redux Saga Sample',
        icon: <CloudOutlined />,
        link: '/sagaPage',
    },
    {
        key: 'webworkerpage',
        name: 'Webworker Sample',
        icon: <ShopOutlined />,
        link: '/webworkerPage',
    },
];

function LayoutTemplate({ props }) {
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

                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={({ item, key, keyPath, domEvent }) => {
                        console.log(
                            'Menu Item Click',
                            'item: ',
                            item,
                            'key:',
                            key,
                            'keyPath:',
                            keyPath,
                            domEvent
                        );
                        const menu = menuList.find((menu) => {
                            return menu.key === key;
                        });
                        console.log('Menu : ', menu.link);
                        return () => <Link to={menu.link}></Link>;
                    }}
                >
                    {menuList.map((menu) => {
                        return (
                            <Menu.Item key={menu.key} icon={menu.icon}>
                                <NavLink to={menu.link}>{menu.name}</NavLink>;
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Sider>

            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, textAlign: 'center' }}
                    >
                        {props}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default LayoutTemplate;
