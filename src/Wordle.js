import WordleTable from "./WordleTable";
import React from "react";
import Header from "./Header";
import KeyboardInput from "./KeyboardInput";


import { useState } from "react";
import WordList from "./WordList";

function Wordle()
{
    const wordList = WordList();
    const [currentWord, setCurrentWord] = useState(wordList[Math.floor(Math.random() * wordList.length)])
    console.log(currentWord);
    const [words, setWords] = useState(["", "", "", "", "", ""])
    const [attempts, setAttempts] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    function NewGame(){
        setWords(["", "", "", "", "", ""])
        setCurrentWord(wordList[Math.floor(Math.random() * wordList.length)])
        setAttempts(0)
        setGameOver(false)
    }

    if(gameOver){
        return[
            <Header />,
            <div>
                Игра окончена. Вы можете начать новую игру.
            </div>,
            <button onClick={NewGame}>Новая игра</button>
        ]
    }else{
        return[
            <Header />,
            <div>
                <WordleTable
                    words={words}
                    currentWord = {currentWord}
                    attempts = {attempts}
                    gameOverHandler= {
                        () => {
                            setGameOver(true)
                        }
                    }
                />
            </div>,
            <KeyboardInput handler= {x => {
                let words_temp = [];
                for (let i= 0; i < 6; i++){
                    if(words[i] !== ""){
                        words_temp.push(words[i]);
                    }else{
                        words_temp.push(x);
                        break;
                    }
                }
                while(words_temp.length < 6){
                    words_temp.push("")
                }
                setWords(words_temp)
                setAttempts(attempts + 1)
            }
            }
            />,
            <button onClick={NewGame}>Новая игра</button>
        ]
    }

}

        export default Wordle
