import HeroCollection from './HeroCollection';
import FeaturedItems from './FeaturedItems';

export default function Home(props:any) {
    return (
        <div className="App">
            <main style={{ flex: 1 }}>
                <HeroCollection />
                <FeaturedItems handleAdd={props.handleAdd}/>
            </main>
        </div>
    )
}