import React from 'react';

function Unbeatablepricing() {
    return (
        <>
            <div className='container p-3 p-md-5 mt-4 mt-md-5'>
                <div className='row align-items-center'>

                    {/* Text Section */}
                    <div className='col-12 col-md-5 mb-4 mb-md-0'>
                        <h3>Unbelievable pricing</h3>

                        <p className='mt-3'>
                            We pioneered the concept of discount broking and price
                            transparency in India. Flat fees and no hidden charges.
                        </p>
                    </div>

                    {/* Space on Desktop */}
                    <div className='d-none d-md-block col-md-1'></div>

                    {/* Pricing Features */}
                    <div className='col-12 col-md-6'>
                        <div className='row text-center'>

                            <div className='col-12 col-sm-4 mb-4 mb-sm-0'>
                                <img
                                    src='media/images/pricingMF.svg'
                                    alt='Free account opening'
                                    style={{
                                        width: '100%',
                                        maxWidth: '115px',
                                        height: 'auto'
                                    }}
                                />
                                <p className='mt-3' style={{fontSize: '3mm'}}>
                                    Free account opening
                                </p>
                            </div>

                            <div className='col-12 col-sm-4 mb-4 mb-sm-0'>
                                <img
                                    src='media/images/pricingMF.svg'
                                    alt='Free equity delivery'
                                    style={{
                                        width: '100%',
                                        maxWidth: '115px',
                                        height: 'auto'
                                    }}
                                />
                                <p className='mt-3' style={{fontSize: '3mm'}}>
                                    Free equity delivery and direct mutual funds
                                </p>
                            </div>

                            <div className='col-12 col-sm-4'>
                                <img
                                    src='media/images/intradayTrades.svg'
                                    alt='Intraday and F&O'
                                    style={{
                                        width: '100%',
                                        maxWidth: '115px',
                                        height: 'auto'
                                    }}
                                />
                                <p className='mt-3' style={{fontSize: '3mm'}}>
                                    Intraday and F&O
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Unbeatablepricing;