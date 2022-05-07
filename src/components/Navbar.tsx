import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link, useHistory } from 'react-router-dom'
import { useContext } from "react"
import { CurrentUser } from "../contexts/CurrentUser"

export default function Navbar(props: any) {

    let { currentUser } = useContext<any>(CurrentUser)

    let cartString : string | null = localStorage.getItem('cart')
    let cart = JSON.parse(cartString as string)


    let history = useHistory()

    const handleCartClick = () => {
        if(currentUser){
            history.push('/cart')
        } else {
            props.addPopup()
        }
    }

    return (
        <nav>
            <h1><Link to="/">BASICS</Link></h1>
            <div className="links">
                <ul>
                    <li><Link to="/results/hats">HATS</Link></li>
                    <li><Link to="/results/tops">TOPS</Link></li>
                    <li><Link to="/results/bottoms">BOTTOMS</Link></li>
                    <li><Link to="/results/shoes">SHOES</Link></li>
                    <li><Link to="/results/collections">COLLECTIONS</Link></li>
                </ul>
            </div>
            <div className="shopping-info">
                <FontAwesomeIcon id='shopping-cart' icon={faCartShopping} onClick={() => handleCartClick()}/>
                <p>{cart?.length !== 0 ? `( ${cart?.length} )` : null}</p>
            </div>
            <div className='login-signup'>
                {currentUser ? null : <Link to='/login' className="login-link">Login</Link>}
                {currentUser ? null : <Link to='/signup' className="sign-up-link">Sign Up</Link>}
            </div>
        </nav>
    )
}