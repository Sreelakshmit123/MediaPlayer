import './App.css'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/history' element={<WatchHistory/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
