import './component_styles/Navbar.module.scss';

export default function Navbar() {
    return (
        <nav>
            <h1>Some CLOTHES</h1>
            <ul className='nav-list'>
                <li>Hats</li>
                <li>Tops</li>
                <li>Bottoms</li>
                <li>Shoes</li>
                <li>New</li>
                <li>On Sale</li>
            </ul>
            <p>ICON</p>
        </nav>
    )
}