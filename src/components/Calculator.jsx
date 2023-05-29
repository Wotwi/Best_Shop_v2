import {useState} from "react";

function Calculator() {
    const [value, setValue] = useState('');
    const [orderValue, setOrderValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('')
    const [text, setText] = useState('');
    const [chosenPackage, setChosenPackage] = useState('');
    const [accountingChecked, setAccountingChecked] = useState(false);
    const [terminalChecked, setTerminalChecked] = useState(false);
    const [accountingPrice, setAccountingPrice] = useState('');
    const [terminalPrice, setTerminalPrice] = useState('');
    const [total, setTotal] = useState(0);

    const handleInputQuantity = (e) => {
        const inputValue = e.target.value;
        const intValue = parseInt(inputValue, 10);

        if(Number.isNaN(intValue)) {
            setValue('')
        } else {
            setValue(String(intValue));
        }
        calculateTotal();
    };

    const handleInputOrder = (e) => {
        const inputValue = e.target.value;
        const intValue = parseInt(inputValue, 10);

        if(Number.isNaN(intValue)) {
            setOrderValue('')
        } else {
            setOrderValue(String(intValue));
        }
        calculateTotal();
    };

    const handleSelect = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue)

        if (selectedValue === "Basic") {
            setChosenPackage('Basic')
            setText('$0')
        } else if (selectedValue === "Professional") {
            setChosenPackage('Professional')
            setText('$25')
        } else if (selectedValue === "Premium") {
            setChosenPackage('Premium')
            setText('$60')
        }
        calculateTotal();
    }

    const handleAccountingCheckbox = (e) => {
        const accountingChecked = e.target.checked;
        setAccountingChecked(accountingChecked);

        if (accountingChecked) {
            setAccountingPrice('$35');
        } else {
            setAccountingPrice('');
        }
        calculateTotal();
    }

    const handleTerminalCheckbox = (e) => {
        const terminalChecked = e.target.checked;
        setTerminalChecked(terminalChecked);

        if (terminalChecked) {
            setTerminalPrice('$5');
        } else {
            setTerminalPrice('');
        }
        calculateTotal();
    }

    const calculateTotal = () => {
        const productsCost = value * 0.5;
        const ordersCost = orderValue * 0.25;

        let total = productsCost + ordersCost;

        if (accountingChecked) {
            total += 35;
        }
        if (terminalChecked) {
            total += 5;
        }

        setTotal(total);
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
                    <select name="package" id="package" className="calc__text-input" placeholder="Choose package" value={selectedOption} onChange={handleSelect}>
                        <option className="calc__select-item" value="---">---</option>
                        <option className="calc__select-item" value="Basic">Basic</option>
                        <option className="calc__select-item" value="Professional">Professional</option>
                        <option className="calc__select-item" value="Premium">Premium</option>
                    </select>

                    <span className="calc__checkbox-span">
                        <label htmlFor="accounting" className="calc__checkbox-label"><input type="checkbox" className="calc__checkbox-input" id="accounting" checked={accountingChecked} onChange={handleAccountingCheckbox}/>Accounting</label>
                        <label htmlFor="rental" className="calc__checkbox-label"><input type="checkbox" className="calc__checkbox-input" id="rental" checked={terminalChecked} onChange={handleTerminalCheckbox}/>Rental of a payment terminal</label>
                    </span>
                </form>
                <span className="calc__results">
                    <div className="calc__results-item">
                        <p>Products</p>
                        <p>{value + " * 0.5"}</p>
                        <p>{"$" + value * 0.5}</p>
                    </div>
                    <div className="calc__results-item">
                        <p>Orders</p>
                        <p>{orderValue + " * 0.25"}</p>
                        <p>{"$" + orderValue * 0.25}</p>
                    </div>
                    <div className="calc__results-item">
                        <p>Package</p>
                        <p>{chosenPackage}</p>
                        <p>{text}</p>
                    </div>
                    <div className="calc__results-item">
                        <p>Accounting</p>
                        <p>{accountingPrice}</p>
                    </div>
                    <div className="calc__results-item">
                        <p>Terminal</p>
                        <p>{terminalPrice}</p>
                    </div>

                    <div className="calc__result-total">
                        <p>Total</p>
                        <p>{"$" + total}</p>
                    </div>
                </span>
            </section>
        </div>
    );
}

export default Calculator;