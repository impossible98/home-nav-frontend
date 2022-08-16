// import third-party modules
import { Descriptions } from 'antd';
import React from 'react';
// import local modules
import "./index.css";

function Content() {
  return (
    <Descriptions
      column={1}
      bordered
    >
      <Descriptions.Item label='Product'>Cloud Database</Descriptions.Item>
      <Descriptions.Item label='Billing Mode'>Prepaid</Descriptions.Item>
      <Descriptions.Item label='Automatic Renewal'>YES</Descriptions.Item>
    </Descriptions>
  );
}

export default Content;
