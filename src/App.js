import './App.css';
import Main from './components/Main/main';
import About from './components/About/about';
import Vans from './components/Vans/vans';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
