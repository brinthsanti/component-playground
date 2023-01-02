import React from 'react';
import { Carousel as AntCarousel } from 'antd';
import { Carousel } from '../components/Carousel';
const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const myContentStyle = {
    // height: '160px',
    color: '#fff',
    padding: '100px 100px',
    marginBottom: '0px',
    textAlign: 'center',
    background: '#364d79',
};
const CarouselExamples = () => {
    return (
        <div>

            <h3>Ant carousel</h3>
            <AntCarousel style={{width: '500px'}}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </AntCarousel>
            <Carousel style={{width: '700px'}}>
                <div>
                    <h1 style={myContentStyle}>Item 1</h1>
                </div>
                <div>
                    <h1 style={myContentStyle}>Item 2</h1>
                </div>
                <div>
                    <h1 style={myContentStyle}>Item 3</h1>
                </div>
                <div>
                    <h1 style={myContentStyle}>Item 4</h1>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselExamples;