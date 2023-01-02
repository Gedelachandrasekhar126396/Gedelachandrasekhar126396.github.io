

import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Introsection/Intro';
// import Navbar from './Components/Navbar/Navbar';
// import Slider from './Components/Slider/Slider';
import { themeContext } from './Context';

import TechnicalSkills from './Components/TechnicalSkills/TechnicalSkills';
import { useContext } from 'react';
import Navbar2 from './Components/Navbar2/Navbar2';
import Tools from './Components/ToolsList/ToolsList';
import ProjectsList from './Components/Projects/ProjectsList';


function App() {
const theme = useContext(themeContext);
const darkMode =theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode? 'black':"",
      color:darkMode?'white':""
    }}  >
      {/* <Navbar/> */}
      <Navbar2/>
      <Intro/>
      {/* <div className='blur' style={{background:"#C1F5FF",heigth:'11rem',width:'21rem',position:"relative"}} ></div> */}
  
      <About/>
      <TechnicalSkills/>
      <Tools/>
      {/* <Slider/> */}
      <ProjectsList/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
