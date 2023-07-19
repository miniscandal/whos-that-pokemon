import '../../styles/organisms/pokedex.css';
import { useState } from 'react';
import SelectDeckButton from '../molecules/select_deck_button';
import LowerDeck from './lower_deck';
import TopDeck from './top_deck';

function Pokedex() {
    const [hideDeck, setHideDeck] = useState(false);
    const [isNameMatch, setIsNameMatch] = useState(false);
    const [numberPokemon, setNumberPokemon] = useState(25);
    const [joystickLock, setJoystickLock] = useState(false);

    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON') return;
        if(event.target.dataset.deck === 'A') setHideDeck(false);
        if(event.target.dataset.deck === 'B') setHideDeck(true);
    };
        
    const selectDeckButtons = {
        lower: { text: 'A' },
        top: { text: 'B' },
    };
    const lowerDeck = {
        isNameMatch, setIsNameMatch, setNumberPokemon, numberPokemon,
        joystickLock, setJoystickLock,
    };
    const topDeck = {
        isNameMatch, numberPokemon, joystickLock, setJoystickLock,
    };
    const style = hideDeck ? 'lower_deck--hide' : 'top_deck--hide';

    return (
        <div className="pokedex">
            <div className="pokedex__div--select" onClick={ handleClick }>
                <SelectDeckButton { ...selectDeckButtons.lower } />
                <SelectDeckButton { ...selectDeckButtons.top } />
            </div>
            <div className={ `${ style } pokedex__div--deck` }>
                <LowerDeck states={ lowerDeck } />
                <TopDeck states={ topDeck } />
            </div>
        </div>
    );
}

export default Pokedex;