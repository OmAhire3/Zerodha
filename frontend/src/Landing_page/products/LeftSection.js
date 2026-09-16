import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) 
{
    return ( 
        <div className='container p-5 text-muted'>
            <div className='row'>
                <div className='col-1'></div>
                    <div className='col-3'>
                        <img src={imageURL} />
                    </div>
                    <div className='col-4'></div>
                    <div className='col-4 mt-3'>
                        <h3 className='mt-5'>{productName}</h3>
                        <p className='mt-3'>{productDescription}</p>  
                        <div className='mt-4'>
                            <a  href={tryDemo} style={{textDecoration:"none" ,color:"#387ED1"}} >Try demo&#8594;</a>
                            <a  href={learnMore} style={{textDecoration:"none",color:"#387ED1",marginLeft:"2.1cm" }}>Learn more&#8594;</a>
                        </div>
                        <br/>
                        <div>
                            <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                            <a href={googlePlay} style={{marginLeft:"5mm"}}><img src='media\images\appstoreBadge.svg'/></a>
                        </div>     
                    </div>
            </div>
        </div>
     );
}

export default LeftSection;