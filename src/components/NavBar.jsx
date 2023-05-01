import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaUser } from "react-icons/fa";
import { AuthContext } from "./Provider/Provider";
const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.photoURL);
  return (
    <div className="navbar bg-base-100 justify-between my-2 container mx-auto">
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
      <div className="navbar-end space-x-4">
        <span className="ring rounded-full p-2 ring-[#DC52BF]  ">
          {currentUser.photoURL ? <img src={currentUser.photoURL} alt="" className="h-4 w-4" />:  <FaUser />}
        </span>
        {currentUser ? (
          <button className="btn btn-outline btn-error">
            Logout{" "}
            <span>
              <FaArrowCircleLeft className="ms-2" />{" "}
            </span>
          </button>
        ) : (
          <Link to="/login" className="btn bg-slate-600 rounded">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
