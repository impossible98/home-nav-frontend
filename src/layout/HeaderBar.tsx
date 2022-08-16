// import third-party modules
import { Col, Layout, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
// import local modules
import './index.css';

function HeaderBar() {
  return (
    <Layout.Header className='layout-HeaderBar'>
      <Row>
        <Col span={6}>
        </Col>
        <Col span={12}>
        </Col>
        <Col span={6}>
          <Link to='/login'>登录</Link>
        </Col>
      </Row>
    </Layout.Header>
  );
}

export default HeaderBar;
