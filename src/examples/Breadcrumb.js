import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
const BreadcrumbExamples = () => {
    return (
        <div>
            <h3>BreadcrumbExamples</h3>
            <Breadcrumb seperator='/'>
                <Breadcrumb.Item>
                    Item 1
                </Breadcrumb.Item>
                <Breadcrumb.Item href='https://google.com'>
                    Item 2
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Item 3
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbExamples;