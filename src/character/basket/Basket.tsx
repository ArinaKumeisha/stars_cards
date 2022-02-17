import React from 'react';
import {MainType} from "../../characters/Characters";
import style from './Basket.module.scss'
import BasketMenu from "./BasketMenu";

export type BasketType = {
    valueArr: MainType[]
}

const Basket = ({valueArr}: BasketType) => {
    //const [showBasket, setShowBasket] = useState(false)
    return (<>
            {valueArr.length > 0 &&
                <div className={style.container}>
                    <BasketMenu valueArr={valueArr}/>
                </div>}
        </>
    )
};

export default Basket;