import '../../styles/molecules/select_deck_button.css';
import Led from '../atoms/led';
import Title from '../atoms/title';

function SelectDeckButton({ text }) {
    const led = {
        style: 'round_led round_led--small led--yellow'
    };
    const button = {
        'data-deck': text,
    };

    return (
        <button className='select_deck_button color--e50000' { ...button }>
            <Led attributes={ led } />
            <Title text={ text } />
        </button>
    );
}

export default SelectDeckButton;