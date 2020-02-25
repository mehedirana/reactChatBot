import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav>
            <div class="nav-wrapper">
            <Link to={'/'} className="brand-logo">It courses</Link>
                <ul>
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                </ul>
            </div>

        </nav>

    )
};

export default Header;