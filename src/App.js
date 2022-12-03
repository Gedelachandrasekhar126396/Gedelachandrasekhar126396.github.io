

import './App.css';
import About from './Components/About/About';
import Intro from './Components/Introsection/Intro';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
// import Slide from './Components/Slide/Slider';

import TechnicalSkills from './Components/TechnicalSkills/TechnicalSkills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      {/* <div className='blur' style={{background:"#C1F5FF",heigth:'11rem',width:'21rem',position:"relative"}} ></div> */}
      <About/>
      <TechnicalSkills/>
      <Slider/>
    </div>
  );
}

export default App;
