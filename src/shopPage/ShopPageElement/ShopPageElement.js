import React from 'react'
import './ShopPageElement.scss'

const ShopPageElement = ({title, items}) => {

    return (
        <div className='element'>
            <div className='title'>
                {title}
            </div>
            <div className='elements'>
                    { items
                        .filter((item,idx)=>idx<4)
                        .map(e =>
                        <div className='image' key={e.id}>
                            <h4>{e.name}s</h4>
                            <img height='150px' src={e.imageUrl}/>
                        </div>) }
            </div>
        </div>
    );
};


export default ShopPageElement;