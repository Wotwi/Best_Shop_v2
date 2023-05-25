import React from 'react';

function Calculator() {
    return (
        <div className="container">
            <section className="calc__wrapper">
                <h3 className="calc__header"></h3>
                <form action="" className="calc__form">
                    <label htmlFor="quantity" className="calc__text-label"></label>
                    <input type="text" className="calc__text-input" id="quantity" placeholder="Products quantity"/>

                    <label htmlFor="orders" className="calc__text-label"></label>
                    <input type="text" className="calc__text-input" id="orders" placeholder="Estimated orders in month"/>

                    <label htmlFor="package" className="calc__text-label"></label>
                    <select name="package" id="package" className="calc__text-input" placeholder="Choose package">
                        <option className="calc__package-item" value="Basic">Basic</option>
                        <option className="calc__package-item" value="Professional">Professional</option>
                        <option className="calc__package-item" value="Premium">Premium</option>
                    </select>

                    <label htmlFor="accounting" className="calc__checkbox-label">Accounting</label>
                    <input type="checkbox" className="calc__checkbox-input" id="accounting"/>
                    <label htmlFor="rental" className="calc__checkbox-label">Rental of a payment terminal</label>
                    <input type="checkbox" className="calc__checkbox-input" id="rental"/>
                </form>
                <span className="calc__results">
                    <div className="calc__result-item"></div>
                    <div className="calc__result-item"></div>
                    <div className="calc__result-item"></div>
                    <div className="calc__result-item"></div>
                    <div className="calc__result-item"></div>

                    <div className="calc__result-total"></div>
                </span>
            </section>
        </div>
    );
}

export default Calculator;