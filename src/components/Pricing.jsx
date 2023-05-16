import React from 'react';

function Pricing(props) {
    return (
        <div className="container">
            <h3 className="pricing__header">Pricing</h3>
            <div className="pricing__wrapper">
                <div className="pricing__panel-basic">
                    <h5 className="pricing__panel-header">Basic</h5>
                    <p className="pricing__panel-price">$0</p>
                    <ul className="pricing__list">
                        <li className="pricing__list-item">100 MB HDD</li>
                        <li className="pricing__list-item">1 Subdomain</li>
                        <li className="pricing__list-item">2 E-mails</li>
                        <li className="pricing__list-item">Two years license</li>
                        <li className="pricing__list-item">Full support</li>
                    </ul>
                    <button className="pricing__btn">Begin</button>
                </div>
                <div className="pricing__panel-professional">
                    <h5 className="pricing__panel-header">Professional</h5>
                    <p className="pricing__panel-price">$25</p>
                    <ul className="pricing__list">
                        <li className="pricing__list-item">500 MB HDD</li>
                        <li className="pricing__list-item">2 Subdomains</li>
                        <li className="pricing__list-item">5 E-mails</li>
                        <li className="pricing__list-item">One year license</li>
                        <li className="pricing__list-item">Full support</li>
                    </ul>
                    <button className="pricing__btn">Begin</button>
                </div>
                <div className="pricing__panel-premium">
                    <h5 className="pricing__panel-header">Premium</h5>
                    <p className="pricing__panel-price">$60</p>
                    <ul className="pricing__list">
                        <li className="pricing__list-item">2 GB HDD</li>
                        <li className="pricing__list-item">5 Subdomains</li>
                        <li className="pricing__list-item">20 E-mails</li>
                        <li className="pricing__list-item">Two years license</li>
                        <li className="pricing__list-item">Full support</li>
                    </ul>
                    <button className="pricing__btn">Begin</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;