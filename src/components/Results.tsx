import { useEffect, useState, useContext } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { StringParams } from "../interfaces/interfaces"
import { CurrentUser } from "../contexts/CurrentUser"
// import { Collection, resItem } from "../interfaces/interfaces"

export default function Results(props:any) {
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

    let history = useHistory()

    const openCollection = (id:number) => {
        history.push(`/show/collections/${id}`)
    }

    let squares: JSX.Element[] | undefined


    if (category === 'collections') {
        squares = results.map((col, i) => {
            let date = new Date(col.releaseDate)
            col.tops.sort(() => .5 - Math.random())
            col.bottoms.sort(() => .5 - Math.random())
            console.log(col)
            return (
                <div className="col-result" key={i} onClick={() => openCollection(col.collectionId)}>
                    <h2>{col.name}</h2>
                    <img alt={col.name} src={col?.tops[0] ? process.env.PUBLIC_URL + col?.tops[0]?.picture : process.env.PUBLIC_URL + col?.bottoms[0]?.picture}/>
                    <p>Released {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</p>
                </div>
            )
        })
    } else {
        squares = results.map((res, i) => {

            return (
                <div className="feature-box" key={i} style={{margin: '2rem 0'}}>
                    <img alt={res.name} src={process.env.PUBLIC_URL + res.picture} />
                    <div className="overlay">
                        <button className="add-button" onClick={(e) => handleAdd(e, res)}>+</button>
                        <Link to={`/${getCategoryAndId(res)}`}><button className='view-button'>VIEW</button></Link>
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