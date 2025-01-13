import { useState } from "react";
import { logo } from "./../assets";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false); // State to control menu visibility

  const handleToggle = () => setToggle(!toggle); // Toggle menu visibility
  const handleMenuClick = () => setToggle(false); // Hide menu after clicking a menu item

  return (
    <div className="navbar w-full p-[10px] flex justify-between items-center">
      <img src={logo} className="h-[20px]" alt="Logo" />

      {/* Desktop Menu */}
      <ul className="menu hidden md:flex">
        <li>
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#aboutme">About Me</Link>
        </li>
        <li>
          <Link to="#skills">Skills</Link>
        </li>
        <li>
          <Link to="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="#companies">Companies</Link>
        </li>
        <li>
          <Link to="#contact">Contact Us</Link>
        </li>
      </ul>

      {/* Hamburger Icon for Small Devices */}
      <div className="flex md:hidden">
        {!toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            onClick={handleToggle}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            onClick={handleToggle}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <ul className="mobileMenu md:hidden absolute top-14 left-0 w-full bg-gray-100 shadow-lg p-2">
          <li className="menuItem p-3 hover:scale-110" onClick={handleMenuClick}>
            <Link to="#home">Home</Link>
          </li>
          <li className="menuItem p-3 hover:scale-110" onClick={handleMenuClick}>
            <Link to="#aboutme">About Me</Link>
          </li>
          <li className="menuItem p-3 hover:scale-110" onClick={handleMenuClick}>
            <Link to="#skills">Skills</Link>
          </li>
          <li className="menuItem p-3 hover:scale-110" onClick={handleMenuClick}>
            <Link to="#companies">Companies</Link>
          </li>
          <li className="menuItem p-3 hover:scale-110" onClick={handleMenuClick}>
            <Link to="#contact">Contact Us</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
