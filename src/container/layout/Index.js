import React from 'react';
import { Layout, Menu } from 'antd';
import Home from '../home/Index';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined, LaptopOutlined, NotificationOutlined,
} from '@ant-design/icons';
// import SliderToBox from '../../components/sliderToBox/sliderToBox';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function LayoutHome(props) {
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
                <div style={{
                    height:'64px',
                    display:"flex",
                    alignItems:'center',
                    justifyContent:"center",
                    textAlign: "center",
                }}><h1 style={{ textAlign:'center', color:'white'}}>GIRISH</h1></div>
                <Menu mode="inline" defaultSelectedKeys={['0']}>
                <Menu.Item key="0" icon={<UserOutlined />}>
                        nav 0
                    </Menu.Item>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                        nav 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined />}>
                        nav 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}>
                        nav 6
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined />}>
                        nav 7
                    </Menu.Item>
                    <Menu.Item key="8" icon={<ShopOutlined />}>
                        nav 8
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="11">option1</Menu.Item>
                        <Menu.Item key="12">option2</Menu.Item>
                        <Menu.Item key="13">option3</Menu.Item>
                        <Menu.Item key="14">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        <Menu.Item key="15">option5</Menu.Item>
                        <Menu.Item key="16">option6</Menu.Item>
                        <Menu.Item key="17">option7</Menu.Item>
                        <Menu.Item key="18">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="19">option9</Menu.Item>
                        <Menu.Item key="20">option10</Menu.Item>
                        <Menu.Item key="21">option11</Menu.Item>
                        <Menu.Item key="22">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0 ,position: 'fixed', zIndex: 1, width: '100%', backgroundColor:'black' }}>
                   <h1 style={{textAlign:'center', color:'white', marginLeft:'-180px'}}>Just SignUp Next and Submit </h1>
                    {/* <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu> */}
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background"
                     style={{ 
                        padding: '10px',
                        textAlign: 'center',
                        marginTop: '40px',
                        }}>
                      <Home/>
                    </div>
                </Content>
                <Footer style={{
                    textAlign: 'center',
                    color:'white',
                    backgroundColor: 'black'
                }}>Girish Xencov ©2018 Created by Girish UED</Footer>
            </Layout>
        </Layout>
    );
}

export default LayoutHome;
