import React from 'react';
import { Timeline } from '../components/Timeline';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline as AntTimeline } from 'antd';
const TimelineExamples = () => {
    return (
        <div>
            <h2>Ant AntTimeline</h2>
            <AntTimeline mode='right'>
                <AntTimeline.Item color="green">Create a services site 2015-09-01</AntTimeline.Item>
                <AntTimeline.Item color="green">Create a services site 2015-09-01</AntTimeline.Item>
                <AntTimeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </AntTimeline.Item>
                <AntTimeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </AntTimeline.Item>
                <AntTimeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </AntTimeline.Item>
                <AntTimeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </AntTimeline.Item>
                <AntTimeline.Item color="#00CCFF" dot={<SmileOutlined />}>
                    <p>Custom color testing</p>
                </AntTimeline.Item>
            </AntTimeline>
            <h2>Alternalte timeline</h2>
            <AntTimeline mode='alternate'>
                <AntTimeline.Item color="green">Create a services site 2015-09-01</AntTimeline.Item>
                <AntTimeline.Item color="green">Create a services site 2015-09-01</AntTimeline.Item>
                <AntTimeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </AntTimeline.Item>
                <AntTimeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </AntTimeline.Item>
                <AntTimeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </AntTimeline.Item>
                <AntTimeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </AntTimeline.Item>
                <AntTimeline.Item color="#00CCFF" dot={<SmileOutlined />}>
                    <p>Custom color testing</p>
                </AntTimeline.Item>
            </AntTimeline>

            <h1>My timeline</h1>
            <Timeline mode='left'>
                <Timeline.Item>Item1</Timeline.Item>
                <Timeline.Item>Item2</Timeline.Item>
                <Timeline.Item>Item3</Timeline.Item>
                <Timeline.Item>Item4</Timeline.Item>
                <Timeline.Item>Item5</Timeline.Item>
                <Timeline.Item>Item6</Timeline.Item>
            </Timeline>
        </div>
    );
};

export default TimelineExamples;