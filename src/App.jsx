import "./App.css";
import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/pepe' element={<HomePage />} />
        {/* <Route path='/proyects' element={<ProyectsDetailsPage />} /> */}
      </Routes>
    </>




  )
}

export default App;