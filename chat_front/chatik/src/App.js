import logo from './logo.svg';
import './App.css';
import Main from './main';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Entrance from './Entrance';

function App() {
  return (
    <BrowserRouter>
  <Link to='/main'>main</Link>
  <Link to='/CreateRooms'>Entrance</Link>
  <Routes>
    <Route path="Entrance" element={<Entrance/>} />
    <Route path="main" element={<Main />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
