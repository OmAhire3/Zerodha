import React from "react";

function Pricing() {
    return (
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-4">
                    <h3>Unbeatable pricing</h3>
                    <br/>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="www.google.com" style={{textDecoration:"none"}}>See pricing&#8594;</a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className="mb-3 mt-3" >&#8377;0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className="mb-3 mt-3" >&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      );
}

export default Pricing;