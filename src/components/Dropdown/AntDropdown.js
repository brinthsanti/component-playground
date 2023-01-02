import React from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const AntDropdown = () => {
    return (
        <div>
            <h3>Basic Dropdown</h3>
            <Dropdown>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        Hover me
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default AntDropdown;