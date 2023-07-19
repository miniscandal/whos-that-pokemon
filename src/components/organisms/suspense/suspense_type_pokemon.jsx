import { Suspense, useEffect, } from 'react';
import ValueAttribute from '../../molecules/value_attribute';
import DisplayLcd from '../display_lcd';

function SuspenseTypePokemon({ apiData, states, }) {
    const types = [
        { attribute: 'TYPE 1', value: '????????', },
        { attribute: 'TYPE 2', value: '????????', },
    ];

    return (
        <Suspense fallback={ <Types types={ types } /> }>
            <Load apiData={ apiData } states={ states } />
        </Suspense>
    );
}

function Load({ apiData, states, }) {
    useEffect(() => {
        if (data) {
            setPokemonTypes(data.types);
        }
    }, [states.isNameMatch]);
    
    const { isNameMatch, setPokemonTypes, } = states;

    const { data, error, } = apiData.read();
    if (error) return error.component;

    const types = [
        {
            attribute: 'TYPE 1',
            value: isNameMatch && data.types.one.name,
        },
        {
            attribute: 'TYPE 2',
            value: isNameMatch && (data.types.two.name ?? '????????'),
        },
    ];

    return (
        <Types types={ types } />
    );
}

function Types({ types }) {

    return (
        <div>
            <DisplayLcd>
                <ValueAttribute { ...types[0] } />
            </DisplayLcd>
            <DisplayLcd>
                <ValueAttribute { ...types[1] } />
            </DisplayLcd>
        </div>
    );
}

export default SuspenseTypePokemon;