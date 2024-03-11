import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  useCallback,
  useMemo,
} from "react";
import ReactDOM from "react-dom";
import useProducts from "./hooks/useProducts";
import "./App.css";
import { DataTable } from "./components/Datatable";
import { Highlight } from "./Exercises/Highlight";

const items = [
  { label: "Cabbage", id: 1 },
  { label: "Garlic", id: 2 },
  { label: "Apple", id: 3 },
  { label: "Tomato", id: 4 },
  { label: "Ginger", id: 5 },
  { label: "Pine Apple", id: 6 },
  { label: "Avacado", id: 7 },
  { label: "Banana", id: 8 },
  { label: "Lemon", id: 9 },
  { label: "Orange", id: 10 },
];

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const steps = [
  {
    id: 1,
    title: "Ordered",
  },
  {
    id: 2,
    title: "Shipped",
  },
  {
    id: 3,
    title: "Out for delivery",
  },
  {
    id: 4,
    title: "Delivered",
  },
];

const images = [
  {
    url: '',
    caption: ''
  }
]

const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Doe', age: 25 },
  { id: 3, name: 'Jane', age: 40 },
];

const columns = [
  { header: 'Brand', key: 'brand', sortable: true },
  { header: 'Category', key: 'category', sortable: true },
  { header: 'Description', key: 'description', render: (value) => <span>{value}</span> },
  { header: 'Discount Percentage', key: 'discountPercentage', sortable: true},
  { header: 'Price', key: 'price', sortable: true},
  { header: 'Pic', key: 'thumbnail', sortable: false , render: (value) => <img className="rowImg" src={value}/>},
  { header: 'Rating', key: 'rating', sortable: true},
  { header: 'Stock', key: 'stock', sortable: true},
];

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    //  fetch('https://dummyjson.com/products?limit=0').then(res => res.json()).then(d => setProducts(d.products))
  },[])

   return <>
    {/* <DataTable
    data={products}
    columns={columns}
    tableClassName="custom-table"
    headerClassName="custom-header"
    rowClassName="custom-row"
    cellClassName="custom-cell"
    onRowClick={()=>console.log('test')}
  /> */}

  <Highlight>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo metus, tempor sit amet ligula quis, tincidunt vulputate ipsum. Proin convallis ornare erat in ullamcorper. Nulla facilisi. Duis dui risus, venenatis hendrerit mauris at, fringilla sodales ante. Praesent dapibus dui commodo orci facilisis suscipit. Pellentesque sodales, justo quis fermentum posuere, leo mi suscipit justo, a placerat dui ex sed nulla. Donec in mi eget urna vehicula sollicitudin vitae in metus. Nam ornare faucibus sagittis. Mauris nec tincidunt nunc. Vivamus luctus pellentesque mi non placerat. Morbi vitae metus eu nunc venenatis ultricies sed id tortor. Pellentesque consequat pellentesque est eu pharetra. Suspendisse maximus tempor urna, vitae eleifend justo porttitor a.

Nullam sodales pellentesque magna, non bibendum elit euismod non. Pellentesque lobortis tellus in nibh ultrices ultricies. Praesent sed bibendum enim. Phasellus venenatis urna vitae erat efficitur tincidunt. Phasellus commodo turpis id libero porta eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec convallis mi ante, ut volutpat leo feugiat vel. Etiam feugiat dolor sit amet urna luctus, id semper sem consequat. Mauris at libero ac augue elementum porttitor. Donec magna tellus, laoreet eget eros vel, rutrum volutpat justo. Curabitur fermentum tempor rutrum. Nam non nisl eu odio ultrices elementum.

Quisque mollis velit ex, quis accumsan purus viverra vel. Aliquam erat volutpat. Morbi molestie metus leo, at lobortis tortor mattis vel. Integer pretium augue eget quam aliquet, et sagittis eros sollicitudin. Aenean quis lorem odio. Praesent at massa dui. Pellentesque quis dui velit. Sed fringilla rutrum turpis in porttitor. Ut sagittis tincidunt aliquam. Cras vel tortor et justo tempor dapibus. Nulla elementum eleifend efficitur.
  </Highlight>
   </>
}
