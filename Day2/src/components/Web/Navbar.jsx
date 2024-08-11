import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import "./Navbar.css";
import { useState } from "react";
import React from "react";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { IconContext } from "react-icons";
import { AiOutlineAlipayCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Leftbar from "../Admin/Leftbar";

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <span>Spark Events</span>
              {/* <i className="fas fa-code"></i> */}
              <span className="icon h-5" style={{alignItems:'center'}}>
              <AiOutlineAlipayCircle />
              </span>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/register"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Register 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='/Leftbar' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
      </IconContext.Provider>
          
          </div>
          
        </nav>
      </>
    );
  }
  

export default Navbar;