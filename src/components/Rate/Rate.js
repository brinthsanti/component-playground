import React, {useState, useMemo} from 'react';
import './index.css';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const color =  {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  };

const Rate = ({
    count = 5,
    onRating,
    rating
}) => {
    const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

    const starRating = useMemo(() => {
        return Array(count)
          .fill(0)
          .map((_, i) => i + 1)
          .map((idx) => (
            <StarFilled
              key={idx}
              className=""
              onClick={() => onRating(idx)}
              style={{ color: getColor(idx) }}
              onMouseEnter={() => setHoverRating(idx)}
              onMouseLeave={() => setHoverRating(0)}
            />
          ));
      }, [count, rating, hoverRating]);
    console.log(hoverRating);
      return <div>{starRating}{hoverRating}</div>;
};

export default Rate;