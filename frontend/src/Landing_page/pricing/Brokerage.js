import React from 'react';

function Brokerage() {
    return ( 
       <div className='container border-top p-5 mt-5'>
            <div className='row'>
                <div className='col-8'>
                    <h4 style={{color:"#387ED1",marginLeft:"3cm"}} className='my-5'>Brokerage calculator</h4>
                    <ul style={{fontSize:"12px"}} className='small'>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li><br/>
                        <li>Digital contract notes: Will be sent via e-mail.</li><br/>
                        <li>Physical copies of contract notes: If required, charged ₹20 per contract note. Courier charges apply.</li><br/>
                        <li>NRI account (non-PIS): 0.5% or ₹100 per executed order for equity, whichever is lower.</li><br/>
                        <li>NRI account (PIS): 0.5% or ₹200 per executed order for equity, whichever is lower.</li><br/>
                        <li>Account in debit balance: Any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li><br/>
                    </ul>
                </div>
                <div className='col-3'>
                    <h4 style={{color:"#387ED1",}} className='my-5'>List of charges</h4>
                </div>
            </div>
       </div>
     );
}

export default Brokerage;