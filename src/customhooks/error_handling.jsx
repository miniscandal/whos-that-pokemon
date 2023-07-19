import '../styles/customhooks/error_handling.css';
import Paragraph from '../components/atoms/paragraph';

function ErrorMessage({ text }) {
    const paragraph = {
        text,
        style: 'paragraph--medium_bold color--00b300',
    };

    return (
        <div className="error_handling">
            <Paragraph attributes={ paragraph } />
        </div>
    );
}

function errorHandling(read) {
    const { data, status, } = read();
    if(status === 404) {
        return {
            error: {
                component: <ErrorMessage text="Not Found" />
            }
        }
    }
    if(status instanceof Error) {
        return {
            error: {
                component: <ErrorMessage text="Faile To Fetch" />
            }
        }
    };

    return { data };   
}

export { errorHandling };