import React from 'react';
function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' alt='education' />
                </div>
                <div className='col-6 mt-4'>
                    <br/>
                    <br/>
                    <h3>Free and open market education</h3>
                    <br/>
                    <p>Varsity, the largest online stock market education book in the world<br/> covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity&#8594;</a>
                    <br/>
                    <br/>   
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A&#8594;</a>
                </div>
            </div>
        </div>
     );
}

export default Education;