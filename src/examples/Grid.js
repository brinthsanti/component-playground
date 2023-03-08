import React, { useEffect, useRef, useState } from 'react';
import AntGrid from '../components/Grid/AntGrid';
import {Row,Col} from '../components/Grid';
import { Button } from 'antd';

const Grid = () => {
    const myRef = useRef(null);
    const [time , setTime] = useState(0);

   
    // useEffect(()=>{
    //     let interval = setInterval(() => {
    //         setTime(time => {
    //             if(time === 4){
    //                 return 0;
    //             }
    //            return time + 1
    //         });
    //     }, 2000);
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[])

    console.log(time);
    return (
        <div>
            <h1>Grid Examples</h1>
            <Button type='primary' onClick={() => setTime(0)}>reset</Button>
            <AntGrid/>
            <h1>My Grid</h1>
            <Row ref={myRef}>
                <Col className='outline'  span={24}>ONE</Col>
            </Row>
            <h1>Second column</h1>
            <Row>
                <Col className='outline' span={12}>ONE</Col>
                <Col className='outline' span={12}>TWO</Col>
            </Row>
        </div>
    );
};

export default Grid;