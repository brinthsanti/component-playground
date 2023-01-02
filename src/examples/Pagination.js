import { Pagination } from "../components/Pagination";

import React from 'react';

const PaginationExample = () => {
    return (
        <div>
            <Pagination total={25} defaultCurrent={5}/>
        </div>
    );
};

export default PaginationExample;