import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <h4  className='text-muted' style={{marginLeft:"15cm"}}>People</h4>
            <div className='row' style={{marginLeft:"3cm"}}>
                <div className='col-4 p-5'>
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%" , width:"8cm"}}/>
                    <br/>
                    <br/>
                    <h6 className='text-center'>Nithin Kamath</h6>
                    <p className='text-center'>Founder, CEO</p>
                </div>
                <div className='col-7 p-5'>
                    <br/>
                    <p  className='text-muted'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry</p>
                    <p  className='text-muted'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p  className='text-muted'>Playing basketball is his zen.</p>
                    <p  className='text-muted'>Connect on <a style={{textDecoration:"none",color:"#387ED1"}} href=''>HomePage</a>  /  <a style={{textDecoration:"none",color:"#387ED1",}} href=''>TradingQnA</a> /  <a style={{textDecoration:"none"}} href=''>Twitter</a></p>
                </div>
               
                
            </div>
        </div>
     );
}

export default Team;