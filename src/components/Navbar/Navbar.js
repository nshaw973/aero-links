import React from "react";
import logo from "./aero-logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-2xl">
      <Link className="btn btn-ghost text-xl" href="/aero-links"><img src={logo} className="h-8" alt="aero-logo"/></Link>
    </div>
  );
};

export default Navbar;
