import '../../styles/atoms/paragraph.css';

function Paragraph({ attributes }) {
    const { text, style, } = attributes;
    
    return (
        <p className={ `${ style } paragraph` }>
            { text }
        </p>
    );
}

export default Paragraph;