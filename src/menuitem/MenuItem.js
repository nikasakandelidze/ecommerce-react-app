import React from "react";
import './MenuItem.scss'
import PropTypes from 'prop-types';

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

MenuItem.propTypes={
    heading:PropTypes.string.isRequired,
    imageUrl:PropTypes.string.isRequired,
    size:PropTypes.string
}

export default MenuItem;