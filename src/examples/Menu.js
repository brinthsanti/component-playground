import React from 'react';
import { Menu } from '../components/Menu';
import { Row, Col } from '../components/Grid';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const MenuExample = () => {
    const items = [
        {
            label: 'Navigation One',
            icon: <MailOutlined />,
            children: [
                { label: 'Option 2' },
                { label: 'Option 3' },
                { label: 'Option 1' },
            ]
        },
        {
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                { label: 'Option 5' },
                { label: 'Option 6' },
                {
                    label: 'Submenu',
                    icon: <MailOutlined />,
                    children: [
                        {
                            label: 'Sub Navigation One',
                            icon: <MailOutlined />,
                            children: [
                                { label: 'Option 2' },
                                { label: 'Option 3' },
                                { label: 'Option 1' },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Navigation Three',
            icon: <SettingOutlined />,
            children: [
                { label: 'Option 9' },
                { label: 'Option 10' },
                { label: 'Option 11' },
                { label: 'Option 12' },
            ]
        },
    ]
    return (
        <div>
            Menu
            <Row>
                <Col span={12}>
                    < Menu
                        items={items}
                    />
                </Col>
                <Col span={12}>TWO</Col>
            </Row>

        </div >
    );
};

export default MenuExample;