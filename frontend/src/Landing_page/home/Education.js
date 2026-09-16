import React from 'react';

function Education() {
    return (
        <div className='container p-3 p-md-5'>
            <div className='row align-items-center'>

                {/* Education Image */}
                <div className='col-12 col-md-6 text-center p-3 p-md-4'>
                    <img
                        src='media/images/education.svg'
                        alt='education'
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: 'auto'
                        }}
                    />
                </div>

                {/* Education Content */}
                <div className='col-12 col-md-6 p-3 p-md-4'>
                    <h3>Free and open market education</h3>

                    <p className='mt-4'>
                        Varsity, the largest online stock market education book in the world
                        <br className='d-none d-md-block' />
                        covering everything from the basics to advanced trading.
                    </p>

                    <a href='' style={{ textDecoration: "none" }}>
                        Varsity&#8594;
                    </a>

                    <p className='mt-4'>
                        TradingQ&A, the most active trading and investment community in India
                        for all your market related queries.
                    </p>

                    <a href='' style={{ textDecoration: "none" }}>
                        TradingQ&A&#8594;
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Education;