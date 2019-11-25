import React from 'react';
import MailchimpSubscribe from "../mailchimpSubscribe"

const url = "https://finhaven.us12.list-manage.com/subscribe/post?u=4cb375e44aba95ab23b516ac0&amp;id=4b32ff231a";

const Subscribe = () => {
    return (
        <section id="signup" className="signup-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <blockquote className="blockquote">
                            <p className="mb-0">“Don’t get left behind.<br /> The future of investing is here.”</p>
                        </blockquote>
                        <div className="mb-3">
                            <span style={{color: "#32C5FF"}} className="mb-3">Keep up with our leading-edge developnents!</span>
                        </div>
                        <MailchimpSubscribe url={url} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;