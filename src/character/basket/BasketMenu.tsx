import React from 'react';
import {BasketType} from "./Basket";
import style from "./Basket.module.scss";

const BasketMenu = ({valueArr, setModal, modal}: BasketType) => {
    return (
        <div>{valueArr.length > 0 &&
            <div className={style.container}
                 onClick={() => setModal(true)}>

                {valueArr.length > 0 && valueArr.map((el) =>
                    <div key={el.height} className={style.element}>name: {el.name}</div>
                )}
            </div>
        }
        </div>
    )
}

export default BasketMenu;