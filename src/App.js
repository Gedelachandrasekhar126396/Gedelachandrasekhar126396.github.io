
import './App.css';
import Intro from './Components/Introsection/Intro';
import Navbar from './Components/Navbar/Navbar';
import TechnicalSkills from './Components/TechnicalSkills/TechnicalSkills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <TechnicalSkills/>
    </div>
  );
}

export default App;
