import * as React from 'react';

import './MainPage.scss';

import { Layout, Button, Menu, Form } from 'antd';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



interface IProps {
    history?: any
}

class MainPage extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleLogin(): void {
        this.props.history.push('/login');
    }

    handleSignup(): void {
        this.props.history.push('/signup');
    }

    public render(): JSX.Element {
        const {}: any = this.props;
        const { Header, Content } = Layout;

        return (
            <React.Fragment>
                <Layout className='container'>
                    <Header></Header>
                    <Content className='main'>
                        <div className='main__header'>Welcome!</div>
                        <div className='main__button-group'>
                            <Button className='main__button-group-item' onClick={this.handleLogin}>Login</Button>
                            <Button className='main__button-group-item' onClick={this.handleSignup}>Sign Up</Button>
                        </div>
                    </Content>
                </Layout>
                
            </React.Fragment>
        );
    }
}

const mapStateToProps: any = (state: any) => {
    return {
        flights: state.flights
    };
};

const mapDispatchToProps: any = (dispatch: any) => {
    return {
        // flightActions: bindActionCreators(flightActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);