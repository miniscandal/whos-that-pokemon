import '../../styles/molecules/value_attribute.css';
import Paragraph from '../atoms/paragraph';

function ValueAttribute({ attribute, value }) {
    const paragraphs = {
        attribute: { text: attribute, style: 'paragraph--small_bold color--d4dbe2', },
        value: {
            text: value,
            style: `paragraph--medium_bold color--453c41 paragraph--to_upper_case ${ !value && ' paragraph--suspense' }`,
        },
    };

    return (    
        <div className="value_attribute">
            <Paragraph attributes={ paragraphs.attribute } />
            <Paragraph attributes={ paragraphs.value } />
        </div>
    );
}

export default ValueAttribute;