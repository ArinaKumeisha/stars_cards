import React from 'react';
import OneCharacter from "../character/oneCharacter/OneCharacter";
import s from "./Characters.module.scss";
import Buttons from "../buttons/Buttons";
import Basket from "../character/basket/Basket";


export type MainType = {
    name: string
    gender: string
    mass: string
    height: string
}

type PropsType = {
    data: MainType[]
    valueArr: MainType[]
    setValueArr: (value: MainType[]) => void

}
const Characters = ({data, valueArr, setValueArr}: PropsType) => {

    return (
        <div className={s.container}>
            {data.map((el, index) => {
                return (
                    <div key={el.name}>
                        <div className={s.element}>
                            <OneCharacter
                                character={el}
                                data={data}/>

                            <Buttons id={index + 1}
                                     data={data}
                                     character={el}
                                     valueArr={valueArr}
                                     setValueArr={setValueArr}
                            />
                        </div>

                    </div>
                )
            })}

        </div>
    )
}
export default Characters;