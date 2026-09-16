import React from 'react';

function Hero() {
    return ( 
       <div className='container-fluid mt-5 pt-5' style={{height:"6.5cm"}} id='supportHero'>
         <div id='supportWrapper'>
            <h1>Support Portal</h1>
            <button style={{height:"1cm",width:"3.5cm",marginTop:"3mm",marginRight:"2.7cm",background:"#387ED1"}} type="button" class="btn btn-primary">My tickets</button>
         </div>
         <div style={{marginLeft:"4cm",marginTop:"1cm"}}>  
               <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..' style={{height:"1.5cm",width:"29cm", borderRadius:"10px", padding:"4mm",marginBottom:"2cm",boxShadow:"0.5px 0.5px 2px silver"}} type="text" class="form-control" aria-label="Sizing example input"/>   
         </div>
        
         
       </div>
     );
}

export default Hero;