import '../../styles/molecules/pokemon_type_led.css';
import { useResourcePokemonTypesSvg } from '../../services/api_rest_pokemon_types_svg';
import Image from '../atoms/Image';
import Led from '../atoms/led';

function PokemonTypeLed({ type }) {
    const image = {
        src: type.svg,
        alt: 'Pokemon type',
        style: `icon ${ type.name }`,
    };
    const led = {
        style: 'rectangular_led led--white'
    };
    const { apiBlob } = useResourcePokemonTypesSvg(image.src);

    return (
        <div className="pokemon_type_led color--f2f2f2">
            <Image apiBlob={ apiBlob } attributes={ image } />
            <div className={ type.style }>
                <Led attributes={ led } />
            </div>
        </div>
    );
};

export default PokemonTypeLed;