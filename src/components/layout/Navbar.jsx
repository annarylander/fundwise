import React from "react";
import PropTypes from "prop-types";
import { AiOutlineFund } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export default function Navbar({ title }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/#landing">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/allfunds">Funds</a>
            </li>
          </ul>
        </div>
        <AiOutlineFund className="inline pr-2 text-3xl text-success hidden md:flex" />
        <a href="/#landing" className="normal-case text-xl">
          {" "}
          {title}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/#landing">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/allfunds">Funds</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/#search" className="">
          <BsSearch className="inline pr-2 text-3xl text-success" />
        </a>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Fundwise",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
