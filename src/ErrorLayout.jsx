import { Outlet } from "react-router-dom";
import Menu from "./components/headerNavi/menu.jsx";
import SpecialFooter from "./components/SpecialFooter/SpecialFooter.jsx";  
function ErrorLayout() {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
        <SpecialFooter />
    </>
  );
}export default ErrorLayout;