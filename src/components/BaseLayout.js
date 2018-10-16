import React, {Component} from "react";
import {Layout, Menu, Icon} from "antd";
import {Link} from "react-router-dom";

const {Header, Sider, Content,Footer} = Layout;
const SubMenu = Menu.SubMenu;


class BaseLayout extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        const {children} = this.props;

        return (
            <Layout className="base-layout">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    >
                <div className="logo" />
                <Menu theme="dark"
                      mode="inline"
                      defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="home"/>
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/shortcuts">
                            <Icon type="scissor"
                                  theme="outlined"/>
                            <span>Shortcuts</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1"
                             title={<span>
                                        <Icon type="folder-open" theme="outlined" />
                                        <span>Project's Structure</span>
                                    </span>}>
                        <Menu.Item key="5">
                            <Link to="/">
                                <Icon type="folder-open" theme="outlined" />
                                <span>Components</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/">
                                <Icon type="fire" theme="outlined" />
                                <span>Firebase</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/">
                                <Icon type="fire" theme="outlined" />
                                <span>Pages</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/">
                                <Icon type="fork" theme="outlined" />
                                <span>Routes</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to="/">
                                <Icon type="highlight" theme="outlined" />
                                <span>Styles</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="10"><Link to="/">
                            <Icon type="api" theme="outlined" />
                            <span>Utils</span>
                        </Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3">
                        <Link to="/">
                            <Icon type="deployment-unit" theme="outlined" />
                            <span>Extras</span>
                        </Link>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <span style={{fontSize: "24px"}}>Wiki React Project</span>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', overflow: 'initial'}}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default BaseLayout;