import React, { useContext, useState, useRef, useEffect } from "react";
import {useSearchParams, useParams, useLocation} from 'react-router-dom';
import {Menu} from '../components/Menu'

import { Scroller, Section } from '../components/Scroller';
import "../App.css";

const items = [
  { label: "Cabbage", id: 1 },
  { label: "Garlic", id: 2 },
  { label: "Apple", id: 3 },
  { label: "Tomato", id: 4}
];

const data = {
  1 : 'The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.',
  2: 'The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.',
  3: 'The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.The URLSearchParams constructor does not parse full URLs. However, it will strip an initial leading ? off of a string, if present.',
  4: '',
};

export default function ScrollerExample() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [currentItem, setCurrentItem] = useState(5);
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(()=>{
     const activeItem = searchParams.get('activeItem');
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(result => {
      setCategories(result);
      setSearchParams({activeItem: activeItem || result[0]})
    })
  },[]);


  function handleClick(item){
    const { label} = item;
    setSearchParams({activeItem: label})
  }
    const items = categories.map((category, index) => ({ label: category, id: index}))
  return (
    <div className="appcontainer">
     <div className="master">
     <Menu  items={items} handle={handleClick}/>
     </div>
     <div className="content">
      <Scroller currentItem={currentItem} loaded={contentLoaded}>
      <Content searchParams={searchParams} setContentLoaded={setContentLoaded}/>
      </Scroller>
     </div>
    </div>
  );
}

function Content({searchParams, setContentLoaded}){
  const  [activeItem, setActiveItem] = useState('');
  const [category, setCategory] = useState({})



  useEffect(()=>{
    if(activeItem)
    fetch(`https://dummyjson.com/products/category/${activeItem}`)
    .then(res => res.json())
    .then((result)=>{
      setCategory(result);
      setContentLoaded(true);
    });
  },[activeItem])

  useEffect(()=>{
    const activeItem = searchParams.get('activeItem'); 
  setActiveItem(activeItem);
 },[searchParams])

  return <div className="contentSection">
     {
      category.products?.map(product => {
        return <Section key={product.id} id={product.id}>
          <section key={product.title}>
             <h3>{product.title}</h3>
             <h3>{product.brand}</h3>
             <p>{product.description}</p>
             <div className="images">
               {product.images.map(image => <img key={image} src={image}/>)}
             </div>
        </section>
        </Section>
      })
     }
  </div>
}




