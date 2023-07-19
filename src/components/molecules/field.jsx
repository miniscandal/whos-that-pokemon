import '../../styles/molecules/field.css';

function Field({ input, closure, }) {
    const handleChange = (event) => {
        const value = event.target.value;
        closure(value);
    };
    const attributes = {
        type: 'text',
        autoComplete: 'off',
        placeholder: input.placeholder,
        disabled: input.disabled,
        value: input.value,
        className: 'input color--cccc00 font--family--orbitron_variable',
        onChange: handleChange,
    };

    return (
        <div className='field'>
            <input { ...attributes } />
        </div>
    );
}

export default Field;