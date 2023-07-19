import PokemonTypeLed from '../molecules/pokemon_type_led';
import { svgPokemonTypes } from '../../services/api_rest_pokemon_types_svg';

function AllTypesPokemon({ states }) {
    const { pokemonTypes, isNameMatch, } = states;

    const elements = svgPokemonTypes.map(type => {
        const isTypeMatchOne = pokemonTypes.one.name === type.name;
        const isTypeMatchTwo = pokemonTypes.two.name === type.name;
        type.style = (isTypeMatchOne || isTypeMatchTwo) && isNameMatch
            ? 'pokemon_type_led--opacity_active'
            : 'pokemon_type_led--opacity';

        return (
            <PokemonTypeLed
                key={ type.name }
                isNameMatch={ isNameMatch }
                pokemonTypes={ pokemonTypes }
                type={ type }
            />
        );
    });

    return elements;
}

export default AllTypesPokemon;