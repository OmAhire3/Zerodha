import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
         <div className='container p-5'>
            <div className='row text-center'>
                <h3>Open a Zerodha account</h3>
                <p>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
                <br/>
                <br/>
                <Link to="/signup"><button style={{width:"5cm", margin:"0 auto",background:"#387ED1"}} type="button" class="btn btn-primary">Sign up for free</button></Link>
            </div>
       </div>
     );
}

export default OpenAccount;