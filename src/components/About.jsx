import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="about__wrapper">
                <h3 className="about__header">The most popular sales platform in country</h3>
                <div className="about__info">
                    <div className="about__img">
                        <img src="src/assets/Person.svg" alt="" />
                    </div>
                    <p className="about__number">100000+</p>
                    <p className="about__desc">daily entries</p>
                </div>
                <div className="about__info">
                    <div className="about__img about__after-first">
                        <img src="src/assets/Eye.svg" alt=""/>
                    </div>
                    <p className="about__number">2000000+</p>
                    <p className="about__desc">seen products every day</p>
                </div>
                <div className="about__info">
                    <div className="about__img about__after-second">
                        <img src="src/assets/Catalog.svg" alt=""/>
                    </div>
                    <p className="about__number about__after-third">10000+</p>
                    <p className="about__desc">added posts daily</p>
                </div>
            </div>
        </div>
    );
}

export default About;