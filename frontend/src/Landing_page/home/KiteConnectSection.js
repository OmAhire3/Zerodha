import React from 'react';

function KiteConnectSection() {
    return (
        <div
            className='container-fluid'
            style={{ background: "#F6FBFF" }}
        >
            <div className='row align-items-center py-4'>

                {/* Kite Connect Logo */}
                <div className='col-12 col-md-3 text-center mb-3 mb-md-0'>
                    <img
                        src='media/images/kc-logo-landing.svg'
                        alt='kc-logo'
                        style={{
                            width: '100%',
                            maxWidth: '180px',
                            height: 'auto'
                        }}
                    />
                </div>

                {/* Description */}
                <div className='col-12 col-md-6 text-center text-md-start mb-3 mb-md-0'>
                    <p
                        className='mb-0'
                        style={{ fontSize: "4mm" }}
                    >
                        Need more? Build your own trading and investing experience with
                        Kite Connect, simple HTTP APIs to place orders, stream market data,
                        manage your account, and more.
                        <a
                            href='https://zerodha.com/products/api'
                            style={{ textDecoration: "none" }}
                        >
                            {" "}Explore&#8594;
                        </a>
                    </p>
                </div>

                {/* Banner Image */}
                <div className='col-12 col-md-3 text-center'>
                    <img
                        src='media/images/kc-banner-image.svg'
                        alt='kc-banner'
                        style={{
                            width: '100%',
                            maxWidth: '190px',
                            height: 'auto'
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default KiteConnectSection;