import React from 'react';
import { Link } from "react-router-dom";
function Hero() {
    return (
       <div className='container p-5 mt-5'>
            <div className='row text-center'  style={{marginTop:"1cm"}} >
                <img src='media/images/main.svg' alt='Hero' className='mb-5' style={{height:"10cm"}}/>
                <h3>Invest in everything</h3>
                <br/>
                <br/>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <br/>
                <br/>
                <Link to="/signup"><button style={{width:"5cm", margin:"0 auto",background:"#387ED1"}} type="button" className="btn btn-primary">Sign up for free</button></Link>
            </div>
       </div>
     );
}

export default Hero;