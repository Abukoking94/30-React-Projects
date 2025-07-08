import React from "react";
import MenuList from "./menu-list";

function Index1({ menus = [] }) {
  return (
    <div>
      <MenuList list={menus} />
    </div>
  );
}

export default Index1;
