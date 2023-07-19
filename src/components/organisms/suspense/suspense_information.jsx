import { Suspense } from 'react';
import Information from '../../molecules/information';

function Load({ apiData, states, }) {
    const { isNameMatch } = states;
    const { data, error, } = apiData.read();
    if (error) return error.component;

    const information = {
        name: isNameMatch && data.name,
        baseExperience: isNameMatch ? data.base_experience : '',
        style: isNameMatch || 'paragraph--suspense',
    };
    
    return <Information attributes={ information } />
}

function SuspenseInformation({ apiData, states }) {
    const information = {
        name: '????????',
        baseExperience: '????????',
    };

    return (
        <Suspense fallback={ <Information attributes={ information } /> }>
            <Load apiData={ apiData } states={ states } />
        </Suspense>
    );
}

export default SuspenseInformation;