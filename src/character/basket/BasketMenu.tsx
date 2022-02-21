import React from 'react';
import {BasketType} from "./Basket";
import style from "./Basket.module.scss";

const BasketMenu = ({valueArr}: BasketType) => {
    return (
        <div className={style.block}>{valueArr.length > 0 &&
            <div className={style.container}>

                {valueArr.length > 0 && valueArr.map((el) =>
                    <div key={el.height} className={style.element}>name: {el.name}</div>
                )}
            </div>
        }
        </div>
    )
}

export default BasketMenu;