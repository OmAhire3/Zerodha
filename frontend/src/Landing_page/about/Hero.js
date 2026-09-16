import React from 'react';

function Hero() {
    return (
        <div className='container mt-5 p-5 pb-0'>
            <div className='row mt-4'>
                <h4 className='text-center mt-5'>
                    We pioneered the discount broking model in India.<br/>
                    Now, we are breaking ground with our technology.
                </h4>
            </div>

            <div className='row mt-5 border-top p-5'>
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <p className='text-muted'>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <br/>
                    <p className='text-muted'>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <br/>
                    <p className='text-muted'>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>

                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <p className='text-muted'>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <br/>
                    <p className='text-muted'>
                        <a href='' style={{textDecoration:"none",color:"#387ED1"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <br/>
                    <p className='text-muted'>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='' style={{textDecoration:"none",color:"#387ED1"}}>blog</a> or see what media is <a href='' style={{textDecoration:"none",color:"#387ED1"}}>saying about us</a> or learn more about our business and product <a href='' style={{textDecoration:"none",color:"#387ED1"}}>philosophies.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;