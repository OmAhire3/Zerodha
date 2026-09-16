import React from 'react';
import { Link } from 'react-router-dom';
function Universe() {
    return ( 
        <div className='container pt-5 mt-5 mb-5 border-top'  style={{paddingLeft:"5cm",paddingRight:"5cm"}}>
            <div className='row text-center'>
                <p className='text-muted fs-5'>Want to know more about our technology stack? Check out the<h5 style={{color:"#387ED1",display:"inline"}}> Zerodha.tech </h5>blog.</p>
                <br/><br/> <br/> <br/> <br/> 
                <h4 >The Zerodha Universe</h4>
                <br/> <br/>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                    <br/><br/><br/>

                  
                <div className='col-4 p-3'> 
                    <img src='media/images/zerodhafundhouse.png' style={{height:"1.5cm"}}/>
                    <p className='small small-text mt-4'>Our asset management venturethat is creating simple and transparent indexfunds to help you save for your goals.</p>
                    <br></br>
                    <img  src='media/images/streakLogo.png' style={{height:"1.4cm",marginTop:"0.5cm"}}/>
                    <p className='small small-text mt-4'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                 <div className='col-4 p-3'>
                    <img className='mt-2' src='media/images/sensibullLogo.svg' style={{height:"1.1cm"}}/> 
                    <p className='small small-text mt-4'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    <br></br>
                    <img src='media/images/smallcaseLogo.png' style={{height:"1.4cm",marginTop:"0.6cm"}}/> 
                    <p className='small small-text mt-4'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                 <div className='col-4 p-3'>
                    <img src='media/images/tijori.svg'style={{height:"1.5cm"}} />
                    <p className='small small-text mt-4'> Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                     <br></br>
                    <img src='media/images/ditto-logo.png'style={{height:"1.5cm",marginTop:"0.5cm"}} />
                    <p className='small small-text mt-4'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <Link to="/signup"><button  style={{width:"5cm", margin:"0 auto",background:"#387ED1"}} type="button" class="btn btn-primary mt-5 mb-5">Sign up for free</button></Link>
            </div>            
        </div>
     );
}

export default Universe;