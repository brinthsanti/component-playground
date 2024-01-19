import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import ReactDOM from "react-dom";
import useProducts from "./hooks/useProducts";
import "./App.css";

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

export default function App() {
  return (
    <>

    </>
  );
}

