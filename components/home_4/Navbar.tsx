import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Mobilemenu from "../Mobilemenu";

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();
  const inactiveTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.body.classList.add("header-fixed");
      } else {
        document.body.classList.remove("header-fixed");
      }
    });
  }, []);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const openMobileMenu = () => {
    document.body.classList.toggle("mobile-menu--toggle");
  };
  return (
    <header className={`header header--fixed header--4`}>
      <Mobilemenu />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Mobile Header  --> */}
            <div className="mobile-header">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="mobile-header__content">
                      {/* <!-- Logo  --> */}
                      <Link href="/" className="logo">
                        <img
                          src="/images/logo24.png"
                          alt="image"
                          className="logo__img logo__dark"
                        />
                        <img
                          src="/images/logo-light.png"
                          alt="image"
                          className="logo__img logo__light"
                        />
                      </Link>
                      {/* <!-- Logo end --> */}
                      {/* <!-- Mobile Menu Toggle  --> */}
                      <button
                        onClick={openMobileMenu}
                        className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded mobile-menu__toggler">
                        <span className="material-symbols-rounded mat-icon fw-300">
                          {" "}
                          menu{" "}
                        </span>
                      </button>
                      {/* <!-- Mobile Menu Toggle End --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Mobile Header End --> */}
            {/* <!-- Primary Menu  --> */}
            <nav className="primary-menu align-items-center">
              {/* <!-- Logo --> */}
              <p className="logo">
                <img
                  src="/images/logo24.png"
                  alt="image"
                  className="logo__img logo__dark"
                />
                <img
                  src="/images/logo24.png"
                  alt="image"
                  className="logo__img logo__light"
                />&nbsp;&nbsp;Smart/Dev
              </p>
              {/* <!-- Logo End --> */}
              <ul className="list primary-menu__list">
               
                <li>
                  <Link href="#inicio" className="primary-menu__link has-sub">
                    {" "}
                    Inicio{" "}
                  </Link>
                  
                </li>
                <li>
                  <Link href="#servicio" className="primary-menu__link has-sub">
                    {" "}
                    Servicios{" "}
                  </Link>
                  
                </li>
                <li>
                  <Link href="#proceso" className="primary-menu__link">
                    {" "}
                    Proceso{" "}
                  </Link>
                </li>
                <li className="mega-menu--container">
                  <Link href="#tecnologias" className="primary-menu__link has-megamenu">
                    {" "}
                    Tecnologias{" "}
                  </Link>
                 
                </li>
              
              
                <li>
                  <p
                    
                    className="bttn bttn--base bttn-sm bttn-pill fw-md flex-shrink-0">
                    {" "}
                   contacto@govic.cl{" "}
                  </p>
                </li>
              </ul>
            </nav>
            {/* <!-- Primary Menu End --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
