import { Suspense } from 'react';
import pokeball from '../../../assets/img/pokeball.png';
import Image from '../../atoms/Image';
import { useFetchBlob } from '../../../customhooks/use_fetch_data';
import { useResourcePokemonImage } from '../../../services/api_rest_pokemon_image';

function SuspenseImage({ apiData ,states }) {
    const image = {
        src: pokeball, alt: 'Random Pokebola',
    };
    const { apiBlob } = useFetchBlob(image.src);

    return (
        <Suspense fallback={ <Image apiBlob={ apiBlob } attributes={ image } /> }>
            <Load apiData={ apiData } states={ states } />
        </Suspense>
    );
}

function Load({ apiData, states, }) {
    const { numberPokemon, isNameMatch, } = states;
    const { apiBlob } = useResourcePokemonImage(numberPokemon);
    const { data, error, } = apiData.read();
    if (error) return error.component;

    const image = {
        alt: `${ data.name } picture`,
        style: isNameMatch || 'image--blur',
    };

    return (
        <Image apiBlob={ apiBlob } attributes={ image } />
    );
}

export default SuspenseImage;