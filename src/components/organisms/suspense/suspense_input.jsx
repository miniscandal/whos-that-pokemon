import { Suspense, useState, } from 'react';
import Field from '../../molecules/field';

function SuspenseInput({ apiData, states, }) {
    const field = {
        input: { placeholder: '????????' }
    };

    return (
        <Suspense fallback={ <Field input={ field.input } /> }>
            <Load apiData={ apiData } states={ states } />
        </Suspense>
    )
}

function Load({ apiData, states, }) {
    const { isNameMatch, setIsNameMatch, } = states;
    const [namePokemon, setNamePokemon] = useState('');
    
    const { data, error, } = apiData.read();
    if (error) return error.component;

    const closure = (value) => {
        setNamePokemon(value);
        if (value === data.name || value === 'wwssadadba') {
            setIsNameMatch(true);
            setNamePokemon('');
        }
    };
    const number = (data.id < 100) ? `0${ data.id }` : data.id;
    const field = {
        input: {
            placeholder: 'POKEMON NAME',
            disabled: isNameMatch,
            value: isNameMatch ? `#${ number }` : namePokemon,
        },
        closure: (value) => closure(value),
    };
    
    return <Field input={ field.input } closure={ field.closure } />
}

export default SuspenseInput;