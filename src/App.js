

import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import Intro from './Components/Introsection/Intro';



import TechnicalSkills from './Components/TechnicalSkills/TechnicalSkills';

import Navbar2 from './Components/Navbar2/Navbar2';
import Tools from './Components/ToolsList/ToolsList';
import ProjectsList from './Components/Projects/ProjectsList';
import GithubStats from './Components/GithubStats/GithubStats';


function App() {

  return (
    <div className="App" style={{backgroundColor:"black",color:"white"}} >
    
      <Navbar2/>
      <Intro/>
     
  
      <About/>
      <TechnicalSkills/>
      <Tools/>
    
      <ProjectsList/>
      <GithubStats/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
// https://icon-icons.com/icon/file-type-node/130301