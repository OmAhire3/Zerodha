import React from 'react';

function Awards() {
    return (
        <div className='container p-3 p-md-5'>
            <div className='row align-items-center'>
                
                {/* Image */}
                <div className='col-12 col-md-6 p-3 p-md-5 text-center'>
                    <img
                        src='media/images/largestBroker.svg'
                        alt='Awards'
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: 'auto'
                        }}
                    />
                </div>

                {/* Content */}
                <div className='col-12 col-md-6 p-3 p-md-5 mt-2'>
                    <h3>Larget stock broker in India</h3>

                    <p className='mt-4'>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>

                    {/* Lists */}
                    <div className='row mt-3'>
                        <div className='col-12 col-sm-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>

                        <div className='col-12 col-sm-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Government Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Press Logos */}
                    <div className='mt-4'>
                        <img
                            src='media/images/pressLogos.png'
                            alt='Press Logos'
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                height: 'auto'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;