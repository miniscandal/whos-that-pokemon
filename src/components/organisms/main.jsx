import '../../styles/organisms/main.css';
import Title from '../atoms/title';
import Pokedex from './pokedex';

function Main() {
    const title = { text : "Who's that Pokémon?" };

    return (
        <main className="main">
            <Title { ...title } />
            <Pokedex />
        </main>
    )
}

export default Main;