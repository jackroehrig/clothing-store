import { Link } from 'react-router-dom';
import collectionPic from '../assets/Plain/blue-t-shirt.jpg';

export default function HeroCollection(){
    return (
        <div id='hero-background'>
          <div id='hero-content'>
            <div>
                <h2>Plainest Collection</h2>
                <button><Link to='/show/collections/1'>VIEW</Link></button>
            </div>
            <img id='collection-picture' alt='blue shirt from plainest collection' src={collectionPic}/>
          </div>
        </div>
    )
}