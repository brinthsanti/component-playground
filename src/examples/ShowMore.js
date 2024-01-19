import React from 'react'
import ShowMore from '../components/ShowMore';

export default function ShowMoreExamples() {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];

    return (
      <div>
        <h1>Your Component</h1>
        <ShowMore items={items} itemsToShow={10} />
      </div>
    );
}
