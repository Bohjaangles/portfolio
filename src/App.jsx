
import './styles/App.scss'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default App
