import * as React from 'react';

import { Card } from 'antd';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './ClientsCard.scss';

import * as clientsActions from '../../redux/clients/clients.action';

interface IProps {
    clientsActions?: any;
    info?: any;
    key?: number;
}

interface IState {
    
}

class ClientsCard extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.clientsActions.getClientsCard(this.props.key)
  }

  render() {
    const { info } = this.props;
    return (
          <Card 
            title={info.name}
            extra={<a href="#">More</a>}>
            <p>{'Email: ' + info.email}</p>
            <p>{'Number: ' + info.number}</p>
          </Card>
    );
  }
}

const mapStateToProps: any = (state: any) => {
  return {
    info: state.clientscard
  };
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsCard);
