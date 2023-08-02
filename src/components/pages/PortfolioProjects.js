import React from 'react';
import ProjectComp from '../project/content';
import project1img from '../../img/p1.jpg';
import project2img from '../../img/p2.jpg';
import project3img from '../../img/p3.jpg';
import project4img from '../../img/p4.jpg';
import project5img from '../../img/p6.jpg';
import project6img from '../../img/p7.jpg';
import githubicon from '../../img/icongithub.png';


const ProjectData = [
  {
    title: 'Note Taker App',
    urlRepo: 'https://github.com/AlexTrejo92/11-NoteTackerApp',
    urlProject: 'https://safe-cove-04920.herokuapp.com/',
    tech: 'HTML,CSS,JS,EXPRESS',
    bckImg: project3img
  },
  {
    title: 'Static Portfolio',
    urlRepo: 'https://github.com/AlexTrejo92/Personal-Portfolio-Challenge',
    urlProject: 'https://alextrejo92.github.io/Personal-Portfolio-Challenge/',
    tech: 'HTML,CSS,JS',
    bckImg: project4img
  },
  {
    title: 'Moodify',
    urlRepo: 'https://github.com/AlexTrejo92/Project-Moodify',
    urlProject: 'https://alextrejo92.github.io/Project-Moodify/',
    tech: 'HTML,CSS,JS',
    bckImg: project5img
  },
  {
    title: 'Opticrew',
    urlRepo: 'https://github.com/jony0418/OptiCrew',
    urlProject: 'https://opticrew-fe0f9781ad3c.herokuapp.com/',
    tech: 'HTML,CSS,JS,NODE,EXPRESS',
    bckImg: project6img
  },
  {
    title: 'Terrace R',
    urlRepo: 'https://www.linkedin.com/in/alextrejovalenciapm/',
    urlProject: 'https://www.linkedin.com/in/alextrejovalenciapm/',
    tech: 'Architecture',
    bckImg: project1img
  },
  {
    title: 'Elena 147',
    urlRepo: 'https://www.linkedin.com/in/alextrejovalenciapm/',
    urlProject: 'https://www.linkedin.com/in/alextrejovalenciapm/',
    tech: 'Architecture',
    bckImg: project2img
  },
]

export default function Projects() {
  return (
    <div>
      <div className='mainProjectStyle'>
      {
        ProjectData.map((project)=>{
          return (<ProjectComp title={project.title} urlRepo={project.urlRepo} urlProject={project.urlProject} bckImg={project.bckImg} key={project.title} tech={project.tech}/>)
        })
      }
    </div>
    </div>

  );
}
