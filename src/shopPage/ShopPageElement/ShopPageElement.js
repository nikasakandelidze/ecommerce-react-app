import React from 'react'
import './ShopPageElement.scss'
import {addItem} from "../../my-redux/cart/cart-action";
import {connect} from "react-redux";

const ShopPageElement = ({title, items, addItem}) => {

    return (
        <div className='element'>
            <div className='title' style={{backgroundColor:'lavender'}}>
                {title}
            </div>
            <div className='elements'>
                    { items
                        .filter((item,idx)=>idx<4)
                        .map(e =>
                        <div className='ii' key={e.id}>
                            <h4 style={{backgroundColor:'lavender'}}>{e.name}s</h4>
                            <h4 style={{backgroundColor:'lavender'}}>{e.price}$</h4>
                            <img className='shop-data-image' height='150px' src={e.imageUrl}/>
                            <div>
                                <button onClick={x=>addItem(e)}>Add</button>
                            </div>
                        </div>) }
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    };
}

export default connect(null,mapDispatchToProps)(ShopPageElement);