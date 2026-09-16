import React from 'react';

function Hero() {
    return (  
        <div className='container mt-5 mb-5 border-bottom' style={{paddingTop:"1.5cm",paddingBottom:"3cm"}}>
            <div className='row text-center text-muted mt-5'>
                <h3 className='mt-3 mb-3 fs-3'>Zerodha Products</h3>
                <br/>
                <h5>Sleek, modern, and intuitive trading platforms</h5>
                <br/>
                <br/>
                <h6>Check out our <a href='' style={{textDecoration:"none",color:"#387ED1"}}>investment offerings &#8594;</a></h6>  
            </div>
        </div>
    );
}

export default Hero;