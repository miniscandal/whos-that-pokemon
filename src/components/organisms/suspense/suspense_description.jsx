import { Suspense, useRef, useEffect } from 'react';
import Paragraph from '../../atoms/paragraph';
import { forwardRef } from 'react';

function sleep() {
    return new Promise(resolve => {
        setTimeout(resolve, 25);
    });
}

const Load = forwardRef(function Load({ apiData, states, }, ref) {
    const { isNameMatch, setJoystickLock, } = states;
    const { data, error, } = apiData.read();

    useEffect(() => {
        ref.current.children[0].textContent = '';
        const callback = async () => {
            for (let letter of data.specieDescription) {
                await sleep();
                if (ref.current === null) return;
                ref.current.children[0].textContent = `${ ref.current.children[0].textContent }${ letter }`;
            }
            setJoystickLock(false);
        };
        if (isNameMatch) {
            setJoystickLock(true);
            callback();
        }
    }, [isNameMatch, data.specieDescription, ref, setJoystickLock]);

    if (error) return error.component;

    const paragraph = {
        text: '',
        style: `font--size_small color--cccc00 paragraph--to_upper_case paragraph--cursor`,
    };

    return (
        <div className='color--cccc00' ref={ ref }>
            <Paragraph attributes={ paragraph } />
        </div>
    );
});

function  SuspenseDescription({ apiData, states, }) {
    const ref = useRef(null);
    const paragraph = {
        text: '????????',
        style: 'font--size_medium color--cccc00',
    };

    return (
        <Suspense fallback={ <Paragraph attributes={ paragraph } /> }>
            <Load ref={ ref } apiData={ apiData } states={ states } />
        </Suspense>
    );
}

export default SuspenseDescription;