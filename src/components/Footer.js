import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright 2018 CeeVee</li>
          <li>
            Design by{" "}
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
          <li>
            Developed in React <span role="img" aria-label="React Emoji">⚛️</span> by{" "}
            <a href="#home">Nar Saynorath</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp style={{ position: "relative", top: "4px" }} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
