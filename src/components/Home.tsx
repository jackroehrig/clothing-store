import Navbar from './Navbar';
import HeroCollection from './HeroCollection';
import FeaturedItems from './FeaturedItems';

export default function Home() {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main style={{ flex: 1 }}>
                <HeroCollection />
                <FeaturedItems />

            </main>
        </div>
    )
}