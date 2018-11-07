import * as React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Table, Button, Pagination } from 'antd';

import './PaginatedTable.scss';
import ClientsCard from '../ClientsCard/ClientsCard';


interface IProps {
    columns?: Array<any>;
    totalData?: number;
    data?: Array<any>;
    paginate?: any;
    pageSize?: number;
}

interface IState {
    selectedRowKeys: Array<number>;
    loading: boolean;
    currentPage: number;
    cardOpened: boolean;
    clientKey: number;
}

class PaginatedTable extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      currentPage: 1,
      cardOpened: false,
      clientKey: -1
    };

    this.handlePaginate = this.handlePaginate.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }
  

  delete = () => {
    this.setState({ loading: true });
    const newData = this.props.data;
    this.props.data.forEach((item, key) => {
        if (this.state.selectedRowKeys.includes(key)) {
            console.log(key);
            newData.splice(key, 1);
        }
    });
    console.log(newData);
    //TODO: request for delete
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  handlePaginate = (page, pageSize) => {
    this.setState({
      currentPage: page
    });
    this.props.paginate(page);
  };

  onClick = (e) => {
    this.setState({
      cardOpened: true,
      clientKey: e.currentTarget.attributes['data-row-key'].value
    });
  };

  handleOk = () => {
    this.setState({
      cardOpened: false,
    });
  };

  handleCancel = () => {
    this.setState({
      cardOpened: false,
    });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const {data, columns, totalData, pageSize} = this.props;

    console.log('key: ', this.state.clientKey);
    
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.delete}
            disabled={!hasSelected}
            loading={loading}
          >
            Delete
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection}
          columns={columns}
          dataSource={data} style={{textAlign: 'center'}} 
          pagination={false} 
          onRow={() => {
            return {
              onClick: this.onClick
            };
          }}/>
        <Pagination
          current={this.state.currentPage}
          total={totalData}
          pageSize={pageSize}
          onChange={this.handlePaginate}/>
        {this.state.cardOpened && <ClientsCard 
                                    clientKey={this.state.clientKey} 
                                    visible={this.state.cardOpened} 
                                    onOk={this.handleOk} 
                                    onCancel={this.handleCancel}/>}
      </div> 
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

export default connect(mapStateToProps, mapDispatchToProps)(PaginatedTable);