import React, {useState} from 'react';
import './content.css';
import renderImg from '../../img/Rendering.png';
import profilePic from '../../img/+ ALEJANDRO TREJO_03.jpg'
import githubicon from '../../img/icongithub.png';


function ProjectComp({title, urlRepo, urlProject, bckImg, tech}) {
  
  const [project, setProject] = useState(0)

    return (
      <div className="content">
        {/* <img src={renderImg} width='100%'/> */}
        <div className='mainCanvas bckimg' style={{backgroundImage: `url(${bckImg})`}}>
          <div style={{backgroundColor: 'rgba(164, 79, 102, 0.5)', width: '100%'}}>
            <a href={urlRepo}style={{textDecoration: 'none', fontWeight:'bold', textTransform: 'uppercase', color: 'black', fontSize: 'xx-large', paddingLeft: '5px'}}>{title}</a>
            <a href={urlProject}><img src={githubicon} style={{height: '25px', paddingLeft: '10px'}}/></a>
            <p style={{paddingLeft: '5px'}}>{tech}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectComp;