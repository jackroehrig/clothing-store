import { useEffect, useState } from "react"
import { ClothingItem } from "../interfaces/interfaces"

export default function FeaturedItems() {
    let [items, setItems] = useState<ClothingItem[]>([])

    useEffect(() => {
        const fetchRandoms = async () => {
            const response = await fetch('http://localhost:4000/items/random_three')
            const data = await response.json()
            setItems([...data.items])
        }
        fetchRandoms()
    }, [])

    const features = items.map((item, i) => {
        let image = false
        try{
            image = require('..' + item.picture) 
        } catch(err){
            console.log(err)
        }
        // console.log(require(`..${item.picture}`))
        // let image = require('../assets/Plain/red-t-shirt.jpg')
    
        return (
            <div className="feature-box" key={i}>
                <img alt={item.name} src={image || require('../assets/Plain/red-t-shirt.jpg')} />
                <div className="overlay">
                    <button className="add-button">+</button>
                    <button className='view-button'>VIEW</button>
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