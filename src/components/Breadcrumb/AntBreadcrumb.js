import React from 'react';
import { Breadcrumb } from 'antd';

const AntBreadcrumb = () => {
    return (
        <div>
            <h2>Basic</h2>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default AntBreadcrumb;