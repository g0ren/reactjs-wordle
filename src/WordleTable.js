import WordleRow from "./WordleRow";
import "./WordleTable.css"
import "./WordleCell.css"

let gameOver = x => {}

/**
 *
 * @param words {Array}
 * @param currentWord
 * @param attempts
 * @returns {JSX.Element}
 * @constructor
 */
function WordleTable({words, currentWord, attempts, gameOverHandler}){
    let word = ""
    gameOver = gameOverHandler
    for (let w of words){
        if(w !== ""){
            word = w
        }
    }
    if(word === currentWord){
        alert("Вы угадали слово " + currentWord + " за " + attempts + " попыток.")
        gameOver()
    }
    if(attempts >= 6){
        alert("Вы не угадали слово " + currentWord)
        gameOver()
    }
    return(
        <div className="WordleTable">
            <table>
                <WordleRow word={words[0] ?? ""} currentWord={currentWord}/>
                <WordleRow word={words[1] ?? ""} currentWord={currentWord}/>
                <WordleRow word={words[2] ?? ""} currentWord={currentWord}/>
                <WordleRow word={words[3] ?? ""} currentWord={currentWord}/>
                <WordleRow word={words[4] ?? ""} currentWord={currentWord}/>
                <WordleRow word={words[5] ?? ""} currentWord={currentWord}/>
            </table>
        </div>
    )
}

export default WordleTable