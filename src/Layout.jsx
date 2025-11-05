import { Outlet } from "react-router-dom";
import Menu from "./components/headerNavi/menu.jsx";

function Layout() {
  return (
    <>
    
    <Menu />
 
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;