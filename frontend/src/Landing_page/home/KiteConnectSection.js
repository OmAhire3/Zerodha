import React from 'react';

function KiteConnectSection () {
    return ( 
        <div className='container-fluid' style={{background:"#F6FBFF"}} >
          <div className='row'>
               <div className='col-3 mt-4 '>
                    <img src='media/images/kc-logo-landing.svg' alt='kc-logo'  style={{marginLeft:"4cm"}}/>
               </div>
               <div className='col-6 mt-3'>
                    <p style={{fontSize:"4mm"}}>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more.<a href='https://zerodha.com/products/api' style={{textDecoration:"none"}}> Explore&#8594;</a></p>
               </div>    
               <div className='col-3 mt-4'>
                    <img src='media/images/kc-banner-image.svg' alt='kc-banner' style={{width:"5cm",marginRight:"4cm"}}/>
               </div>
          </div>
        </div>
     );
}

export default KiteConnectSection;