// import third-party modules
import { Search } from '@icon-park/react';
import { Col, Input, Row, Tabs } from 'antd';
import React from 'react';
// import local modules
import { BASE_SEARCH_URL } from '@/utils/constants';
import './index.css';

function Content() {
  const onSearch = (value: string) => {
    if (value) {
      window.open(`${BASE_SEARCH_URL}${value}`);
    }
  };

  return (
    <Row
      align='middle'
      justify='center'
    >
      <Col
        span={24}
      >
        <Tabs
          centered
        >
          <Tabs.TabPane
            key='1'
            tab='cn Bing'
          >
            <Row justify='center'>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={20}
                xl={20}
              >
                <Input.Search
                  className='content-input-search'
                  allowClear
                  enterButton={<Search />}
                  size='large'
                  onSearch={onSearch}
                />
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}

export default Content;
