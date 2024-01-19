import "../components/InfiniteScroller/index.css";
import React, { useEffect, useRef, useState } from "react";
import useProducts from "../hooks/useProducts";

 function InfiniteScrollerExamples() {
  const [page, setPage] = useState(1);
  const [products] = useProducts(page * 10, 0, page);
  const [lastElement, setLastElement] = useState(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(entries[0]);
        setPage((prev) => prev + 1);
      }
    });

    if (lastElement) intersectionObserver.observe(lastElement);

    return () => {
      if (lastElement) {
        intersectionObserver.disconnect();
      }
    };
  }, [lastElement]);

  console.log(lastElement);
  return (
    <>
      <div className="gallery">
        {products?.map((product, index) => {
          return (
            <Product
              ref={index === products.length - 1 ? setLastElement : null}
              {...product}
            />
          );
        })}
      </div>
    </>
  );
}

const Product = React.forwardRef(({ id, thumbnail, title }, ref) => {
  return (
    <div className="gallery__card" key={id} ref={ref}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
    </div>
  );
});

export default InfiniteScrollerExamples;