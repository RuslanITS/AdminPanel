import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Divisions from "./containers/Divisions/Divisions.tsx";
import Home from "./containers/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import './App.css'

const App = () => {

  return (
    <div className="app">
      <Header />

      <main className="content">
        <Container className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/divisions" element={<Divisions />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  )
};

export default App
