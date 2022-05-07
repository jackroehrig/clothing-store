import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StringParams } from "../interfaces/interfaces"
// import { Collection, resItem } from "../interfaces/interfaces"

export default function Results() {
    let [results, setResults] = useState<any[]>([])

    const { category } = useParams<StringParams>()

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(`http://localhost:4000/${category}`)
            const data = await response.json()
            setResults([...data.items])
        }
        fetchItems()
    }, [category])

    const capitalize = (word: string): string => {
        let newWord = word[0].toUpperCase() + word.slice(1)
        return newWord
    }

    let squares: JSX.Element[] | undefined


    if (category === 'collections') {
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
            } catch (err) {
                console.log(err)
            }

            return (
                <div className="feature-box" key={i} style={{margin: '2rem 0'}}>
                    <img alt={res.name} src={image || require('../assets/Plain/red-t-shirt.jpg')} />
                    <div className="overlay">
                        <button className="add-button">+</button>
                        <button className='view-button'>VIEW</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="results">
            <h2>{capitalize(category)}</h2>
            <div className="results-area">
                {squares}
            </div>
        </div>
    )
}