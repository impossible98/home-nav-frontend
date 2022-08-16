// import third-party modules
import React from 'react';
import { Button, Col, Dropdown, Row, Layout, Menu } from 'antd';
import { HamburgerButton } from '@icon-park/react';
import { User } from '@icon-park/react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import local modules
import "./index.css";
import { toggleCollapsed } from "../store/modules/collapsedSlice";

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Link to='/user'>个人中心</Link>
        ),
      }
    ]}
  />
);

function HeaderBar() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleCollapsed());
  };

  return (
    <Layout.Header className='layout-HeaderBar'>
      <Row>
        <Col span={8}>
          <Button
            onClick={onClick }>
            <HamburgerButton theme="outline" size="24" fill="#333" />
          </Button>
        </Col>
        <Col span={8}>
          <h1 className='layout-HeaderBar-h1'>React-Redux-Typescript</h1>
        </Col>
        <Col span={8}>
          <Dropdown
            overlay={menu}
            placement="bottomRight">
            <a onClick={(e) => e.preventDefault()}>
              <User theme="outline" size="24" fill="#333" />
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default HeaderBar;
