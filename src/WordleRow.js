import WordleCell from "./WordleCell";

function color(letter, currentWord, position){
    if(letter === '' || !letter){
        return "white"
    }else if(currentWord[position] === letter){
        return "green"
    }else if(currentWord.includes(letter)){
        return "yellow"
    }else{
        return "grey"
    }
}


/**
 *
 * @param word {string}
 * @param currentWord
 * @returns {JSX.Element}
 * @constructor
 */
function WordleRow({word, currentWord}){
    return(
        <tr>
            <WordleCell letter={word[0] ?? ''} color={color(word[0], currentWord, 0)}/>
            <WordleCell letter={word[1] ?? ''} color={color(word[1], currentWord, 1)}/>
            <WordleCell letter={word[2] ?? ''} color={color(word[2], currentWord, 2)}/>
            <WordleCell letter={word[3] ?? ''} color={color(word[3], currentWord, 3)}/>
            <WordleCell letter={word[4] ?? ''} color={color(word[4], currentWord, 4)}/>
        </tr>
    );
}

export default WordleRow