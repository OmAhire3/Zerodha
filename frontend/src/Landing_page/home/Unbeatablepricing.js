import React from 'react';

function Unbeatablepricing() {
    return (  
        <>
            <div className='container p-5 mt-5'>
                <div className='row'>
                    <div className='col-5'>
                            <h3>Unbelievable pricing</h3>
                            <br/>
                            <p>We pioneered the concept of discount broking and price <bt/>transparency in India. Flat fees and no hidden charges. </p>
                            <br/>
                    </div>
                    <div className='col-1'>

                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-4'>
                                <img src='media/images/pricingMF.svg'  style={{width:"3cm"}}/>
                                <p style={{fontSize:"3mm"}}>Free account opening</p>    
                            </div>
                            <div className='col-4'>
                                 <img src='media/images/pricingMF.svg'  style={{width:"3cm"}}/>
                                 <p style={{fontSize:"3mm"}}>Free equity delivery <br/>and direct mutual funds</p>
                            </div>
                            <div className='col-4'>
                                    <img src='media/images/intradayTrades.svg' style={{width:"3cm"}}/>
                                    <p style={{fontSize:"3mm"}}> Intraday and F&O</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Unbeatablepricing;