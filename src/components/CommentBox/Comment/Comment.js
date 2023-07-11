import React, { useState } from 'react';
import {produce} from "immer";
import { RenderComment } from '../CommentBox';

const Comment = ({ id, comment, children, setData }) => {
    const [toggle, setToggle] = useState(false);
    const [inputVal, setInputVal] = useState('');

    function handleExpand(e) {
        e.stopPropagation();
        setToggle(prev => !prev)
    }

    // first self written
    function findById(comments, id) {
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].id === id) {
                return comments[i];
            }

            if (comment[i].children) {
                return findById(comment[i].children)
            }
        }
        return undefined;
    }

    function handleReply(id) {
        const newComment = {
            id: (Math.random() + 1).toString(36).substring(7),
            comment: inputVal
        }
          setData(data => {
            const clonedComments = structuredClone(data);
            
            return update(clonedComments, id, newComment)
          });
    }

    function update(comments, id, comment){
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].id === id) {
                if(comments[i].children){
                    comments[i].children.push(comment)
                }else{
                    comments[i].children = [comment]
                }
                return comments;
            }

                        
            if (comments[i].children) {
                update(comments[i].children, id, comment);
            }

        }
        return comments;
    }
    return (
        <div className='comment'>
            <div className='content' >{comment}</div>
            <div className='action'>
                <button onClick={() => handleReply(id)}>reply</button>
                {children?.length && <span onClick={handleExpand}>{children.length}replies</span>}
            </div>
            <div>
                <input
                    value={inputVal}
                    onInput={(e) => setInputVal(e.target.value)}
                />
                <button onClick={() => handleReply(id)}>submit</button>
            </div>
            {
                children && toggle && <div style={{ marginLeft: '20px' }}>
                    <RenderComment data={children} setData={setData} />
                </div>
            }
        </div>
    );
};

export default Comment;