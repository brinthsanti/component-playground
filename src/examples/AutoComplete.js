import React from "react";
import { AutoComplete } from "../components/AutoComplete";

const AutoCompleteExamples = () => {
  const options = [
    { label: "one", value: "" },
    { label: "two", value: "" },
    { label: "three", value: "" },
  ];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <AutoComplete
        placeholder="Type to search"
        width="200"
        options={options}
      />
    </div>
  );
};

export default AutoCompleteExamples;
