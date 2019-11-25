import React, { Component } from 'react';
import { } from 'react-bootstrap';

const Hero = () => {
    return (
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center mb-5">
                    <h1 className="mx-auto mt-5">We Drive Innovation in Global Capital Markets</h1>
                    <p className="mx-auto my-5">Our technology empowers our users with extraordinary capabilities that expand and surpass the limitations of traditional global capital markets.</p>
                    <div className="blur"><a href="#platforms" className="rounded-0 btn btn-primary js-scroll-trigger">Discover Our Revolutionary Platforms</a></div>
                </div>
            </div>
        </header>
    );
}

export default Hero;