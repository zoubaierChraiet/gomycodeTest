import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Popconfirm } from 'antd';
import Icon ,{FormOutlined,DeleteOutlined} from '@ant-design/icons'

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

export default Actions;
