import React from 'react';
import ProjectComp from '../project/content';
import project1img from '../../img/p1.jpg';
import project2img from '../../img/p2.jpg';


const ProjectData = [
  {
    title: 'Renovations',
    urlRepo: 'http://',
    urlProject: 'http://',
    bckImg: project1img
  },
  {
    title: 'Elena 147',
    urlRepo: 'http://',
    urlProject: 'http://',
    bckImg: project2img
  },
  {
    title: 'Moodify',
    urlRepo: 'http://',
    urlProject: 'http://',
    bckImg: project2img
  },
  {
    title: 'Opticrew',
    urlRepo: 'http://',
    urlProject: 'http://',
    bckImg: project2img
  },
]

export default function Projects() {
  return (
    <div>
      <div className='mainProjectStyle'>
      {
        ProjectData.map((project)=>{
          return (<ProjectComp title={project.title} urlRepo={project.urlRepo} urlProject={project.urlProject} bckImg={project.bckImg} key={project.id}/>)
        })
      }
    </div>
    </div>

  );
}
