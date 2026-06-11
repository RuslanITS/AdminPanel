import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Admin from "./containers/Admin/Admin.tsx";
import Page from "./containers/Page/Page.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import './App.css'

const App = () => {

  return (
    <div className="app">
      <Header />

      <main className="content">
        <Container className="py-4">
          <Routes>
            <Route path="/pages/:pageName" element={<Page />} />
            <Route path="/pages/admin" element={<Admin />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  )
};

export default App
