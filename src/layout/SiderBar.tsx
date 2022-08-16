// import third-party modules
import { Home, Info } from '@icon-park/react';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import local modules
import './index.css';

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon: React.ReactNode,
) {
  return {
    key,
    label,
    icon,
  };
}

const items = [
  getItem(
    'Home',
    '1',
    <Link to='/'>
      <Home size='16' fill='#333' />
    </Link>,
  ),
  getItem(
    'About',
    '2',
    <Link to='/about'>
      <Info size='16' fill='#333' />
    </Link>,
  ),
];

function SiderBar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout.Sider
      breakpoint='lg'
      collapsedWidth='48px'
      onCollapse={toggleCollapsed}
    >
      <Menu
        defaultSelectedKeys={['1']}
        mode='inline'
        items={items}
      />
    </Layout.Sider>
  );
}

export default SiderBar;
