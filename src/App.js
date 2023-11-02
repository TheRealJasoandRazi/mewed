import './App.css';
import Navbar from "./NavBar";
import HomePage from './HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Projcts from './Projects';
import AboutMe from './AboutMe';
import MazeGame from './MazeGame';
import MySkills from './MySkills'
import DevOps from './DevOps';
import Mock from './MockTradingPlatform';
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Projects" element={<Projcts/>} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/MazeGame" element={<MazeGame/>} />
          <Route path="/MySkills" element={<MySkills/>} />
          <Route path="/DevOps" element={<DevOps/>} />
          <Route path="/MockTradingPlatform" element={<Mock/>} />
        </Routes>
    </>
  );
}

export default App;
