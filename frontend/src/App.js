import './App.css';

import Splashscreen from './components/Splashscreen/Splashscreen.js';
import HeroesList from './components/HeroesList/HeroesList.js';
import HeroDetail from './components/HeroDetail/HeroDetail.js';
import { useState, setState } from 'react';

function App() {

  const [display, setDisplay] = useState(true);
  const [heroId, setHeroId] = useState(1234);

  function handleClick(e)
  {
    setDisplay(false);
    setHeroId(e.target.dataset.id);
  }

  function handleClose(e)
  {
    setDisplay(true);
    setHeroId(0);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <Splashscreen display={true}></Splashscreen>
          <div data-aos="fade-up" data-aos-delay="1200">
            <HeroesList show={display} onclick={handleClick}></HeroesList>
            <HeroDetail show={display} onclick={handleClose} heroId={heroId}></HeroDetail>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
