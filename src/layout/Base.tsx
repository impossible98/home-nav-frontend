// import third-party modules
import { Layout } from 'antd';
import React from 'react';
// import local modules
import ContentBar from './ContentBar';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import SiderBar from './SiderBar';
import './index.css';

function Base() {
  return (
    <Layout className='layout-Base'>
      <HeaderBar />
      <Layout>
        <SiderBar />
        <ContentBar />
      </Layout>
      <FooterBar />
    </Layout>
  );
}

export default Base;
