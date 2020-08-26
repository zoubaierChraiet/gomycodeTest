import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Popconfirm } from 'antd';
import Icon ,{FormOutlined,DeleteOutlined} from '@ant-design/icons'

const style = {
  icon: {
    fontSize: '1.2rem'
  }
};

const Actions = ({ selectUrl, onDelete }) => (
  <Row
    className="actions"
    type="flex"
    gutter={12}
    style={{ flexWrap: 'nowrap' }}
  >
    
      <Col>
        <Link to={selectUrl}>
          <FormOutlined />
        </Link>
      </Col>

      <Col>
        <Popconfirm
          placement="topRight"
          icon={
            <Icon type="warning" theme="filled" style={{ color: '#f5222d' }} />
          }
          okType="danger"
          title="Supprimer cet élément?"
          okText="Oui"
          cancelText="Non"
          onConfirm={onDelete}
        >
          <Button type="danger">
          <DeleteOutlined />
          </Button>
        </Popconfirm>
      </Col>
  
  </Row>
);

Actions.propTypes = {
  selectUrl: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Actions;
