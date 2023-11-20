import { useEffect, useState } from "react";

export default function useProducts(limit = 100, skip = 0, ...dependencies) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();

      if (data) {
        setData(data);
      }
    }

    fetchProducts();
  }, [...dependencies, limit, skip]);

  return [data.products, data.total];
}
