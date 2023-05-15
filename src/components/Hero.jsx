import React from 'react';

function Hero(props) {
    return (
        <div className="container">
            <div className="hero">
                <h3 className="hero__header">Sell More!</h3>
                <p className="hero__content">Open shop on our platform and increase your sales</p>
                <button className="hero__btn">Open your shop</button>
                <img src="src/assets/Background.png" alt=""/>
            </div>
        </div>
    );
}

export default Hero;