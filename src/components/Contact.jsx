import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="contact__wrapper">
                <div className="row">
                    <div className="col-6 contact-left">
                        <h3 className="contact__header">Any questions?</h3>
                        <p className="contact__content">Leave your email address or call us!</p>
                        <div className="contact__info-email"><img className="contact__icon" src="src/assets/Mail Icon.svg" alt=""/>info@bestshop.xyz</div>
                        <div className="contact__info-phone"><img className="contact__icon" src="src/assets/Phone Icon.svg" alt=""/>123 456 789</div>
                    </div>
                    <div className="col-6 contact-right">
                        <label htmlFor="" id="name" className="contact__label-name">NAME</label>
                        <input type="text" className="contact__input-name"/>
                        <label htmlFor="" id="email" className="contact__label-email">EMAIL</label>
                        <input type="text" className="contact__input-email"/>
                        <input type="checkbox" className="contact__checkbox"/>
                        <p className="contact__rules">I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament’s and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (Data Protection Directive)</p>
                        <button className="contact__btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;