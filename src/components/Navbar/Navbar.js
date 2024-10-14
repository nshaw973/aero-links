import React from "react";
import logo from "./aero-logo.png"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-2xl">
      <a className="btn btn-ghost text-xl" href="/"><img src={logo} className="h-8" alt="aero-logo"/></a>
    </div>
  );
};

export default Navbar;
