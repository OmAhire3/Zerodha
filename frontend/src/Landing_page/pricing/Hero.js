import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mt-5'>
            <h3 className='text-center text-muted mt-5 pt-4'>Charges</h3>
            <p className='text-center text-muted fs-5'>List of all charges and taxes</p>
            <div className='row text-muted text-center' style={{width:"1000px",margin:"3cm"}}>
                <div className='col-4'>
                    <img className='p-4' src='media/images/pricingMF.svg'/>
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE),are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img className='mb-1 p-4' src='media/images/intradayTrades.svg'/>
                    <h4>Intraday and F&O trades</h4>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>     
                </div>
                <div className='col-4'>
                    <img className='p-4' src='media/images/pricingMF.svg'/>
                    <h4>Free direct MF</h4>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.   </p>
                </div>

            </div>
        </div>
     );
}

export default Hero;