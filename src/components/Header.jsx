import React from 'react';

function Header() {
    return (
        <div className="header">
            <h2 className="header__logo">BestShop</h2>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__list--item">WHY US</li>
                    <li className="header__list--item">BENEFITS</li>
                    <li className="header__list--item">PRICES</li>
                    <li className="header__list--item">CONTACT</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;