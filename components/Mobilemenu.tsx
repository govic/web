import { useTheme } from "next-themes";
import Link from "next/link";
import { useState} from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble
} from "react-icons/fa";

const Mobilemenu = () => {
    const openMobileMenu = () => {
      document.body.classList.toggle("mobile-menu--toggle")
    }
  
    const [activeMenu, setActiveMenu] = useState("")
  
  
    const clickHandler = (e:any)=> {
      if(activeMenu === e.target.innerHTML){
        setActiveMenu("")
      }else{
        setActiveMenu(e.target.innerHTML)
      }
    }
    return (
        <nav className="mobile-menu">
        <div className="mobile-menu__head">
         
          <button className="mobile-menu__close" onClick={openMobileMenu}>
            <span className="material-symbols-rounded mat-icon fw-300">
              {" "}
              close{" "}
            </span>
          </button>
        </div>
    
      </nav>
    );
};

export default Mobilemenu;