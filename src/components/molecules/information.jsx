import '../../styles/organisms/information.css';
import Paragraph from '../atoms/paragraph';

function Information({ attributes }) {
    const {  name, baseExperience, style, } = attributes;
    const paragraph = {
        name: {
            text: name,
            style: `${ style } paragraph--small_bold color--00cd00`,
        },
        baseExperience: {
            text: `BE: ${ baseExperience ?? '' }`,
            style: `${ style } font--size_small color--d4dbe2`,
        },
    };

    return (
        <div className="information">
            <Paragraph attributes={ paragraph.name } />
            <Paragraph attributes={ paragraph.baseExperience } />
        </div>
    );
}

export default Information;