import { Pagination } from "../components/Pagination";

import React from 'react';

const PaginationExample = () => {
    return (
        <div>
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        onChange={()=>{}}
      ></Pagination>
        </div>
    );
};

export default PaginationExample;