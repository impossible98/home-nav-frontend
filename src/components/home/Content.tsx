// import third-party modules
import React from "react";
import { Col, Input, Row, Tabs } from 'antd';
import { Search } from '@icon-park/react';
// import local modules
import { BASE_SEARCH_URL } from "../../utils/constants";
import "./index.css";

function Content() {
  const onSearch = (value: string) => {
    if (value) {
      window.open(`${BASE_SEARCH_URL}${value}`)
    }
  }

  return (
    <Row
      align="middle"
      justify="center" >
      <Col
        span={24} >
        <Tabs
          centered>
          <Tabs.TabPane
            key="1"
            tab="cn Bing">
            <Row
              justify="center">
              <Col
                span={12}>
                <Input.Search
                  allowClear
                  enterButton={<Search />}
                  size="large"
                  onSearch={onSearch} />
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row >
  );
}

export default Content;
