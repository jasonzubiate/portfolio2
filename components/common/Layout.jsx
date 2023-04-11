import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Layout({ children }) {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div>  
      <Navbar toggle={menuToggle} setToggle={setMenuToggle}/>
      {menuToggle && <HamburgerMenu toggle={menuToggle} setToggle={setMenuToggle}/>}
      {children}
      <Footer />
    </div>
  );
}
