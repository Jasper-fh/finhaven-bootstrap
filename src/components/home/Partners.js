import React from 'react';

import partner1 from "../../img/partners/partners_01.png";
import partner2 from "../../img/partners/partners_02.png";
import partner3 from "../../img/partners/partners_03.png";
import partner4 from "../../img/partners/partners_04.png";
import partner5 from "../../img/partners/partners_05.png";
import partner6 from "../../img/partners/partners_06.png";
import partner7 from "../../img/partners/partners_07.png";

const Partners = () => {
    const maxWidth = (width) => {
        return (
            { maxWidth: width + "px" }
        );
    };
    
    return (
        <section id="partners" className="partners-section text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                    <h2 className="mb-4">PARTNERS</h2>
                        
                    <div className="row d-lg-none px-3">
                        <div className="col-12"><img style={maxWidth(155)} src={partner1} alt="fihaven-technology-partner1" /></div>
                        <div className="col-12"><img style={maxWidth(125)} src={partner2} alt="fihaven-technology-partner2" /></div>
                        <div className="col-12"><img style={maxWidth(98)} src={partner3} alt="fihaven-technology-partner3" /></div>
                        <div className="col-12"><img style={maxWidth(131)} src={partner4} alt="fihaven-technology-partner4" /></div>
                        <div className="col-12"><img style={maxWidth(54)} src={partner5} alt="fihaven-technology-partner5" /></div>
                        <div className="col-12"><img style={maxWidth(121)} src={partner6} alt="fihaven-technology-partner6" /></div>
                        <div className="col-12"><img style={maxWidth(86)} src={partner7} alt="fihaven-technology-partner7" /></div>
                    </div>

                    <div className="row d-lg-block d-none">
                        <div className="d-flex justify-content-around align-items-center flex-wrap px-5">
                        <img style={maxWidth(155)} src={partner1} alt="fihaven-technology-partner1" />
                        <img style={maxWidth(125)} src={partner2} alt="fihaven-technology-partner2" />
                        <img style={maxWidth(98)} src={partner3} alt="fihaven-technology-partner3" />
                        <img style={maxWidth(131)} src={partner4} alt="fihaven-technology-partner4" />
                        <img style={maxWidth(54)} src={partner5} alt="fihaven-technology-partner5" />
                        <img style={maxWidth(121)} src={partner6} alt="fihaven-technology-partner6" />
                        <img style={maxWidth(86)} src={partner7} alt="fihaven-technology-partner7" />
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;