import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Photos from './components/Photos'
import Skills from './components/Skills'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotiveScroll =  new LocomotiveScroll();

  return (
    <>
    <div className='bg-zinc-900 text-white'>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Photos/>
      <Contact/>
    </div>
    </>
  )
}

export default App
