import React, { useState } from 'react';
import { CommentBox } from '../components/CommentBox';

const defaultVal = [
    {
        id: 1,
        comment: 'hello there',
        children: [
            {
                id: 11,
                comment: 'hello there 11'
            },
            {
                id: 12,
                comment: 'hello there 12'
            },
            {
                id: 13,
                comment: 'hello there 13'
            },
            {
                id: 14,
                comment: 'hello there 14'
            },
        ]
    },
    {
        id: 2,
        comment: 'hello there 2'
    },
    {
        id: 3,
        comment: 'hello there 3'
    },
    {
        id: 4,
        comment: 'hello there 4',
        children: [
            {
                id: 43,
                comment: 'hello there 43',
                children: [
                    {
                        id: 431,
                        comment: 'hello there 431'
                    },
                    {
                        id: 432,
                        comment: 'hello there 432'
                    },
                ]
            },
            {
                id: 44,
                comment: 'hello there 44',
                children: [
                    {
                        id: 441,
                        comment: 'hello there 441'
                    },
                    {
                        id: 442,
                        comment: 'hello there 442'
                    },
                ]
            },
        ]
    },
]
const CommentBoxExample = () => {

    const [data, setData] = useState(defaultVal);
    console.log('from comment box example',data) 
    return (
        <div>
            <CommentBox data={data} setData={setData}/>
        </div>
    );
};

export default CommentBoxExample;