import { Heading } from '@chakra-ui/react'
import React from 'react'
import  "./GithubStats.css";
import GitHubCalendar from 'react-github-calendar';

const GithubStats = () => {
  return (
    <div id="stats" >
           <Heading style={{fontSize:"42px",textAlign:"center",margin:"30px 0px"}} as='h1' size='2xl' noOfLines={1}>
     GitHub Stats
  </Heading> 
  <div style={{display:"flex",justifyContent:"center",margin:"30px 0px"}}>
   <GitHubCalendar style={{width:"90%"}} username="gedelachandrasekhar126396" />
   </div>
    <div id="statImages"  >
    <img align="center"  src="https://github-readme-stats.vercel.app/api?username=Gedelachandrasekhar126396&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=radical" alt="m-sehrawat" height="139" /> <br/>
    <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gedelachandrasekhar126396&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=radical" alt="m-sehrawat" height="139" />
    </div>

  
    </div>
  )
}

export default GithubStats