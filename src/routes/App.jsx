import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
