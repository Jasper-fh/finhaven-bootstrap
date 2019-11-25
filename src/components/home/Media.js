import React from 'react';

import cardImg from '../../img/media.png';

const Media = () => {
    const blogs = [
        {
            title: "We are the chaphion!",
            body: "Copy  something, Authoritatively predominate granular e-commerce without collaborative."
        },
        {
            title: "Rock the capital market!",
            body: "Copy  something, Authoritatively predominate granular e-commerce without collaborative."
        },
        {
            title: "Won't beat us!",
            body: "Copy  something, Authoritatively predominate granular e-commerce without collaborative."
        },

    ];

    return (
        <section id="media" className="media-section text-center  py-5">
            <div className="container py-5 my-5">
                <div className="col-lg-8 mx-auto">
                    <h2 className="my-3">MEDIA</h2>
                    <h4 className="mb-4">Copy will be updated...</h4>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-4 mt-5">
                        <div className="card media-card border-0 rounded-0">
                            <img src={cardImg} className="card-img-top rounded-0" alt="media" />
                            <div className="card-body">
                                <h3 className="card-title">{blogs[0].title}</h3>
                                <p>{blogs[0].body}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="card media-card border-0 rounded-0">
                            <img src={cardImg} className="card-img-top rounded-0" alt="media" />
                            <div className="card-body">
                                <h3 className="card-title">{blogs[1].title}</h3>
                                <p>{blogs[1].body}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="card media-card border-0 rounded-0">
                            <img src={cardImg} className="card-img-top rounded-0" alt="media" />
                            <div className="card-body">
                                <h3 className="card-title">{blogs[2].title}</h3>
                                <p>{blogs[2].body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Media;