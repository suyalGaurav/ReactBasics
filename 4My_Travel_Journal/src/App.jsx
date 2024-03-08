
import './App.css'
import Nav from './components/Nav/Nav'
import Card from './components/Card/Card'
import travelData from '../travelData';

function App() {
  const allTravelData = travelData.map((cardData)=> {
    return (
      <Card 
        key = {cardData.id}
        {...cardData}
      />
    )
  })

  return (
    <section className="nav-and-main">
      <Nav />
      <section className="card--list">
        {allTravelData}
      </section>
    </section>
  )
}

export default App
