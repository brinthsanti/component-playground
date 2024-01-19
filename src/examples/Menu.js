import React from 'react';
import { Menu } from '../components/Menu';
import { Row, Col } from '../components/Grid';

const MenuExample = () => {
    const items = [
        {
            label: 'Navigation One',
            icon: <h3>&copy;</h3>,
            children: [
                { label: 'Option 2' },
                { label: 'Option 3' },
                { label: 'Option 1' },
            ]
        },
        {
            label: 'Navigation Two',
            icon: <h3>&copy;</h3>,
            children: [
                { label: 'Option 5' },
                { label: 'Option 6' },
                {
                    label: 'Submenu',
                    icon: <h3>&copy;</h3>,
                    children: [
                        {
                            label: 'Sub Navigation One',
                            icon: <h3>&copy;</h3>,
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
            icon: <h3>&copy;</h3>,
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
                        handle={()=>{}}
                    />
                </Col>
                <Col span={12}>TWO</Col>
            </Row>

        </div >
    );
};

export default MenuExample;