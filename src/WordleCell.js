import "./WordleTable.css"

/**
 *
 * @param letter {string|string}
 * @param color
 * @returns {JSX.Element}
 * @constructor
 */
function WordleCell({letter, color}){
    return(
        <td className={color}>
            {letter}
        </td>
    )
}

export default WordleCell