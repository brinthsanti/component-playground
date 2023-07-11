import React, { useEffect, useRef, useState } from 'react';
import AntGrid from '../components/Grid/AntGrid';
import {Row,Col} from '../components/Grid';
import { Button } from 'antd';
import useIdle from '../hooks/useIdle';

const Grid = () => {
    const [count, setCount] = useState(0);
    const isIdle = useIdle(count)

console.log(isIdle)
    return (
        <div>
            <h1 onClick={()=>setCount(count => count + 1)}>Grid Examples</h1>
            <AntGrid/>
            <h1>My Grid {isIdle} </h1>
            <Row>
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