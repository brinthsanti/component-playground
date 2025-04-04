import React, {useState, useRef} from 'react';
import './index.css';


function Rate({ totalCount = 5 }) {
  const [rating, setRating] = useState(0);
  const persistedRating = useRef(0);


  function handleMouseOver(rate) {
    setRating(rate);
    persistedRating.current = rate;
  }

  function handleMouseLeave(){
    setRating(persistedRating.current);
  }


  function handleClick(index){
    if(index === persistedRating.current){
      persistedRating.current = 0;
      return setRating(0);
    }
    setRating(index);
    persistedRating.current = index;
  }

  return (
    <div className="rating">
      {[...Array(totalCount)].map((el, index) => (
        <div
          key={index}
          onMouseOver={() => handleMouseOver(index+1)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={()=> handleClick(index+1)}
          className="star"
          style={
            {
              background: index+1 <= rating ? 'gold' : 'white',
            }
          }
        ></div>
      ))}
    </div>
  );
}


export default Rate;