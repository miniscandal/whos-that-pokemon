import { useState } from 'react';

import { SelectedPokemonProvider } from '@shared-contexts/selected-pokemon';

import { TitlePokemon } from '@shared-components/atoms/title-pokemon';
import { ButtonPokedex } from '@shared-components/molecules/button-pokedex';

import { FeaturePokedexMain } from './feature-pokedex-main';
import { FeaturePokedexSecondary } from './feature-pokedex-secondary';

import './App.css';

function App() {
    const [hidden, setHidden] = useState(false);

    const buttonPokedex = {
        main: {
            text: 'A',
            handleClick: () => setHidden(false)
        },
        secondary: {
            text: 'B',
            handleClick: () => setHidden(true)
        },
    };

    return (
        <>
            <TitlePokemon text={"Who's that Pokémon?"} />
            <section className="app__buttons">
                <ButtonPokedex {...buttonPokedex.main} />
                <ButtonPokedex {...buttonPokedex.secondary} />
            </section>
            <main className="app__main">
                <SelectedPokemonProvider>
                    <div className="app__pokedex" data-hidden={hidden}>
                        <FeaturePokedexMain />
                    </div>
                    <div className="app__pokedex" data-hidden={!hidden}>
                        <FeaturePokedexSecondary />
                    </div>
                </SelectedPokemonProvider>
            </main>
        </>
    );
}

export default App;
