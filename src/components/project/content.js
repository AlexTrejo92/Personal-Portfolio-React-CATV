import React, {useState} from 'react';
import './content.css';
import renderImg from '../../img/Rendering.png';
import profilePic from '../../img/+ ALEJANDRO TREJO_03.jpg'


function ProjectComp({title, urlRepo, urlProject, bckImg}) {
  
  const [project, setProject] = useState(0)

    return (
      <div className="content">
        {/* <img src={renderImg} width='100%'/> */}
        <div className='mainCanvas bckimg' style={{backgroundImage: `url(${bckImg})`}}>
        <h1>{title}</h1>
        <a>{urlRepo}</a>
        <a>{urlProject}</a>
        <h1>Another one</h1>
        <a>text</a>
        </div>
      </div>
    );
  }
  
  export default ProjectComp;