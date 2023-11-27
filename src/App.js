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
  const data = [
    {
      id: 0,
      comment: "First comment guys",
      children: [
        {
          id: 1,
          comment: "Hi there",
          children: [
            {
              id: 4,
              comment: "Hi there 4 - 1",
              children: [],
            },
          ],
        },
        {
          id: 2,
          comment: "Hi there 2",
          children: [
            {
              id: 5,
              comment: "Hi there 5 - 2",
              children: [],
            },
          ],
        },
        {
          id: 3,
          comment: "Hi there 3",
          children: [
            {
              id: 6,
              comment: "Hi there 6 - 3",
              children: [],
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <button onClick={() => {}}>Test Button</button>
      <p>
        lorem14 This is a test partatlorem14 This is a test partatlorem14 This
        is a test partat
      </p>

      <CommnetBox items={data} />
    </>
  );
}

function CommnetBox({ items }) {
  const [data, setData] = useState(items);
  const [inputVal, setInputVal] = useState("");
  return (
    <>
      <div className="appcommnetbox">
        <input
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button>Add comment</button>
      </div>
      <div className="commentArea">
        {data.map((ele) => (
          <Comments key={ele.id} data={ele} id={ele.id} setData={setData} baseData={data}/>
        ))}
      </div>
    </>
  );
}

function Comments({ data, id, setData, baseData }) {
  const [toggle, setToggle] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [inputMode, setInputMode] = useState(false);

  function handleAddComment() {
    setInputMode(true);
  }

  function handleReply(){
    const newComment = {
      id: id + Date.now(),
      comment: inputVal,
      children:[]
    }
     if(inputVal){
      const cpy = structuredClone(baseData);
      addComment(cpy, id, newComment);
      console.log(cpy);
      setData(cpy);
     }
  }

  function addComment(data, id, newComment){

        const item = data.find(data => data.id ===  id);
        if(item){
          item.children.push(newComment);
          return;
        }
        


      

      data?.children.forEach(item => addComment(item, id, newComment))
  }

  return (
    <div style={{ marginLeft: "20px", borderLeft: "2px solid teal" }}>
      <div style={{ display: "flex" }}>
        <div>
          <p>{data.comment}</p>
          {inputMode && (
            <>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button onClick={handleReply}>reply</button>
              <button onClick={()=>setInputMode(false)}>cancel</button>
            </>
          )}
          <br></br>
          <button onClick={handleAddComment}>Add reply</button>
          <button>edit</button>
          <button>delete</button>
        </div>
        <span
          onClick={() => {
            setToggle((toggle) => !toggle);
          }}
        >
          replies{data.children.length}
        </span>
      </div>
      {data.children && toggle && (
        <div>
          {data.children.map((child) => (
            <Comments key={child.id} data={child} id={child.id} setData={setData} baseData={baseData} />
          ))}
        </div>
      )}
    </div>
  );
}
