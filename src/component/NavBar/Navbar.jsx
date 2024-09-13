import {Link} from 'react-scroll'
import logo from '../../assets/portfolio-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import menu from '../../assets/icons8-hamburger-menu-94.png'
import './Nabbar.css'
import { useState } from 'react';
 <nav id="nav">
            <section id="nav-left">
                <img height="30px" src={logo} alt='logo'/>
                <span id="dot"> .</span>
            </section>
            <section id="nav-right">
               <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='lin'>Home</Link>
               <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='lin'>Skill</Link>
               <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='lin'>Project</Link>
               <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='lin'>About</Link>
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='lin'>Contact</Link>
            </section>
        </nav>
export default function Navbar()
{
    const [showMenu,setShowmenu]=useState(false)
    function HandleClick()
    {
        setShowmenu((p)=>!p)
    }
    return(
        <>
        <nav id="nav">
            <section id="nav-left">
                <img height="30px" src={logo} alt='logo'/>
                <span id="dot"> .</span>
            </section>
            <section id="nav-right">
               <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='lin'>Home</Link>
               <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='lin'>Skill</Link>
               <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='lin'>Project</Link>
               <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='lin'>About</Link>
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='lin'>Contact</Link>
            </section>
            <section id="mobile">
                <img id='img-trans'  src={menu} alt="menu-option" height='40rem' onClick={HandleClick}/>
                <section id="mobile-nav-right" className={showMenu ? 'open' : 'close'}>
               <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='mob-lin'>Home</Link>
               <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='mob-lin'>Skill</Link>
               <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className='mob-lin'>Project</Link>
               <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500} className='mob-lin'>About</Link>
               <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='mob-lin'>Contact</Link>
            </section>
            </section>
        </nav>
        </>
    )
}
