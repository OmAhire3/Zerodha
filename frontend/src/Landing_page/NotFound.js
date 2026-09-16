import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
         <div className='container p-5 mt-5 mb-5'>
            <div className='row text-center'>
                <h3>404</h3>
                <h3>Kiaan couldn’t find that page !</h3>
                <h6 className='text-muted'>We couldn’t find the page you were looking for.</h6>
                <h6>visit <Link style={{textDecoration:"none"}} to="/">Zerodha’s home page</Link>  </h6>                    
            </div>
       </div>
     );
}

export default NotFound;