import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { Collection, ClothingItem } from "../interfaces/interfaces"

export default function Results(){
    let [results, setResults] = useState<any[]>([])

    type ResultsParams = {
        category: string;
    }

    const {category} = useParams<ResultsParams>()

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(`http://localhost:4000/${category}`)
            const data = await response.json()
            setResults([...data.items])
        }
        fetchItems()
    }, [category])

    const capitalize = (word : string) : string => {
        let newWord = word[0].toUpperCase() + word.slice(1)
        return newWord
    }

    let squares : JSX.Element[] | undefined
    

    if(category === 'collections'){
        squares = results.map((col, i) => {
            let date = new Date(col.releaseDate)
            return (
                <div className="col-result" key={i}>
                    <h2>{col.name}</h2>
                    <p>Released {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</p>
                </div>
            )
        })
    } else {
        squares = results.map((res, i) => {
            let image

            try {
                image = require(`..${res.picture}`)
            } catch(err){
                console.log(err)
            }

            return(
                <div className="result" key={i}>
                    <img alt={res.name} src={image || require('../assets/Plain/red-t-shirt.jpg')} />
                    <h3>{res.name} ${res.price}</h3>
                    <p>{res.mainColor}</p>
                    <p>{res.s || res.m || res.l || res.xl ? 'Available' : 'None Available'}</p>
                </div>
            )
        })
    }

    return(
        <div className="results">
            <h2>{capitalize(category)}</h2>
            <div className="results-area">
                {squares}
            </div>
        </div>
    )
}