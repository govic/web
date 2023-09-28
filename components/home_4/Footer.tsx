import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-1">
      <div className="footer-1__content pt-0">
      
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-1__bottom">
                <div className="row g-4 justify-content-center align-items-center">
                  <div className="col-md-6">
                    <p className="clr-light text-center text-lg-start">
                      {" "}
                      Copyright 2023 Govic Ingenería e Innovación All Rights Reserved.{" "}
                    </p>
                  </div>
                  <div className="col-md-6">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
