import React from 'react';

import icon1 from '../../img/icons/Aboutus_01.png';
import icon2 from '../../img/icons/Aboutus_02.png';
import icon3 from '../../img/icons/Aboutus_03.png';

const AboutUs = () => {

    const cards = [
        "Fueled by a drive to reshape international finance, Finhaven is dedicated to developing momentum shifting technologies that push the boundaries of what is possible for global securities markets.",
        "Advances in cryptographic ledger and digital securities technology have allowed us to create a liquid market for private securities that opens up both an online primary and secondary market to accredited investors, unlocking a new era of liquidity.",
        "Compliance with securities laws and regulations are coded into our digital assets and capital markets infrastructure. Our platforms are designed to illuminate global capital markets by providing access to a new generation of investing capabilities."

    ];

    const maxWidth = (width) => {
        return (
            {
                maxWidth: width + "px",
                height: "auto"
            }
        );
    };

    return (
        <section id="about" className="about-section text-center">
            <div className="container py-5">
                <div className="col-lg-8 mx-auto">
                    <h2 className="my-3">ABOUT US</h2>
                    <h4 className="mb-4">We’re on a mission to redesign capital markets from end to end.</h4>
                </div>
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <div className="card bg-transparent border-0 px-3">
                            <img style={maxWidth(66)} src={icon1} className="card-img-top mx-auto" alt="fihaven-aboutus-1" />
                            <div className="card-body">
                                <p className="card-text">{cards[0]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="card bg-transparent px-3">
                            <img style={maxWidth(78)} src={icon2} className="card-img-top mx-auto" alt="fihaven-aboutus-2" />
                            <div className="card-body">
                                <p className="card-text">{cards[1]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="card bg-transparent px-3">
                            <img style={maxWidth(72)} src={icon3} className="card-img-top mx-auto" alt="fihaven-aboutus-3" />
                            <div className="card-body">
                                <p className="card-text">{cards[2]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;