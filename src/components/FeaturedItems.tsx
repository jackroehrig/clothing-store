import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"
// import { ClothingItem } from "../interfaces/interfaces"

export default function FeaturedItems(props:any) {
    let [items, setItems] = useState<any[]>([])

    useEffect(() => {
        const fetchRandoms = async () => {
            const response = await fetch('http://localhost:4000/items/random_three')
            const data = await response.json()
            setItems([...data.items])
        }
        fetchRandoms()
    }, [])

    const getCategoryAndId = (item: any) => {
        let ret
        let id


        if (item.hatId !== undefined) {
            ret = 'hats'
            id = String(item.hatId)
        } else if(item.topId !== undefined){
            ret = 'tops'
            id = String(item.topId)
        } else if(item.bottomId !== undefined){
            ret = 'bottoms'
            id = String(item.bottomId)
        } else if(item.shoeId !== undefined){
            ret = 'shoes'
            id = String(item.shoeId)
        } else {
            ret = 'collections'
            id = String(item.collectionId)
        }

        return `${ret}/${id}`
    }

    const {currentUser} = useContext<any>(CurrentUser)

    const handleAdd = (e:any, res:any) => {
        e.preventDefault()
        if(!currentUser){
            props.addPopup()
        } else {
            props.handleAdd(res)
        }
    }

    const features = items.map((item, i) => {
        let image = false
        try {
            image = require('..' + item.picture)
        } catch (err) {
            console.log(err)
        }
        // console.log(require(`..${item.picture}`))
        // let image = require('../assets/Plain/red-t-shirt.jpg')

        return (
            <div className="feature-box" key={i}>
                <img alt={item.name} src={image || require('../assets/Plain/red-t-shirt.jpg')} />
                <div className="overlay">
                    <button className="add-button" onClick={(e) => handleAdd(e, item)}>+</button>
                    <Link to={`/${getCategoryAndId(item)}`}><button className='view-button'>VIEW</button></Link>
                </div>
            </div>
        )
    })

    return (
        <div id='featured-container'>
            {features}
        </div>
    )
}