
import './styles/App.scss'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'

function App() {


  return (
    <div className="App">      
      <NavBar />
      {/* <Header /> */}
      <AboutMe />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default App
