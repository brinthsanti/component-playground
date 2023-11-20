import React, { useState } from 'react';
import { Dropdown, DropdownItem } from '../components/Dropdown';

const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
const DropdownExample = () => {
    
    return (
        <div className='dropdown-example'>
            <h3>My Dropdown</h3>
            <Dropdown
        items={products}
        renderItems={(item) => (
          <a href="https://www.google.com"><DropdownItem key={item.id} title={item.title} /></a>
        )}
        trigger="click"
      >
        <button>i am drop down</button>
      </Dropdown>
      <p>
        loremipsum By specifying arrow prop with the arrow will point to the
        center of the target element.By specifying arrow prop with the arrow
        will point to the center of the target element.
      </p>
</div>
    );
};

export default DropdownExample;