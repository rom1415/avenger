import './App.css';

import Splashscreen from './components/Splashscreen/Splashscreen';
import Hero from './components/Hero/Hero';
import HeroesList from './components/HeroesList/HeroesList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <Splashscreen display={true}></Splashscreen>
          <Hero></Hero>
          <HeroesList></HeroesList>
        </div>
      </header>
    </div>
  );
}

export default App;
