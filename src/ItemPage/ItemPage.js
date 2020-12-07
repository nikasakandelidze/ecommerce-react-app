import React from 'react'



const ItemPage = (props) =>{
    return(
        <div>
            {props.match.params.itemId}
        </div>
    );
}


export default ItemPage;