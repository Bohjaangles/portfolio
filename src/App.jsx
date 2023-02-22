
import './styles/App.scss'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="body-ody">
        <SideBar />
        <ProjectList />
      </div>
      <Footer />
    </div>
  )
}

export default App
