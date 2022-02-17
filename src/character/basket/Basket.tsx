import React from 'react';
import {MainType} from "../../characters/Characters";
import BasketMenu from "./BasketMenu";

export type BasketType = {
    valueArr: MainType[]
    modal: boolean
    setModal:(value: boolean)=> void
}

const Basket = ({valueArr,modal, setModal}: BasketType) => {
    return (<>
            {
               modal ? <BasketMenu valueArr={valueArr} setModal={setModal} modal={modal}/> : ''}

        </>
    )
};

export default Basket;