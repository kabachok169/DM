import * as React from 'react';

import { Layout, Menu, Icon } from 'antd';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './Clients.scss';

const { Header, Footer, Sider, Content } = Layout;

import PaginatedTable from '../PaginatedTable/PaginatedTable';

import * as clientsActions from '../../redux/clients/clients.action';

interface IProps {
    clientsActions?: any;
    columns?: Array<any>;
    totalData?: number;
    data?: Array<any>;
}

interface IState {
    collapsed: boolean;
    menuItem: string;
    pageSize?: number;
    currentPage?: number;
}

class Clients extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  
    this.state = {
      collapsed: false,
      menuItem: '1',
      pageSize: 10,
      currentPage: 1
    };

    this.paginate = this.paginate.bind(this);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  paginate = (current) => {
    console.log('page: ', current);
    this.setState({
      currentPage: current
    });
    this.props.clientsActions.getClients(current, this.state.pageSize);
  }

  componentWillMount() {
    this.props.clientsActions.getClients(this.state.currentPage, this.state.pageSize);
  }

  render() {
    const {data, columns, totalData} = this.props;

    console.log(data);

    return (
        <PaginatedTable 
          data={data}
          columns={columns}
          totalData={totalData}
          pageSize={this.state.pageSize}
          paginate={this.paginate}
        />
    );
  }
}

const mapStateToProps: any = (state: any) => {
  return {
    data: state.clients.data,
    columns: state.clients. columns,
    totalData: state.clients.total
  };
};

const mapDispatchToProps: any = (dispatch: any) => {
  return {
    clientsActions: bindActionCreators(clientsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
