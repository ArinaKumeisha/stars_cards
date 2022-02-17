import React, {useState} from 'react';
import style from "../mainStyle/MainStyle.module.scss";
import {useNavigate} from "react-router-dom";
import {MainType} from "../characters/Characters";


type PropsType = {
    id: any
    data: MainType[]
    character: MainType
    setValueArr: (value: MainType[]) => void
    valueArr: MainType[]
}

const Buttons = ({id, data, character, setValueArr, valueArr}: PropsType) => {
    const [isValue, setIsValue] = useState(false)

    function addStars(e: any) {
        e.stopPropagation()
        const newValue = data.filter(el => el.name === character.name)
        setValueArr([...valueArr, ...newValue])
        setIsValue(!isValue)
    }

    function deleteStars(e: any) {
        e.stopPropagation()
        const newArr = valueArr.filter(el => el.name !== character.name)
        setValueArr(newArr)
        setIsValue(!isValue)
    }

    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() =>
                navigate(`/character/${id}`)} className={style.btn}>
                more
            </button>
            {isValue ? <button onClick={deleteStars}>delete</button> :
                <button onClick={addStars}>add</button>}
        </div>
    );
};

export default Buttons;