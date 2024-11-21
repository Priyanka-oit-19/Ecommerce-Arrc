import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <header>
                <div className='header' >
                    <div>
                        <h4>Contact & Support: 00 000 000 000</h4>
                    </div>

                    <div className='buttons1'>
                        <button class="vender-btn">vender login</button>
                        <button class="vender-btn">Rider login</button>
                    </div>

                    <div>
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Marathi</option>
                        </select>
                    </div>

                    <div>
                        <button class="vender-btn">My Account</button>
                    </div>
                </div>

                <nav>
                    <div class="main">
                        <a href="/">GENIUS SHOP</a>

                        <div className='navigations'>
                            <a href="/">HOME</a>
                            <a href="/">PRODUCT</a>
                            <a href="/">PAGES</a>
                            <a href="/">BLOGS</a>
                            <a href="/">FAQ</a>
                            <a href="/">CONTACT US</a>
                        </div>

                        <div class="search">
                            <i class="ri-search-line"></i>
                            <i class="ri-infinity-fill"></i>
                            <i class="ri-heart-line"></i>
                            <i class="ri-shopping-cart-line"></i>
                        </div>
                    </div>
                
                </nav>
            </header>
        </div>
        
    )
}

export default Navbar;
