import myphoto from "../../assets/homiee.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import resume from '../../assets/Poonthendral-resume.pdf'
import "./Home.css";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section id="home">
      <div className="introContent">
        <span id="hello">Hello,</span>
        <span id="introText">
          I'm  <span id="introName">Poonthendral</span>
          <br />
          <span id="role">Web developer</span>
        </span>
        <p id="introPara">
        Hi, I'm Poonthendral, a passionate software developer with a knack for creating elegant and efficient web solutions. As a recent graduate in B.E/Mechanical Engineering, I'm eager to apply my skills and knowledge to real-world projects.
        </p>
        <div id="revert">
        <div className="icons">
          <a className="scale" href="https://www.linkedin.com/in/poonthendral-m" target="_blank"><LinkedInIcon/></a>
          <a className="scale" href="https://github.com/poonthendral1475?tab=repositories" target="_blank"><GitHubIcon /></a>
          <a className="scale" href="https://www.instagram.com/mk_k_u_t_t_y/?next=%2F&hl=en" target="_blank"><InstagramIcon/></a>
          <a className="scale"  href=""><FacebookIcon/></a>
        </div>
        <div id="resume_button">
          <button id="res"><a href={resume} download="Poonthendral-resume">Resume<FileDownloadIcon sx={{fontSize:'16px',position:'relative',top:'3px',left:'3px'}} /></a></button>
        </div>
        </div>
      </div>
      <div id="image-content">
       
        <img src={myphoto} alt="lol" id="home-image" />
        
      </div>
    </section>
  );
}
