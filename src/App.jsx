import './App.css'
import { Formaciones } from './components/Formaciones'
import { Header } from './components/Header'
import { Hero } from "./components/Hero"
import { QueEs } from './components/QueEs'
import {SobreElProfesional} from './components/SobreElProfesional'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <QueEs/>
      <SobreElProfesional/>
      <Formaciones/>
    </>
  )
}

export default App
