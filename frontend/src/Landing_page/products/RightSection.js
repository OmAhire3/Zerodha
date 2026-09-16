import React from 'react';

function RightSection({imageURL,productName,productDescription,tryDemo}) {
    return (  
       <div className='container text-muted pl-5 pr-5' style={{marginLeft:"5.2cm"}}>
        <div className='row'>
            
            <div className='col-4 pt-4' style={{marginTop:"4cm"}}>
              <h3 className='mt-5 mb-3'>{productName}</h3>
                <p>{productDescription}</p>
                <a  href={tryDemo} style={{textDecoration:"none" ,color:"#387ED1"}} >Learn more &#8594;</a>
            </div>
            <div className='col-1'></div>
            <div className='col-4'>
                <img className='pt-5' src={imageURL} />
            </div>

        </div>
       </div>

    );
}

export default RightSection;