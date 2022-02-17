import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CharacterType} from "../types/types";
import {useParams} from "react-router-dom";
import style from './Character.module.scss'

const Character = () => {
    const [data, setData] = useState<CharacterType>({
        birth_year: '',
        created: '',
        edited: '',
        eye_color: '',
        films: [],
        gender: '',
        hair_color: '',
        height: '',
        mass: '',
        name: '',
        homeworld: '',
        skin_color: '',
        url: '',
        species: [],
        starships: [],
        vehicles: [],
    })

     const {id} = useParams<{id: string}>()

    useEffect(() => {
        async function getCharacter() {
            const response = await axios.get<CharacterType>(`https://swapi.dev/api/people/${id}/`)
            setData(response.data)
        }
        getCharacter()
    }, [id])

    return (
        <div className={style.block}>
        <div className={style.container}>
            <h2><span>Name:</span> {data.name}</h2>
           <h3> <span>gender: </span>{data.gender}</h3>
           <h3> <span>birth year:</span> {data.birth_year}</h3>
            <h3> <span>hair color:</span> {data.hair_color}</h3>
            <h3><span>height:</span>{data.height}</h3>
           <h3><span>skin_color:</span> {data.skin_color}</h3>
        </div>
        </div>
    );
};

export default Character;