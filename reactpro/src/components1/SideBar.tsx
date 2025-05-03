import React from "react";
import { Link } from "react-router-dom";
import "../assets/NewCss/SideBar.css"

const SideBar = () => (
    <aside className="sidebar">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </aside>
);

export default SideBar;