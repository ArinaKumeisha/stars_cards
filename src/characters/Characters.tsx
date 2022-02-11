import React, {useEffect, useState} from 'react';
import axios from 'axios';
import s from './Characters.module.scss'
import {useNavigate} from "react-router-dom";
import style from '.././mainStyle/MainStyle.module.scss'


type MainType = {
    name: string
    gender: string
    mass: string
    height: string

}
const Characters = () => {
    const [data, setData] = useState<MainType[]>([])

    useEffect(() => {
        async function request() {
            const response = await axios.get<MainType>('https://swapi.dev/api/people/')
            //@ts-ignore
            setData(response.data.results)
        }

        request()

    }, [])
    const navigate = useNavigate()
    return (
        <div className={s.container}>
            {data.map((el, index) => {
                return (
                    <div key={index} className={s.element}>
                        <h2>gender: {el.name}</h2>
                        <div>gender: {el.gender}</div>
                        <div>height: {el.height}</div>
                        <div>mass: {el.mass}</div>
                        <button onClick={() =>
                            navigate(`/character/${index+1}`)} className={style.btn}>
                            more
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default Characters;