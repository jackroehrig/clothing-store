import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StringParams } from "../interfaces/interfaces"

export default function Item(){
    let [info, setInfo] = useState<any>()

    interface ItemParams extends StringParams {
        id: string
    }

    const {category, id} = useParams<ItemParams>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/${category}/${id}`)
            const data = await response.json()
            setInfo({...data})
        }
        fetchData()
    }, [category, id])

    return (
        <div className="cotainer">
            <div className="content-container">
                <div className="info-container">
                    <h2>{info? info.name : null}</h2>
                </div>
            </div>
            <div className="picture-container"></div>
        </div>
    )
}