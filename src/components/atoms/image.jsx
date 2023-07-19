import '../../styles/atoms/image.css';
import '../../styles/atoms/icon.css';
import { Suspense } from 'react';

function Image({ apiBlob, attributes, }) {
    
    return (
        <Suspense fallback={ <></> }>
            <Load apiBlob={ apiBlob } attributes={ attributes } />
        </Suspense>
    )
};

function Load({ apiBlob, attributes, }) {
    const { data, error, } = apiBlob.read();
    if (error) return error.component;

    attributes.src = URL.createObjectURL(data.blob);
    
    const { src, alt, style, } = attributes;

    return (
        <div className={ `${ style } image` }>
            <img src={ src } alt={ alt } fetchpriority="high"></img>
        </div>
    );
}

export default Image;