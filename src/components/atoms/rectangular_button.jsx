import '../../styles/atoms/rectangular_button.css';
import Paragraph from './paragraph';

function RectangularButton({ attributes, handleClick, }) {
    const style = 'font--family--orbitron_variable font--size_small color--ff0000';
    
    return (
        <div className={ `${ style } rectangular_button` } data-parent={ attributes.text }>
            <button className="font--bold color--453c41" title={ `Action ${ attributes.text }.` } onClick={ handleClick }>
                { attributes.symbol }
            </button>
        </div>
    );
}

export default RectangularButton;