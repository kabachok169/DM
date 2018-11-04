import * as React from 'react';

import { Layout, Menu, Icon, Row, Col } from 'antd';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './Authorized.scss';
import { object } from 'prop-types';

import Clients from '../../components/Clients/Clients';
import { Client } from '_debugger';

const { Header, Footer, Sider, Content } = Layout;

interface IProps {

}

interface IState {
    collapsed: boolean;
    menuItem: string;
}

class Authorized extends React.Component<IProps, IState> {
    state = {
        collapsed: false,
        menuItem: 'clients'
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleClick = (object) => {
        const {item, key, keyPath} = object;
        this.setState({
            menuItem: key
        });
    }

    menuHandler = (key) => {
        switch (key) {
            case 'clients': return (<Clients/>);
            default: return (<React.Fragment/>);
        }
    }

    render() {
        const {menuItem} = this.state;

        return (
            <Layout className="authorized">
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                style={{overflow: 'auto'}}
                >
                    <div className="authorized__logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['clients']} style={{ margin: '34px 0 0 0'}}>
                        <Menu.Item key="clients">
                            <Icon type="team" />
                            <span>Clients</span>
                        </Menu.Item>
                        <Menu.Item key="orders" disabled>
                            <Icon type="fire" />
                            <span>Orders</span>
                        </Menu.Item>
                        <Menu.Item key="partners" disabled>
                            <Icon type="bank" />
                            <span>Partners</span>
                        </Menu.Item>
                        <Menu.Item key="goods" disabled>
                            <Icon type="shopping" />
                            <span>Goods</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="authorized__header">
                        <Row>
                            <Col span={1}>
                                <Icon
                                    className="authorized__menu-trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Col>
                            <Col span={5}></Col>
                            <Col span={12} style={{textAlign: 'center'}}>
                                <p className="authorized__header-company">DressMe Admin</p>
                            </Col>
                            <Col span={6} style={{textAlign: 'center'}}>
                                <Col span={13}></Col>
                                <Col span={8}>
                                    <p>Login: Egor</p>
                                </Col>
                                <Col span={1}>
                                    <Icon type="setting" />
                                </Col>
                                
                            </Col>
                        </Row>
                        
                    </Header>
                    <Content className="authorized__content" style={{overflow: 'auto', padding: '10px'}}>
                        {this.menuHandler(menuItem)}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Made by AD
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps: any = (state: any) => {
    return {
    };
};

const mapDispatchToProps: any = (dispatch: any) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorized);
