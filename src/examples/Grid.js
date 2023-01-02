import React, { useEffect, useRef } from 'react';
import AntGrid from '../components/Grid/AntGrid';
import {Row,Col} from '../components/Grid';

const Grid = () => {
    const myRef = useRef(null);
   
    useEffect(()=>{
        console.log(myRef);
    },[])
    return (
        <div>
            <h1>Grid Examples</h1>
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