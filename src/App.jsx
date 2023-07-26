import './App.scss';
import React from 'react';
import { Particle } from './components/Particle';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Info } from './pages/info/Info';
import { Navigation } from './components/Navigation';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDark = (mode) => {
    setDarkMode(mode);
  };

  return (
    <div className={darkMode ? 'page' : 'page light'}>
      <div className='wrap'>
        <div className='particle-container'>
          <Particle darkMode={darkMode} />
        </div>
        <header>
          <h1 className='name'>June DaSilva</h1>
          <p className='title'>Fullstack Developer</p>
          <Navigation />
        </header>
        <section className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Home />} />
            <Route path='/info' element={<Info darkMode={darkMode} />} />
            <Route path='/contact' element={<Home />} />
          </Routes>
        </section>
      </div>
      <section>
        <div className='modes'>
          <p onClick={() => toggleDark(false)}>light</p>
          <p onClick={() => toggleDark(true)}>dark</p>
        </div>
      </section>
    </div>
  );
}

export default App;
