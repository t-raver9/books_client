import { Outlet } from "react-router-dom";

import { Heading } from "./Typography";
import Menu from "./Menu";

const Layout = () => {
  return (
    <div>
      <Heading content="Raver's Reads" />
      <Menu />
      <Outlet />
    </div>
  );
};

export default Layout;
