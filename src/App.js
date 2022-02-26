// import logo from './logo.svg';
import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';
import ReactPortal from './components/ReactPortal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <HeroSection />

        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <ReactPortal />
        <Footer />
      </header>
    </div>
  );
}

export default App;
