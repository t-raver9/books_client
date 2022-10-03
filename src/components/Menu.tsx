import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MenuItem content="Home" destination="/"></MenuItem>
      <MenuItem content="About" destination="/about"></MenuItem>
    </div>
  );
};

export default Menu;
