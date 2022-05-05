import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ClothingItem } from "../interfaces/interfaces"

export default function Results(){
    let [results, setResults] = useState<ClothingItem[]>()

    type ResultsParams = {
        category: string;
    }

    const {category} = useParams<ResultsParams>()

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(`http://localhost:4000/results/${category}`)
            const data = await response.json()
            setResults([...data.items])
        }
        fetchItems()
    }, [])

    return(
        <div>
            <h1>Hiya</h1>
        </div>
    )
}