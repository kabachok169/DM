import * as React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './Login.scss';

import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';


interface IProps {
    history?: any
    form?: any
};

class Login extends React.Component<IProps, any> {
    constructor(props) {
      super(props);

      this.goBack = this.goBack.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    goBack() {
        this.props.history.push('/');
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;

        const {Header, Content} = Layout;

        return (
            <React.Fragment>
                <Layout className='container'>
                    <Header></Header>
                    <Content className='main'>
                        <div className='main__header'>Login into your account!</div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href='/signup'>register now!</a>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </React.Fragment>
      )
    }
}

const mapStateToProps: any = (state: any) => {
    return {
        
    };
};

const mapDispatchToProps: any = (dispatch: any) => {
    return {
        // flightActions: bindActionCreators(flightActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
