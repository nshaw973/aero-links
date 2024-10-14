import React from "react";
import logo from "./aero-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-2xl justify-between">
      <Link className="btn btn-ghost text-xl" href="/aero-links">
        <img src={logo} className="h-8" alt="aero-logo" />
      </Link>
      <div className="flex flex-col mr-8 text-sm">
        <p>Call us at: </p>
        <p>(877) 325-4000 </p>
      </div>
    </div>
  );
};

export default Navbar;
