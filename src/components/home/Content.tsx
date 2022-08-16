// import third-party modules
import React from "react";
import { Input } from 'antd';
// import local modules
import { BASE_SEARCH_URL } from "../../utils/constants";

function Content() {
    function onSearch(value: string) {
        if (value) {
            window.open(`${BASE_SEARCH_URL}/search?q=${value}`)
        }
    }

    return (
        <Input.Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    );
}

export default Content;
