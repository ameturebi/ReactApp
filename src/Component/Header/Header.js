import React from 'react'
import logo from '../icons/logo.png'
import search from '../icons/search-icon.png'
import style from '../CSS/style.css'
import cart from "../icons/cart.png"
        function Header() {
        return (
            <div>
                <header>
                <div className="headerWrapper">
                <ul>
                    <li><a href="#"><img src={logo} alt="logo"/></a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">ipad</a></li>
                    <li><a href="#">Iphone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">vision</a></li>
                    <li><a href="#">Airpods</a></li>
                    <li><a href="#">Tv & Home</a></li>
                    <li><a href="#">Entertainment</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">support</a></li>
                    <li><a href="#"><img src={search} alt="search"/></a></li>
                    <li><a href="#"><img src={cart} alt="cart"/></a></li>
                </ul>
            </div>

        </header> 
            </div>
        )
    }
    export default Header