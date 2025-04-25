import "./App.css";
import Footer from "./components/Footer";
import { Formaciones } from "./components/Formaciones";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QueEs } from "./components/QueEs";
import { SobreElProfesional } from "./components/SobreElProfesional";
import { Contacto } from "./components/Contacto"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SobreElProfesional />
      <QueEs />
      <Formaciones />
      <Contacto/>
      <Footer />
    </>
  );
}

export default App;
