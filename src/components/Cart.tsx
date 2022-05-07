import { useHistory } from "react-router-dom"

export default function Cart(props: any) {

    const cartString: string | null = localStorage.getItem('cart')
    const cart = JSON.parse(cartString as string)

    let history = useHistory()

    let totalPrice: number = 0

    const deleteItem = (name: string) => {
        props.handleDelete(name)
    }

    const items = cart.map((item: any, i: any) => {
        totalPrice += item.price

        return (
            <div className="item" style={{ borderBottom: '3px dotted white' }} key={i}>
                <span>
                    <button onClick={() => deleteItem(item.name)}>X</button>
                    <h4>{item.name}</h4>
                </span>
                <p>$ {item.price}</p>
            </div>
        )
    })

    const handleOrder = () => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify([]))
            history.push('/')
        }
    }

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div className="items-container">
                {items}
                <div className="item">
                    <h4>TOTAL</h4>
                    <p>$ {totalPrice}</p>
                </div>
            </div>
            <div className="bottom-container">
                <button onClick={() => handleOrder()}>ORDER</button>
            </div>
        </div>
    )
}