import '../../styles/templates/deck.css';

function Deck({ style, children }) {

    return (
        <div className={ `${ style } deck` }>
            { children }
        </div>
    );
}

export default Deck;