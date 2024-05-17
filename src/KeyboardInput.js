import WordList from "./WordList";

let word = "";
let onWordEntered = x => {}
let allWords = WordList();

/**
 * @param e {ChangeEvent<HTMLInputElement>}
 * @function
 */
function OnInputChanged(e){
    word = e.target.value
}

/**
 *
 * @param e {KeyboardEvent<HTMLInputElement>}
 * @function
 */
function OnKeyDown(e) {
    if (e.key === "Enter") {
        if (word.length !== 5){
            alert("Длина слова должна быть 5 символов!")
        }
        else if (!allWords.includes(word)){
            alert("Нет такого слова!")
        }
        else {
            onWordEntered(word)
            document.getElementById("wordField").value = ""
        }
    }
}

/**
 *
 * @param handler {function(word: string)}
 * @returns {JSX.Element}
 * @constructor
 */

function KeyboardInput({handler}){
    onWordEntered = handler
    return(
        <div>
            <span>Введите слово</span>
            <input type="text" id="wordField" onChange={OnInputChanged} onKeyDown={OnKeyDown}/>
        </div>
    )
}

export default KeyboardInput