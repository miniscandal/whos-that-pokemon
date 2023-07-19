import '../../styles/atoms/title.css';

function Title({ text }) {

    return (
        <h1 className="title--h1_letter_pokemon color--cccc00">
            { text }
        </h1>
    );
}

export default Title;