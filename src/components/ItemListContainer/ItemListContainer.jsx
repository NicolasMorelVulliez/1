import React from "react";
import "./ItemListContainer.css"


//MAIN COMPONENET

function ItemListContainer(props){
    return(
        <div className="Container">
            <p className="parr">
                {props.greeting}
            </p>

        </div>

    )
}

export default ItemListContainer



