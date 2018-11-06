import * as React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Table, Button, Pagination } from 'antd';

import './PaginatedTable.scss';


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
}

class PaginatedTable extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      currentPage: 1,
    };

    this.handlePaginate = this.handlePaginate.bind(this);
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

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const {data, columns, totalData, pageSize} = this.props;
    
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
          pagination={false} />
        <Pagination
          current={this.state.currentPage}
          total={totalData}
          pageSize={pageSize}
          onChange={this.handlePaginate}/>
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