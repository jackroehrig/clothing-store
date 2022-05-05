import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <h1>Some CLOTHES</h1>
            <div>
                <ul>
                    <li><Link to='/results/hats'>Hats</Link></li>
                    <li>|</li>
                    <li><Link to='/results/tops'>Tops</Link></li>
                    <li>|</li>
                    <li><Link to='/results/bottoms'>Bottoms</Link></li>
                    <li>|</li>
                    <li><Link to='/results/shoes'>Shoes</Link></li>
                    <li>|</li>
                    <li><Link to='/results/collections'>Collections</Link></li>
                </ul>
            </div>
            <FontAwesomeIcon id='shopping-cart' icon={faCartShopping} />
        </nav>
    )
}