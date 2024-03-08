import './App.css';
import UserIntro from './components/UserIntro/UserIntro'
import UserDetails from './components/UserDetails/UserDetails'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="main--container">
      <div className="container">
        <UserIntro />
        <UserDetails />
        <Footer />
      </div>
    </div>
  )
}

export default App
