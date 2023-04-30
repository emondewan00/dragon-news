import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="navbar bg-base-100 justify-between  container mx-auto">
      <div className="navbar-center  flex">
        <ul className="menu menu-vertical md:menu-horizontal  px-1 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contect">Contect</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <FaUser />
        <a className="btn bg-slate-600 rounded">Login</a>
      </div>
    </div>
  );
};

export default NavBar;
