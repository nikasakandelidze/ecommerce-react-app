import React from "react";
import './MenuItem.scss'

const MenuItem=({heading, imageUrl, size})=>{
    return(
        <div style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        }  className={`${size} MenuItem`}>
            <div className='headingText'>
                <div className='banner'>
                    <h2>
                        {heading}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;