import * as React from 'react';

import { Card, Modal, Input, Form, Icon } from 'antd';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './ClientsCard.scss';

import * as clientsActions from '../../redux/clients/clients.action';

interface IProps {
    clientsActions?: any;
    info?: any;
    clientKey?: any;
    visible?: boolean;
    onOk?: any;
    onCancel?: any;
    form?: any
}

interface IState {
    
}

class ClientsCard extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.clientsActions.getClientsCard(this.props.clientKey)
  }

  //TODO: saving
  handleSubmit() {
    console.log('saving...');
    this.props.onOk();
  }

  render() {
    const { info, clientKey, visible, onCancel,  } = this.props;
    const { getFieldDecorator } = this.props.form;

    console.log(clientKey, info);
    return (
        <Modal visible={visible} onOk={this.handleSubmit} onCancel={onCancel}>
          <Card 
            title={info.name}
            extra={<a href="#">More</a>}
            style={{ marginTop: '40px' }}>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        initialValue: `${info.name}`,
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email!' }],
                        initialValue: `${info.email}`,
                        })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                        )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('number', {
                        rules: [{ required: true, message: 'Please input your number!' }],
                        initialValue: `${info.number}`,
                        })(
                        <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                        )}
                </Form.Item>
            </Form>
          </Card>
        </Modal>
    );
  }
}

const mapStateToProps: any = (state: any) => {
  return {
    info: state.clients.clientsCard
  };
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ClientsCard));
