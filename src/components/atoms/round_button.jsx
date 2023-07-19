import '../../styles/atoms/round_button.css';

function RoundButton({ handleClick, style, }) {

    return (
        <button className={ `${ style } round_button` } onClick={ handleClick }>
            <div></div>
        </button>
    );
}

export default RoundButton;