import * as React from 'react';

import { Card, Modal } from 'antd';

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
}

interface IState {
    
}

class ClientsCard extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.clientsActions.getClientsCard(this.props.clientKey)
  }

  render() {
    const { info, clientKey, visible, onOk, onCancel } = this.props;
    console.log(clientKey, info);
    return (
        <Modal visible={visible} onOk={onOk} onCancel={onCancel}>
          <Card 
            title={info.name}
            extra={<a href="#">More</a>}>
            <p>{'Email: ' + info.email}</p>
            <p>{'Number: ' + info.number}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientsCard);
