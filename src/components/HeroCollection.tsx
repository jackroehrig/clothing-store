import { Link } from 'react-router-dom';
import collectionPic from '../assets/Plain/blue-t-shirt.jpg';

export default function HeroCollection(){
    return (
        <div id='hero-background'>
          <div id='hero-content'>
            <div>
                <h2>PLAINEST COLLECTION</h2>
                <Link to='/show/collections/1'><button>VIEW</button></Link>
            </div>
            <img id='collection-picture' alt='blue shirt from plainest collection' src={collectionPic}/>
          </div>
        </div>
    )
}