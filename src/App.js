import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Droprown";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is frontend javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is engineers favourite JS library",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [dropdownVisible, setDropdownVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setDropdownVisible(!dropdownVisible)}>
        Toggle dropdown
      </button>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {dropdownVisible ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};
