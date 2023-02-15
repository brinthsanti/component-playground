import React, { useState } from 'react';
import { Rate } from '../components/Rate';

const RateExamples = () => {
    const [rating, setRating] = useState(4);
    return (
        <div>
            <Rate
            rating={rating}
            onRating={(idx)=>setRating(idx)}
            />
        </div>
    );
};

export default RateExamples;