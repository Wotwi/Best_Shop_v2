import React from 'react';

function Footer() {
    return (
            <div className="footer__wrapper">
                <div className="footer__name">
                    <h3 className="footer__header">BestShop</h3>
                    <p className="footer__copy">© 2019 BestShop LTD, All Rights Reserved</p>
                </div>
                <div className="footer__icons">
                    <img src="src/assets/Twitter.svg" alt="" className="footer__icon"/>
                    <img src="src/assets/Facebook.svg" alt="" className="footer__icon"/>
                </div>
            </div>
    );
}

export default Footer;