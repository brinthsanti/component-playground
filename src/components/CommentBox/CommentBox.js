import React, { useState } from 'react';
import Comment from './Comment/Comment';
import { useImmer } from "use-immer";
import './index.css';

const CommentBox = ({ data = [], setData }) => {
    const [inputVal, setInputVal] = useState('');
    return (
        <div className='comment-box'>
            <div className='input-area'>
                <input placeholder='type your comment'
                    value={inputVal}
                    onInput={(e) => {
                        setInputVal(e.target.value)
                    }}
                ></input>
                <button onClick={() => {
                    setData([...data, {
                        id: (Math.random() + 1).toString(36).substring(7),
                        comment: inputVal,
                    }])
                }}>comment</button>
            </div>
            <div className='comment-area'>
                <RenderComment data={data} setData={setData} />
            </div>
        </div>
    );
};

export default CommentBox;

export function RenderComment({ data, setData }) {


    return <div>
        {
            data.map((c, index) => <Comment key={index} {...c} setData={setData} />)
        }
    </div>
}