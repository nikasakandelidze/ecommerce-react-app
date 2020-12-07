import React from 'react'
import SHOP_DATA from "../ShopData/ShopData";
import {Component} from "react/cjs/react.production.min";
import ShopPageElement from "./ShopPageElement/ShopPageElement";
import './ShopPage.scss'

class ShopPage extends Component{
    constructor(props) {
        super(props);

        this.state={
            shoppingData:SHOP_DATA
        }
    }

    render(){
        return (
            <div className='wrapper'>
                {this.state.shoppingData.map(e => <ShopPageElement title={e.title} items={e.items}/>)}
            </div>
        );
    }
}

export default ShopPage;