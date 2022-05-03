import blackButtondown from '../assets/Dress-Up/black-ss-buttondown-dress-shirt.jpg';
import fancySuit from '../assets/Sporting/gray-squares-sportcoat.jpg';
import leatherBag from '../assets/leather-bag-model.jpg';

export default function FeaturedItems(){

    interface Feature {
        source: string;
        alt: string;
        link: string;
        collectionName: string;
    }

    const items: Feature[] = [{
        source : blackButtondown,
        alt: 'man in black short sleeve buttondown',
        link: '#',
        collectionName: 'Fancy Plain'
    }, {
        source: fancySuit,
        alt: 'man in glasses wearing formalwear',
        link: '#',
        collectionName: 'Fancy Schmancy'
    }, {
        source: leatherBag,
        alt: 'model on stairs holding quality leather bag',
        link: '#',
        collectionName: 'Leather',
    }]

    const features = items.map((item : Feature, i) => {
        return (
            <div className="feature-box" key={i}>
                <img alt={item.alt} src={item.source} />
                <div className="overlay">
                    <button className='overlay-button' onClick={() => console.log(item.link)}>SHOP NOW</button>
                </div>
            </div>
        )
    })

    return (
        <div id='featured-container'>
            {features}
        </div>
    )
}