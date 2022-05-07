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
            const response = await fetch(`http://localhost:4000/items/${category}/${id}`)
            const data = await response.json()
            setInfo({...data.info})
        }
        fetchData()
    }, [category, id])

    let image = false

    try {
        image = require('..' + info?.picture)
    } catch (err) {
        console.log(err)
    }

    return (
        <div className="item-container">
            <div className="content-container">
                <div className="info-container">
                    <h2>{info?.name}</h2>
                    <p>From the {info?.collection.name} Collection</p>
                    <div className="sizes">
                        <div className="size br">
                            <h5>{info?.s}</h5>
                            <hr/>
                            <h6>S</h6>
                        </div>
                        <div className="size br">
                            <h5>{info?.m}</h5>
                            <hr/>
                            <h6>M</h6>
                        </div>
                        <div className="size br">
                            <h5>{info?.l}</h5>
                            <hr/>
                            <h6>L</h6>
                        </div>
                        <div className="size">
                            <h5>{info?.xl}</h5>
                            <hr/>
                            <h6>XL</h6>
                        </div>
                    </div>
                    <h3>${info?.price}</h3>
                    <button className="info-add-button">Add To Cart</button>
                </div>
                <div className="picture-container">
                    <img alt={info?.name} src={image || require('../assets/Plain/red-t-shirt.jpg')}/>
                </div>
            </div>
        </div>
    )
}