// import third-party modules
import { Layout } from 'antd';
import React from 'react';
import { Menu } from 'antd';
import { Home } from '@icon-park/react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
// import local modules
import "./index.css";

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon: React.ReactNode,
) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem('Home', '1', <Link to='/'><Home theme="outline" size="24" fill="#333" /></Link>),
];

function SiderBar() {
  const { collapsed } = useSelector((state: any) => state.collapsed);

  return (
    <Layout.Sider
      className='layout-SiderBar'
      collapsible
      collapsed={collapsed}
      trigger={null}>
      <Menu
        className='layout-SiderBar-menu'
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items} />
    </Layout.Sider>
  )
}

export default SiderBar;
