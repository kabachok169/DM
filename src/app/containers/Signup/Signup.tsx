import * as React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './Signup.scss';

import { Form, Icon, Input, Button, Tooltip, Layout } from 'antd';

const FormItem = Form.Item;


interface IProps {
    history?: any
    form?: any
};

class Signup extends React.Component<IProps, any> {
    constructor(props) {
      super(props);

      this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.push('/');
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    

    
        compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
        }

        validateToNextPassword = (rule, value, callback) => {
            const form = this.props.form;
            if (value && this.state.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
        }

        render() {
            const { getFieldDecorator } = this.props.form;

            const {Header, Content} = Layout;

            const formItemLayout = {
                labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
                },
                wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
                },
            };
            const tailFormItemLayout = {
                wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
                },
            };

            return (
                <React.Fragment>
                    <Layout className='container'>
                        <Header></Header>
                        <Content className='main'>
                            <div className='main__header'>Sign up!</div>
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="E-mail"
                                >
                                    {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: true, message: 'Please input your E-mail!',
                                    }],
                                    })(
                                    <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label={(
                                    <span>
                                        Nickname&nbsp;
                                        <Tooltip title="What do you want others to call you?">
                                        <Icon type="question-circle-o" />
                                        </Tooltip>
                                    </span>
                                    )}
                                >
                                    {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                                    })(
                                    <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="Password"
                                >
                                    {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: 'Please input your password!',
                                    }, {
                                        validator: this.validateToNextPassword,
                                    }],
                                    })(
                                    <Input type="password" />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="Confirm Password"
                                >
                                    {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: 'Please confirm your password!',
                                    }, {
                                        validator: this.compareToFirstPassword,
                                    }],
                                    })(
                                    <Input type="password" />
                                    )}
                                </FormItem>
                                <FormItem {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">Register</Button>
                                </FormItem>
                            </Form>
                        </Content>
                    </Layout>
                </React.Fragment>
            );
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Signup));
