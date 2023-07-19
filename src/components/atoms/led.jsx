import '../../styles/atoms/led.css';

function Led({ attributes }) {
    const { style } = attributes;

    return (
        <div className={ `${ style } led` }>
            <div className="led__div--first"></div>
            <div className="led__div--second"></div>
            <div className="led__div--third"></div>
        </div>
    );
}

export default Led;