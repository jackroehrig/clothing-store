import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

export default function Navbar(props: any) {
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
                <FontAwesomeIcon id='shopping-cart' icon={faCartShopping} />
                <p>{props.cart?.length}</p>
            </div>
        </nav>
    )
}