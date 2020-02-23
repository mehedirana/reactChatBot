import React from "react";
import { link } from "react-router-dom";

const Header = () => {

    return (
        <nav>
            <ul>
                <li><link to={'/shop'}>Shop</link></li>
                <li><link to={'/abot'}>About us</link></li>
            </ul>

        </nav>

            )
        };
        
export default Header;