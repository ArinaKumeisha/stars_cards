import React from 'react';
import {MainType} from "../../characters/Characters";
import BasketMenu from "./BasketMenu";

export type BasketType = {
    valueArr: MainType[]
}

const Basket = ({valueArr}: BasketType) => {
    return (<>
              <BasketMenu valueArr={valueArr}/>
        </>
    )
};

export default Basket;