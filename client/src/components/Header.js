import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav>
            <div class="nav-wrapper #0091ea light-blue accent-4">
            <Link to={'/'} className="brand-logo"><i class="material-icons">search</i>It courses</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                </ul>
            </div>

        </nav>

    )
};

export default Header;