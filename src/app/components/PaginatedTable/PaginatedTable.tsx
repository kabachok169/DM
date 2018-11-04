import * as React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Table, Button } from 'antd';

import './PaginatedTable.scss';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'E-mail',
  dataIndex: 'email',
}, {
  title: 'Telephone number',
  dataIndex: 'number',
}];

let data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Egor ${i}`,
    email: `example${i}@govgoogle.com`,
    number: `8-123-123-12-12`,
  });
}

interface IProps {
    columns?: Array<string>;
    totalData?: number;
    data?: Array<any>;
}

interface IState {
    selectedRowKeys: Array<number>;
    loading: boolean;
    data: Array<any>;
}

class PaginatedTable extends React.Component<IProps, IState> {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    data: data
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    const newData = this.state.data;
    this.state.data.forEach((item, key) => {
        if (this.state.selectedRowKeys.includes(key)) {
            console.log(key);
            newData.splice(key, 1);
        }
    });
    console.log(newData);
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
        data: newData
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Delete
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} style={{textAlign: 'center'}} pagination={{position: 'bottom'}} />
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