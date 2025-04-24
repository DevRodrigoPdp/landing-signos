import './App.css'
import { Formaciones } from './components/Formaciones'
import { Header } from './components/Header'
import { Hero } from "./components/Hero"
import { QueEs } from './components/QueEs'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <QueEs/>
      <Formaciones/>
    </>
  )
}

export default App
