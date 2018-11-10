/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper red darken-3">
                <div className="container">
                    <a className="brand-logo">Poke Times</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;