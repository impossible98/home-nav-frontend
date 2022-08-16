// import third-party modules
import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
// import local modules
import "./index.css";

function ContentBar() {
    return (
      <Layout.Content className='layout-ContenBar'>
      <Outlet />
    </Layout.Content>
    )
}

export default ContentBar;
