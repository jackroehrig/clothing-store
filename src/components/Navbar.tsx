import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <h1><Link to="/">BASICS</Link></h1>
            <div>
                <ul>
                    <li><Link to="/results/hats">HATS</Link></li>
                    <li><Link to="/results/tops">TOPS</Link></li>
                    <li><Link to="/results/bottoms">BOTTOMS</Link></li>
                    <li><Link to="/results/shoes">SHOES</Link></li>
                    <li><Link to="/results/collections">COLLECTIONS</Link></li>
                </ul>
            </div>
            <FontAwesomeIcon id='shopping-cart' icon={faCartShopping} />
        </nav>
    )
}