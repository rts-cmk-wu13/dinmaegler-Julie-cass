 import { Outlet } from "react-router-dom";
import Menu from "./components/headerNavi/menu.jsx";
import Footer from "./components/footer/footer.jsx";

function Layout() {
  return (
    <>
    
    <Menu />
 
      <main>
        <Outlet />
      </main>

<Footer />
    </>
  );
}

export default Layout;

