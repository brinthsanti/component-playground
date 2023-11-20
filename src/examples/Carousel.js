import React from 'react';
import { Carousel } from '../components/Carousel';

const CarouselExamples = () => {
    return (
        <div>
      <Carousel width="500">
        <div>
          <img src="https://random.imagecdn.app/200/150" />
          <h3>dummy test</h3>
        </div>
        <div>
          <img src="https://random.imagecdn.app/200/150" />
          <h3>dummy test 2</h3>
        </div>
        <div>
          <img src="https://random.imagecdn.app/200/150" />
          <h3>dummy test 3</h3>
        </div>
        <div>
          <img src="https://random.imagecdn.app/200/150" />
          <h3>dummy test 4</h3>
        </div>
      </Carousel>
        </div>
    );
};

export default CarouselExamples;