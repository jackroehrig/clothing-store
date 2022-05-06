import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowCollection(){
    let [collection, setCollection] = useState<any>()

    type ResultsParams = {
        id: string;
    }

    const {id} = useParams<ResultsParams>()

    useEffect(() => {
        const fetchCollection = async () => {
            const response = await fetch(`http://localhost:4000/collections/${id}`)
            const data = await response.json()
            setCollection({...data.col})
        }
        fetchCollection()
    }, [id])

    console.log(collection)
    let date = new Date(collection?.releaseDate)
    return (
        <div className="collection-container">
            <h2>The {collection?.name} Collection</h2>
            <h6>Released {date.getDate()}-{date.getDay()}-{date.getFullYear()}</h6>
        </div>
    )
}