import {useState} from "react";

function Calculator() {
    const [value, setValue] = useState('');
    const [orderValue, setOrderValue] = useState('');

    const handleInputQuantity = (e) => {
        const inputValue = e.target.value;
        const intValue = parseInt(inputValue, 10);

        if(Number.isNaN(intValue)) {
            setValue('')
        } else {
            setValue(String(intValue));
        }
    };

    const handleInputOrder = (e) => {
        const inputValue = e.target.value;
        const intValue = parseInt(inputValue, 10);

        if(Number.isNaN(intValue)) {
            setOrderValue('')
        } else {
            setOrderValue(String(intValue));
        }
    };

    return (
        <div className="container">
            <section className="calc__wrapper">
                <h3 className="calc__header">Calculate how much you’ll pay</h3>
                <form action="" className="calc__form">
                    <label htmlFor="quantity" className="calc__text-label"></label>
                    <input
                        type="number"
                        className="calc__text-input"
                        id="quantity"
                        placeholder="Products quantity"
                        value={value}
                        onChange={handleInputQuantity}
                    />

                    <label htmlFor="orders" className="calc__text-label"></label>
                    <input
                        type="number"
                        className="calc__text-input"
                        id="orders"
                        placeholder="Estimated orders in month"
                        value={orderValue}
                        onChange={handleInputOrder}
                    />

                    <label htmlFor="package" className="calc__text-label"></label>
                    <select name="package" id="package" className="calc__text-input" placeholder="Choose package">
                        <option className="calc__select-item" value="Basic">Basic</option>
                        <option className="calc__select-item" value="Professional">Professional</option>
                        <option className="calc__select-item" value="Premium">Premium</option>
                    </select>

                    <span className="calc__checkbox-span">
                        <label htmlFor="accounting" className="calc__checkbox-label"><input type="checkbox" className="calc__checkbox-input" id="accounting"/>Accounting</label>
                        <label htmlFor="rental" className="calc__checkbox-label"><input type="checkbox" className="calc__checkbox-input" id="rental"/>Rental of a payment terminal</label>
                    </span>
                </form>
                <span className="calc__results">
                    <div className="calc__results-item">
                        Products
                    </div>
                    <div className="calc__results-item">
                        Orders
                    </div>
                    <div className="calc__results-item">
                        Package
                    </div>
                    <div className="calc__results-item">
                        Accounting
                    </div>
                    <div className="calc__results-item">
                        Terminal
                    </div>

                    <div className="calc__result-total">Total</div>
                </span>
            </section>
        </div>
    );
}

export default Calculator;