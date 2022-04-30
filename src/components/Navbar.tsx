import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <nav>
            <h1>Some CLOTHES</h1>
            <div>
                <ul>
                    <li>Hats</li>
                    <li>|</li>
                    <li>Tops</li>
                    <li>|</li>
                    <li>Bottoms</li>
                    <li>|</li>
                    <li>Shoes</li>
                    <li>|</li>
                    <li>New</li>
                    <li>|</li>
                    <li>On Sale</li>
                </ul>
            </div>
            <FontAwesomeIcon id='shopping-cart' icon={faCartShopping} />
        </nav>
    )
}