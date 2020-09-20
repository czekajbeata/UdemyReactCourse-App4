import React from "react";
import Accordion from "./components/Accordion";

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

export default () => {
  return (
    <h1>
      <Accordion items={items} />
    </h1>
  );
};
