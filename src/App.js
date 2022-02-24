// import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeroSection />
      </header>
    </div>
  );
}

export default App;
