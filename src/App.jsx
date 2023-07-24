import './App.scss';
import React from 'react';
import { Particle } from './components/Particle';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDark = (mode) => {
    console.log('darkMode: ', mode);
    setDarkMode(mode);
  };

  // React.useEffect(() => {
  //   console.log('rendered');
  // }, [darkMode]);

  return (
    <div className={darkMode ? 'page' : 'page light'}>
      <div className='wrap'>
        <div className='particle-container'>
          <Particle darkMode={darkMode} />
        </div>
        <header>
          <h1 className='name'>June DaSilva</h1>
          <p className='title'>Designer & Developer</p>
        </header>
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
