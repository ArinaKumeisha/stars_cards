import React from 'react';
import {BasketType} from "./Basket";

const BasketMenu = ({valueArr}: BasketType) => {
    return (
        <div >
            <h4>{valueArr.length}</h4>
            {valueArr.map((el, index) =>
                <div key={index}>name: {el.name}</div>
                )}
        </div>
    );
};

export default BasketMenu;