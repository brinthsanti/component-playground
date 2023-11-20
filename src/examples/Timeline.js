import React from 'react';
import { Timeline } from '../components/Timeline';
const TimelineExamples = () => {
    return (
        <div>
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