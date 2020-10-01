import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://academysuccess.com/wp-content/uploads/2011/10/netflix-logo.jpg"
        alt=" "
      />
      <img
        className="nav_avatar"
        src="https://wallpapercave.com/wp/wp2610993.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
