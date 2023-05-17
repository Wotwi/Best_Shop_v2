import React from 'react';

function Footer() {
    return (
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__name">
                    <h3 className="footer__header"></h3>
                    <p className="footer__copy"></p>
                </div>
                <div className="footer__icons">
                    <img src="src/assets/Twitter.svg" alt="" className="footer__icon"/>
                    <img src="src/assets/Facebook.svg" alt="" className="footer__icon"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;