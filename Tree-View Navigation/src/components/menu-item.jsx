import React, { useState } from "react";
import MenuList from "./menu-list";

function MenuItem({ item }) {
  const [currentChild, setCurrentChild] = useState({});

  function handleClick(getLabel) {
    setCurrentChild({ ...currentChild, [getLabel]: !currentChild[getLabel] });
  }
  return (
    <li>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleClick(item.label)}>
            {currentChild[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      currentChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
