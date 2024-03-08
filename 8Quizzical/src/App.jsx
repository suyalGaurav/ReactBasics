import { useEffect, useState } from 'react'
import './App.css'
import Quiz from './component/Quiz/Quiz'
import SearchForm from './component/SearchForm/SearchForm'
import localQuizData from './quizData'

function App() {
  const [quizzes, setQuizzes] = useState(localQuizData.queAns) //Initializing with a local set of quiz in case there's an issue getting data using the api

  const [answers, setAnswers] = useState({}) //Keeping track of user-choice and whether it is correct or not
                                             //{quizId: [boolean, user-choice]}
  
  const [correctAnswer, setCorrectAnswer] = useState(0) //Count correct answers by user

  //To check whether the form is submitted or not and changing things based on it
  const [result, setResult ] = useState("") //Will show the result once the form is submitted

  const [form, setForm ] = useState({category: "all",
                              difficulty: "all"})

  function fetchData() {
    const category = form.category
    const difficulty = (form.difficulty === "all" ? "easy,medium,hard" : form.difficulty)
    console.log(category)

    const limit = 5
    var getQuiz = `https://the-trivia-api.com/v2/questions?&limit=${limit}&difficulties=${difficulty}&`
    
    if(category === "india") {    //for india tags will be used instead
      getQuiz += `tags=${category}`
    } else if(category !== "all") { //Ignoring category in case it is selected "all" 
      getQuiz += `categories=${category}`
    }
    
    fetch(getQuiz)
    .then(res => {
      return res.json()
    })
    .then(quizData => {
      if(quizData && quizData?.length === 5) {
        setQuizzes(quizData)
      } else {
        setQuizzes(localQuizData.queAns)
      }
    })
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  function checkCorrectAnswer(userAns, correctAns, quizId) {
    //Will run when quizID exists, previous answer was false, and current answer is right.
    if(answers?.[quizId] && answers?.[quizId]?.[0] === false && userAns === correctAns) {
      setCorrectAnswer(prevCorrect => prevCorrect + 1)

    //will run when quizId exists, prev ans was true, and current is false, so subtracting by 1.
    } else if(answers?.[quizId] && answers?.[quizId]?.[0] === true && userAns !== correctAns) {
      setCorrectAnswer(prevCorrect => prevCorrect - 1)

    } else if(!answers?.[quizId]){  //If quizId doesn't exists
      setCorrectAnswer(prevCorrect => prevCorrect + (userAns === correctAns))
    }
  }

  function handleAnswer(userAnswer, correctAnswer, quizId) {
    checkCorrectAnswer(userAnswer, correctAnswer, quizId)
    setAnswers(prevAnswers => (
      {...prevAnswers , [quizId]: [correctAnswer === userAnswer, userAnswer]}
    ))
  }

  function handleSubmit() {
    const resultMessage = (correctAnswer === quiz.length) ? "Congratulations!" : ""
    setResult(`${resultMessage} You scored ${correctAnswer}/${quizzes.length}`)
  }

  function resetQuiz() {
    setAnswers({})
    setCorrectAnswer(0);
    setResult("")
    fetchData()
  }

  function search(event) {
    event.preventDefault();
    fetchData()
  }

  function handleForm(event) {
    const {name, value } = event.target;
    setForm(prevForm => {
      return {...prevForm, [name]: value}
    })
  }

  const quiz = quizzes.map((quiz) => {
    return <Quiz 
              key={quiz.id}
              quiz= {quiz}
              answers = {answers}
              result = {result}
              handleAnswer={handleAnswer}
           />
  })

  return (
    <section className='container'>
      <SearchForm handleForm={handleForm} search = {search} result = {result} form={form}/>
      <div style={result ? {pointerEvents: 'none'} : {}} className='quizzes'>
        {quiz}
      </div>
      <div className='result-and-submit'>
        <p className='score'>{result}</p>
        {result ? <button onClick={resetQuiz} className='play--again'>Play again</button>
                : <button onClick={handleSubmit} className='submit'>Submit</button>}
      </div>
    </section>
  )
}

export default App
