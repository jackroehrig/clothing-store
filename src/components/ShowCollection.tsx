import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClothingItem } from "../interfaces/interfaces";

export default function ShowCollection() {
    let [collection, setCollection] = useState<any>()

    type ResultsParams = {
        id: string;
    }

    const { id } = useParams<ResultsParams>()

    useEffect(() => {
        const fetchCollection = async () => {
            const response = await fetch(`http://localhost:4000/collections/${id}`)
            const data = await response.json()
            setCollection({ ...data.col })
        }
        fetchCollection()
    }, [id])

    let date =new Date (collection?.releaseDate)
    return (
        <div className="collection-container">
            <h2>The {collection?.name} Collection</h2>
            <h5>Released {date.getDate()}-{date.getDay()}-{date.getFullYear()}</h5>
            <div className="items-container">
                <h4>Hats</h4>
                <section className="collection-items-container">
                    {collection?.hats[0] ? collection?.hats.map((hat: ClothingItem, i: number) => {
                        return (
                            <div className="collection-item" key={i}>
                                <h6>{hat.name}</h6>
                            </div>
                        )
                    }) : 'This collection does not have hats.'}
                </section>
                <h4>Tops</h4>
                <section className="collection-items-container">
                    {collection?.tops[0] ? collection?.tops.map((top: ClothingItem, i: number) => {
                        return (
                            <div className="collection-item" key={i}>
                                <h6>{top.name}</h6>
                            </div>
                        )
                    }) : 'This collection does not have tops.'}
                </section>
                <h4>Bottoms</h4>
                <section className="collection-items-container">
                    {collection?.bottoms[0] ? collection?.bottoms.map((bottom: ClothingItem, i: number) => {
                        return (
                            <div className="collection-item" key={i}>
                                <h6>{bottom.name}</h6>
                            </div>
                        )
                    }) : 'This collection does not have bottoms.'}
                </section>
                <h4>Shoe</h4>
                <section className="collection-items-container">
                    {collection?.shoes[0] ? collection?.shoes.map((shoe: ClothingItem, i: number) => {
                        return (
                            <div className="collection-item" key={i}>
                                <h6>{shoe.name}</h6>
                            </div>
                        )
                    }) : 'This collection does not have shoes.'}
                </section>
            </div>
        </div>
    )
}