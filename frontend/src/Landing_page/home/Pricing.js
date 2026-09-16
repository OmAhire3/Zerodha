import React from "react";

function Pricing() {
    return (
        <div className="container p-3 p-md-5 mt-4 mt-md-5">
            <div className="row align-items-center">

                {/* Pricing Content */}
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <h3>Unbeatable pricing</h3>

                    <p className="text-muted mt-3">
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fees and no hidden charges.
                    </p>

                    <a
                        href="www.google.com"
                        style={{ textDecoration: "none" }}
                    >
                        See pricing&#8594;
                    </a>
                </div>

                {/* Space between sections on desktop */}
                <div className="d-none d-md-block col-md-2"></div>

                {/* Pricing Cards */}
                <div className="col-12 col-md-6">
                    <div className="row text-center">

                        <div className="col-12 col-sm-6 p-3 border">
                            <h1 className="mb-3 mt-3">&#8377;0</h1>
                            <p>
                                Free equity delivery and
                                <br className="d-none d-sm-block" />
                                direct mutual funds
                            </p>
                        </div>

                        <div className="col-12 col-sm-6 p-3 border">
                            <h1 className="mb-3 mt-3">&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;