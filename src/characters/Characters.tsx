import React, {useEffect, useState} from 'react';
import Character from '../character/Character';
import axios from 'axios';
import s from './Characters.module.scss'


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
            const response = await axios.get<any>('https://swapi.dev/api/people/')
            //@ts-ignore
            setData(response.data.results)
        }
            request()

    }, [])
    return (
        <div className={s.container}>
            {data.map((el,index)=> {
                return (
                    <div key={index} className={s.element}>
                        <h2>gender: {el.name}</h2>
                        <div>gender: {el.gender}</div>
                        <div>height: {el.height}</div>
                        <div>mass: {el.mass}</div>
                    </div>
                )
            })}
            <Character/>
        </div>
    );
}

export default Characters;