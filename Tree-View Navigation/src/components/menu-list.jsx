import MenuItem from "./menu-item";

function MenuList({ list = [] }) {
  return (
    <ul>
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;
