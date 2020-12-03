import React from "react";
import './Menu.scss'
import MenuItem from "../menuitem/MenuItem";
import {Component} from "react/cjs/react.production.min";

class  Menu extends Component {
        constructor() {
            super();
            this.state={
                catalogue: [
                    {
                        title: 'hats',
                        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                        id: 1,
                        linkUrl: 'shop/hats'
                    },
                    {
                        title: 'jackets',
                        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                        id: 2,
                        linkUrl: 'shop/jackets'
                    },
                    {
                        title: 'sneaker',
                        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                        id: 3,
                        linkUrl: 'shop/sneakers'
                    },
                    {
                        title: 'womens',
                        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                        size: 'large',
                        id: 1,
                        linkUrl: 'shop/womens'
                    },
                    {
                        title: 'mens',
                        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                        size: 'large',
                        id: 2,
                        linkUrl: 'shop/mens'
                    }
                ]
            }
        }

    render(){
        return (
            <div className='menuWrapper'>
                <div className='catalogueMenu'>
                    {this.state.catalogue.map(({title, imageUrl, id, size})=>{
                        return (
                            <MenuItem heading={title} imageUrl={imageUrl} key={id} size={size}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Menu;