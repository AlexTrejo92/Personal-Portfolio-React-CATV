import React from "react";
import './footer.css';
import emailicon from '../../img/iconemail.png';
import githubicon from '../../img/icongithub.png';
import linkedinIcon from '../../img/iconlinkedin.png';

function Footer() {
    return (
    <div className="footer">
    <a href='mailto:arq.alextrejo@gmail.com'><img src={emailicon}/></a>
    <a href='https://github.com/AlexTrejo92'><img src={githubicon}/></a>
    <a href='https://www.linkedin.com/in/alextrejovalenciapm/'><img src={linkedinIcon}/></a>
    </div>
    );
}
export default Footer;