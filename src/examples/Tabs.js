import React from 'react';
import Tabs from '../components/Tabs/Tabs';

const TabsExamples = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div>
            <h3>Tabs</h3>
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                    {
                        label: `Tab 1`,
                        key: '1',
                        children: `Content of Tab Pane 1`,
                    },
                    {
                        label: `Tab 2`,
                        key: '2',
                        children: `Content of Tab Pane 2`,
                    },
                    {
                        label: `Tab 3`,
                        key: '3',
                        children: `Content of Tab Pane 3`,
                    },
                    {
                        label: `Tab with extra length 4`,
                        key: '4',
                        children: `Content of Tab Pane 4`,
                    },
                    {
                        label: `Tab 5`,
                        key: '5',
                        children: `Content of Tab Pane 5`,
                    },
                ]}
            />
        </div>
    );
};

export default TabsExamples;