import { useState } from "react";

function Choice({ children, onClick, category }) {
  const clicked = category === children;
  return (
    <li
      onClick={() => onClick(children)}
      className={`text-text ${
        clicked ? "bg-main text-white" : ""
      } px-2 py-1 rounded text-sm cursor-pointer`}
    >
      {children}
    </li>
  );
}

export default Choice;
