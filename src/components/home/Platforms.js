import React from 'react';

const Platforms = () => {
    const cards = [
        "Our groundbreaking trading technology provides investors and issuers access to a global pool of capital, creating a never before seen level of security, speed, and liquidity.",
        "Immerse yourself in market research and analysis, innovative investment ideas, and unique perspectives provided by our trusted and intelligent community."
    ];

    return (
        <section id="platforms" className="platforms-section text-center my-5 py-5">
            <div className="container py-5 mt-5">
                <div className="col-lg-8 mx-auto">
                    <h2 className="my-3">PLATFORMS</h2>
                    <h4 className="mb-4">Envision the World to Come. Digital Capital Markets are Here.</h4>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="platform-trading-section d-flex align-items-center col-lg-6">
                        <div className="row">
                            <div className="text-center col-sm-5 mx-auto platform-card">
                                <h3 className="mb-4">FINHAVEN TRADING</h3>
                                <p>{cards[0]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="platform-club-section d-flex align-items-center col-lg-6">
                        <div className="row">
                        <div className="text-center col-sm-5 mx-auto platform-card">
                            <h3 className="mb-4">FINHAVEN CLUB</h3>
                            <p>{cards[1]}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Platforms;