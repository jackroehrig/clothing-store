import { useEffect, useState, useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import { StringParams } from "../interfaces/interfaces"
import { CurrentUser } from "../contexts/CurrentUser"

export default function Item(props:any){
    let [info, setInfo] = useState<any>()

    interface ItemParams extends StringParams {
        id: string
    }

    const {category, id} = useParams<ItemParams>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://blooming-bastion-32922.herokuapp.com/items/${category}/${id}`)
            const data = await response.json()
            setInfo({...data.info})
        }
        fetchData()
    }, [category, id])

    const {currentUser} = useContext<any>(CurrentUser)

    const handleAdd = (e:any, res:any) => {
        e.preventDefault()
        if(!currentUser){
            props.addPopup()
        } else {
            props.handleAdd(res)
        }
    }

    const history = useHistory()

    return (
        <div className="item-container">
            <button className="exit-button" onClick={() => history.push(`/results/${category}`)}>{'<'}</button>
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
                    <button className="info-add-button" onClick={(e) => handleAdd(e, info)}>Add To Cart</button>
                </div>
                <div className="picture-container">
                    <img alt={info?.name} src={process.env.PUBLIC_URL + info?.picture}/>
                </div>
            </div>
        </div>
    )
}