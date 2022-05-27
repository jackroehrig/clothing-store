import { useEffect, useState, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { ClothingItem } from "../interfaces/interfaces";
export default function ShowCollection(props: any) {
    let [collection, setCollection] = useState<any>()

    type ResultsParams = {
        id: string;
    }

    const { id } = useParams<ResultsParams>()

    const getCategoryAndId = (item: any) => {
        let ret
        let id


        if (item.hatId !== undefined) {
            ret = 'hats'
            id = String(item.hatId)
        } else if (item.topId !== undefined) {
            ret = 'tops'
            id = String(item.topId)
        } else if (item.bottomId !== undefined) {
            ret = 'bottoms'
            id = String(item.bottomId)
        } else if (item.shoeId !== undefined) {
            ret = 'shoes'
            id = String(item.shoeId)
        } else {
            ret = 'collections'
            id = String(item.collectionId)
        }

        return `${ret}/${id}`
    }

    const { currentUser } = useContext<any>(CurrentUser)

    const handleAdd = (e: any, res: any) => {
        e.preventDefault()
        if (!currentUser) {
            props.addPopup()
        } else {
            props.handleAdd(res)
        }
    }

    useEffect(() => {
        const fetchCollection = async () => {
            const response = await fetch(`https://blooming-bastion-32922.herokuapp.com/collections/${id}`)
            const data = await response.json()
            setCollection({ ...data.col })
        }
        fetchCollection()
    }, [id])

    const history = useHistory()

    let date = new Date(collection?.releaseDate)
    return (
        <div className="collection-container">
            <button className="exit-button" onClick={() => history.push('/results/collections')}>{'<'}</button>
            <h2>The {collection?.name} Collection</h2>
            <h5>Released {date.getDate()}-{date.getDay()}-{date.getFullYear()}</h5>
            <div className="items-container">
                <h4>Hats</h4>
                <section className="collection-items-container">
                    {collection?.hats[0] ? collection?.hats.map((hat: ClothingItem, i: number) => {
                        return (
                            <div className="feature-box" key={i} style={{ margin: '2rem 0' }}>
                                <img alt={hat.name} src={process.env.PUBLIC_URL + hat.picture} />
                                <div className="overlay">
                                    <button className="add-button" onClick={(e) => handleAdd(e, hat)}>+</button>
                                    <Link to={`/${getCategoryAndId(hat)}`}><button className='view-button'>VIEW</button></Link>
                                </div>
                            </div>
                        )
                    }) : 'This collection does not have hats.'}
                </section>
                <h4>Tops</h4>
                <section className="collection-items-container">
                    {collection?.tops[0] ? collection?.tops.map((top: ClothingItem, i: number) => {
                        return (
                            <div className="feature-box" key={i} style={{ margin: '2rem 0' }}>
                                <img alt={top.name} src={process.env.PUBLIC_URL + top.picture} />
                                <div className="overlay">
                                    <button className="add-button" onClick={(e) => handleAdd(e, top)}>+</button>
                                    <Link to={`/${getCategoryAndId(top)}`}><button className='view-button'>VIEW</button></Link>
                                </div>
                            </div>
                        )
                    }) : 'This collection does not have tops.'}
                </section>
                <h4>Bottoms</h4>
                <section className="collection-items-container">
                    {collection?.bottoms[0] ? collection?.bottoms.map((bottom: ClothingItem, i: number) => {
                        return (
                            <div className="feature-box" key={i} style={{ margin: '2rem 0' }}>
                                <img alt={bottom.name} src={process.env.PUBLIC_URL + bottom.picture} />
                                <div className="overlay">
                                    <button className="add-button" onClick={(e) => handleAdd(e, bottom)}>+</button>
                                    <Link to={`/${getCategoryAndId(bottom)}`}><button className='view-button'>VIEW</button></Link>
                                </div>
                            </div>
                        )
                    }) : 'This collection does not have bottoms.'}
                </section>
                <h4>Shoes</h4>
                <section className="collection-items-container">
                    {collection?.shoes[0] ? collection?.shoes.map((shoe: ClothingItem, i: number) => {
                        return (
                            <div className="feature-box" key={i} style={{ margin: '2rem 0' }}>
                                <img alt={shoe.name} src={process.env.PUBLIC_URL + shoe.picture} />
                                <div className="overlay">
                                    <button className="add-button" onClick={(e) => handleAdd(e, shoe)}>+</button>
                                    <Link to={`/${getCategoryAndId(shoe)}`}><button className='view-button'>VIEW</button></Link>
                                </div>
                            </div>
                        )
                    }) : 'This collection does not have shoes.'}
                </section>
            </div>
        </div>
    )
}