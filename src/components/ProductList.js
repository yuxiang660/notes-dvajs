import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, prod }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={prod}
      columns={columns}
    />
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  prod: PropTypes.array.isRequired,
};

export default ProductList;