import "./App.css";
import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router";
import ProyectsDetailsPage from "./components/pages/ProyectsDetailsPage"
import ContactPage from "./components/pages/ContactPage"
import Navigation from "./components/Navigation";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/proyects' element={<ProyectsDetailsPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App; 