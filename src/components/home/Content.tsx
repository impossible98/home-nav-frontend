// import third-party modules
import React from "react";
import { Input, Tabs } from 'antd';
import { Search } from '@icon-park/react';
// import local modules
import { BASE_SEARCH_URL } from "../../utils/constants";

function Content() {
  function onSearch(value: string) {
    if (value) {
      window.open(`${BASE_SEARCH_URL}/search?q=${value}`)
    }
  }

  return (
    <Tabs>
      <Tabs.TabPane
        tab="cn Bing"
        key="1">
        <Input.Search
          allowClear
          enterButton={<Search />}
          size="large"
          onSearch={onSearch}
        />
      </Tabs.TabPane>
    </Tabs>
  );
}

export default Content;
