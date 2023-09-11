import './App.css';
import Navbar from "./NavBar";
import HomePage from './HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Projcts from './Projects';
import AboutMe from './AboutMe';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Projects" element={<Projcts/>} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
    </>
  );
}

export default App;
