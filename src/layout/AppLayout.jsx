import NavBar from "../components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";

const AppLayout = () => {
  return (
      <div>
        <NavBar/>
        <Outlet />
        <Footer/>
      </div>
  )
}

export default AppLayout