import HeroCollection from './HeroCollection';
import FeaturedItems from './FeaturedItems';

export default function Home() {
    return (
        <div className="App">
            <main style={{ flex: 1 }}>
                <HeroCollection />
                <FeaturedItems />
            </main>
        </div>
    )
}