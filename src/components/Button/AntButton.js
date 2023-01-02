import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

const AntButton = () => {
    return (
        <div>
            <Button type="primary" size='small' icon={<SearchOutlined/>} loading>Primary Button</Button>
            <Button type="text" size='large'>Text Button</Button>
            <Button type="link">Link Button</Button>
        </div>
    );
};

export default AntButton;