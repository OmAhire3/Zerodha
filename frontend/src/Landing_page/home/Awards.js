import React from 'react';
function Awards() {
    return ( 
        <div className='container  p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt="Awards"/>
                </div>
                <div className='col-6 p-5 mt-2'>
                    <h3>Larget stock broker in India</h3>
                    <br/>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <br/>
                    <div className='row'>
                        <div className='col-6'>
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
                        <div className='col-6'>
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
                    <img src='media\images\pressLogos.png' alt="Awards" style={{width:"13cm"}}/>
                </div>
            </div>    
        </div>
     );
}

export default Awards;