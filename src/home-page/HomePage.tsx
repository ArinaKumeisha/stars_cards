import React, {useEffect, useState} from 'react';
import axios from "axios";
import Characters, {MainType} from "../characters/Characters";
import style from './HomePage.module.scss'

type HomePageType = {
    valueArr: MainType[]
    setValueArr: (value: MainType[]) => void
    modal: boolean
    setModal:(value: boolean) => void
}
const HomePage = ({valueArr, setValueArr, modal, setModal}: HomePageType) => {

    const [data, setData] = useState<MainType[]>([])

    useEffect(() => {
        async function request() {
            const response = await axios.get<MainType[]>('https://swapi.dev/api/people/')
            //@ts-ignore
            setData(response.data.results)
        }

        request()
    }, [])

    return (
        <div className={style.container}>
            <Characters
                data={data}
                valueArr={valueArr}
                setValueArr={setValueArr}
                modal={modal}
                setModal={setModal}
            />
        </div>)
}

export default HomePage;