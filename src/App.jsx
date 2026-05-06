import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h4>ALLAH IS GREATEST IN THE WORLD!</h4>
          <h4>When this project  started on First May-2026.!</h4>
          <h4>Today 6th may-2026 it mean one week time consume to complete this project.</h4>
        </div>
      </section>
    </>
  )
}

export default App
