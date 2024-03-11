import React, { useState } from "react";
import { Input, RadioGroup, CheckboxGroup, Textarea, Select } from "./elements";

const hobbiesOptions = [
  { label: "Reading", value: "reading" },
  { label: "Sports", value: "sports" },
  { label: "Cooking", value: "cooking" },
  // Add more options as needed
];

const selectOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  // Add more options as needed
];
export default function BasicForm() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    age: "",
    sex: "",
    hobbies: [],
    comments: "",
    selectedOption: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const isChecked = e.target.checked;

    setFormValues((prev) => {
      if (isChecked) {
        return { ...prev, [name]: [...prev[name], value] };
      } else {
        return { ...prev, [name]: prev[name].filter((item) => item !== value) };
      }
    });
  };

  console.log(formValues);

  const { fullName, age, sex, hobbies, comments, selectedOption } = formValues;
  return (
    <form className="formContainer" method="post" onSubmit={handleSubmit}>
      <Input
        label="Full Name"
        type="text"
        name="fullName"
        value={fullName}
        onChange={handleChange}
      />
      <Input
        label="Age"
        type="number"
        name="age"
        value={age}
        onChange={handleChange}
      />

      <RadioGroup
        legend="Please select your Sex:"
        name="sex"
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
        selectedValue={sex}
        onChange={handleChange}
      />
      <CheckboxGroup
        legend="Select Hobbies:"
        name="hobbies"
        options={hobbiesOptions}
        selectedValues={hobbies}
        onChange={handleCheckboxChange}
      />
      <Textarea
        label="Comments"
        name="comments"
        value={comments}
        onChange={handleChange}
      />
      <Select
        label="Select an option"
        name="selectedOption"
        options={selectOptions}
        value={selectedOption}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
