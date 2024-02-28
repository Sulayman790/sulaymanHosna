import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import LookingFor from './components/LookingFor';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Experiences />
        <Projects />
        <LookingFor />
      </main>
    </div>
  );
}

export default App
