import React, {useEffect, useState} from 'react';
import style from "../mainStyle/MainStyle.module.scss";
import {useNavigate} from "react-router-dom";
import {MainType} from "../characters/Characters";
import axios from "axios";


type PropsType = {
    id: number
    data: MainType[]
    character: MainType
    setValueArr: (value: MainType[]) => void
    valueArr: MainType[]
}

const Buttons = ({id,
                     data,
                     character,
                     setValueArr,
                     valueArr,
                     }: PropsType) => {
    const [isValue, setIsValue] = useState(false)


    async  function  addStars(e: any) {
        e.stopPropagation()
        const newArr = data.find(el => el.name === character.name)
        if(newArr)
        setValueArr([...valueArr, newArr])
        setIsValue(true)
    }

    function deleteStars(e: any) {
        e.stopPropagation()
        const newArr = valueArr.filter((el: MainType) => el.name !== character.name)
        setValueArr(newArr)
        setIsValue(false)
    }

    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() =>
                navigate(`/character/${id}`)} className={style.btn}>
                more
            </button>
            {isValue ? <button onClick={deleteStars} className={style.grayBtn}>delete</button> :
                <button onClick={addStars} className={style.btn}>add</button>}
        </div>
    );
};

export default Buttons;