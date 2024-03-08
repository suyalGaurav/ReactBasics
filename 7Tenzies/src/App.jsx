import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import { useState, useEffect } from 'react'

function App() {
  const [totalRolls, setTotalRolls] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [numberArray, setNumberArray] = useState([...Array(10).fill(
    {
      number: 0,
      active: false
    })])

  useEffect(()=> {
    handleRoll()
  }, [])
  
  //Everytime numberArray will change
  useEffect(()=> {
    checkActiveNumbers();
  }, [numberArray])

  function handleRoll() {
    setTotalRolls(prevTotalRolls => prevTotalRolls + 1)
    setNumberArray((numberArray)=> {
      return numberArray.map((item)=> {
         if(!item.active) {
           return { ...item, number: Math.floor(Math.random() * 6) + 1 }
         }
         else {
          return item
         }
      })
    })
  }

  //Checking if all the no are same + active property is true
  function checkActiveNumbers() {
    for(let i = 0; i < numberArray.length; i++) {
      if((i > 0 && numberArray[i].number !== numberArray[i - 1].number) || !numberArray[i].active) {
        break
      }
      else if(i == numberArray.length - 1) {
        setGameWon(true);
      }
    }
  }

  function handleNumber(index) {
    setNumberArray((numberArray)=> {
      return numberArray.map((item , i) => {
        if(i === index) {
          return {...item, active: !item.active}
        }
        return item;
      });
    })
  }

  function playAgain() {
    setGameWon(false)
    setNumberArray((numberArray)=> {
      return numberArray.map(item => ({...item, active: false}))
    });

    setTotalRolls(0)
    handleRoll()
  }

  return (
    <section className='container'>
      <section className='main-section'>
        <Header />
        <Main 
          numberArray = {numberArray}
          handleRoll= {handleRoll}
          handleNumber={handleNumber}
          gameWon={gameWon}
        />
      </section>

      {
          gameWon && 
          <div className="confirmation--screen">
            <p className="confirmation--message">Congratulations! You won in {totalRolls} rolls.</p>
            <button className="confirmation--button" onClick={playAgain}>Play again?</button>
          </div> 
      }
    </section>
  )
}

export default App
