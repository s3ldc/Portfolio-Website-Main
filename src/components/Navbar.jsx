import { useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/logo.png";

export default function Navbar(){

  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return(
    <>
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>

    <div className="flex items-center space-x-2">
      <img src={Logo} alt="Logo" className="w-8 h-8 "/>
      <div className="text-2xl font-bold text-white hidden sm:block">Sunil</div>
    </div>


    </nav>

    <OverlayMenu />
    
    </>
  )
}