import './About.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import abt_img from '../../assets/about_img.jpg'
import moreinfo from '../../assets/Personal_docs.pdf'

export default function About(){
    return(
        <>
        <section id="about">
        <h1 id='headlinea'>About</h1>
        <div id='about_flex'>
        <div id="image-content-circle">
        <div id="home-image-circle1">
        <img src={abt_img} alt="lol" id="home-image-circle2"/>
        </div>
      </div>
      <div id='about_content'>
        <h1 id='abtm'>About <span id="me_color">Me</span></h1>
        <h2 id='webd'>Web Developer</h2>
        <p id='abtp'>.I'm fresh-faced web developer eager to bring creativity and functionality to the digital world. Proficient in HTML, CSS, and JavaScript. Check out my portfolio to explore projects showcasing my commitment to clean, user-friendly design and efficient coding practices.I don't have any work Experience.I think of Taking efficient effort I shall Learn Everything.I assure to you I asset to this role if I'm choosen to Contribute your team. Let's build the web together!</p>
        <div id='read_info'>
        <button id='read_me'><a href={moreinfo} target='__blank'>more info</a></button>
        </div>
        <div className="icons iconsa">
          <a className="scale" href="https://www.linkedin.com/in/poonthendral-m" target="_blank"><LinkedInIcon/></a>
          <a className="scale" href="https://github.com/poonthendral1475?tab=repositories" target="_blank"><GitHubIcon /></a>
          <a className="scale" href="https://www.instagram.com/mk_k_u_t_t_y/?next=%2F&hl=en" target="_blank"><InstagramIcon/></a>
          <a className="scale"  href=""><FacebookIcon/></a>
        </div>
      </div>
        </div>
        </section>
        </>
    )
}