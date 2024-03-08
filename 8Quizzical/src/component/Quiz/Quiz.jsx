import React, { useEffect, useState } from "react";
import './quiz.css'

function Quiz({ quiz, answers, handleAnswer, result }) {

    const [answerOption, setAnswerOption] = useState([0, 0, 0, 0])

    //Placing the correct answer at a random option
    function getAnswers() {
        const randomIndex = Math.floor(Math.random() * 4)
        setAnswerOption(answerOption => {
            var incorrectIndex = -1;
            return answerOption.map((answer, index) => {
                if(index === randomIndex) {
                    return quiz.correctAnswer
                } else {
                    incorrectIndex++
                    return quiz.incorrectAnswers[incorrectIndex]
                }
            })
        })
    }

    useEffect(()=> {
        getAnswers()
    }, [])

    const options = answerOption.map((answer, index) => (
        <label className={
            `answer--label 
            ${result && !answers[quiz.id] && "unattempted--question"}
            ${(answer === answers[quiz.id]?.[1]) && "user--answer"} 
            ${result && (answer === answers[quiz.id]?.[1]) && (answers[quiz.id]?.[1] !== quiz.correctAnswer) && "incorrect--answer"} 
            ${result && (answer === quiz.correctAnswer) && (answers[quiz.id]) && "correct--answer"}`
            } 
            key={index} 
            htmlFor={answer}
        >
            <span className="answer">{answer}</span>
            <input 
                type="radio" 
                id={answer} 
                name={quiz.id} 
                value={answer}
                disabled={result ? true : false}
                onClick={()=>handleAnswer(answer, quiz.correctAnswer, quiz.id)}
                className="answer--input"
            />
        </label>                                           
    )) 


    return (
        <div className= "quiz">
            <p className="question">{quiz.question.text}</p>
            <div className="answers">
                {options}
            </div>
        </div>
    )
}

export default Quiz






