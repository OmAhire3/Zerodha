import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row mt-4'>   
                <div className='col-6'>
                    <h3>Trust with confidence</h3>
                    <br/>
                    <br/>
                        
                            <h5>Customer-first always</h5>
                            <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        
                        <br/>
                        <br/>
        
                            <h5>No spam or gimmicks</h5>
                            <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        
                        <br/>
                        <br/>
                        
                            <h5>The Zerodha universe</h5>
                            <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        
                        <br/>  
                        <br/>
                        
                            <h5>Do better with money</h5>
                            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. </p>
                        
                        <br/>
                        <br/>
                
                </div>
                <div className='col-6'>
                     <img src='media/images/trust.png' style={{width:"600px" , height:"600px"}} alt='trust'/>
                     <div className='row' >
                        <div className='col-2'>

                        </div>
                        <div className='col-4'>
                            <a href=" "  style={{textDecoration:"none"}}>Explore our products&#8594;</a>
                        </div>
                        <div className='col-4'>
                            <a href=''  style={{textDecoration:"none"}}>Try Kite demo&#8594;</a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;