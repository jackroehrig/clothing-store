import collectionPic from '../assets/blue-t-shirt.jpg';

export default function HeroCollection(){
    return (
        <div id='hero-background'>
          <div id='hero-content'>
            <div>
                <h2>Plainest Collection</h2>
                <button>SHOP NOW</button>
            </div>
            {/* <p>Image of collection</p> */}
            <img id='collection-picture' alt='blue shirt from plainest collection' src={collectionPic}/>
          </div>
        </div>
    )
}