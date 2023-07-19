import '../../styles/molecules/loading.css';
import Paragraph from '../atoms/paragraph';

function Loading() {
    const paragraph = {
        name: {
            style: 'paragraph--small_bold color--00cd00',
        },
        specie: {
            style: 'font--size_small color--d4dbe2',
        },
    };

    return (
        <div className="loading">
            <Paragraph { ...paragraph.name } />
            <Paragraph { ...paragraph.specie } />
        </div>
    );
}

export default Loading;