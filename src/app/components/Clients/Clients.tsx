import * as React from 'react';

import { Layout, Menu, Icon } from 'antd';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './Clients.scss';

const { Header, Footer, Sider, Content } = Layout;

import PaginatedTable from '../PaginatedTable/PaginatedTable';

interface IProps {

}

interface IState {
    collapsed: boolean;
    menuItem: string;
}

class Clients extends React.Component<IProps, IState> {
  state = {
    collapsed: false,
    menuItem: '1'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
        <PaginatedTable />
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

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
