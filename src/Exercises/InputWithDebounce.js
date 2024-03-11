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
      <AutoComplete items={items} />
      <p>
        {" "}
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    </>
  );
}

function AutoComplete({ items, isAsync = true }) {
  const [suggestions, setSuggestion] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    const inputText = e.target.value;
    setInputText(inputText);
    if (!inputText) {
      setSuggestion([]);
      return;
    }

    if (!isAsync) {
      const results = items.filter(
        (item) => item.label.indexOf(inputText) !== -1
      );
      setSuggestion(results);
    } else {
      debouncedSendRequest(inputText);
    }
  }

  const debouncedSendRequest = useCallback(
    debounce(async (inputText) => {
      const url = `https://dummyjson.com/users/search?q=${inputText}`;
      const result = await fetch(url);
      const data = await result.json();
      setSuggestion(data.users);
    }, 500),
    []
  );

  console.log("suggestions", suggestions);
  return (
    <div className="app-autocomplete">
      <div className="appinputContainer">
        <input
          type="text"
          placeholder="Enter text here..."
          value={inputText}
          onChange={handleChange}
        />
        {!!suggestions.length && (
          <div className="appdropdown">
            {suggestions.map((item) => (
              <div className="items">{item.firstName}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function debounce(func, delay) {
  // 'private' variable to store the instance
  // in closure each timer will be assigned to it
  let timeout;

  // debounce returns a new anonymous function (closure)
  return function (...args) {
    // reference the context and args for the setTimeout  function
    const context = this;
    // base case
    // clear the timeout to assign the new timeout  to it.
    // when event is fired repeatedly then this helps  to reset
    clearTimeout(timeout);

    // set the new timeout and call the original function  with apply
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}
