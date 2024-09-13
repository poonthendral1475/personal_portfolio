import './Project.css'
import project1 from '../../assets/tictactoe.png'
import project2 from '../../assets/quize.jpg'
import project3 from '../../assets/agecalc.jpg'
import project4 from '../../assets/food.avif'
import project5 from '../../assets/cart.jpg'
import project6 from '../../assets/portimg2.jpg'
export default function Project(){
    return(
        <>
        <section id="project">
        <h1 id='headlinep'>Project</h1>
        <div id="project_box1">
            <div>
            <div className='rel'>
                <img className='sizing mediaSize' src={project1} alt='tictactoe'  />
                <div className='abs'>
                    <p className='p_align'>Developed a classic Tic-Tac-Toe game using React, with a popular JavaScript library for building user interfaces and CSS3 for
ensuring seamless Styling and Responsive design.
The project aimed to showcase proficiency in React fundamentals such as component-based architecture, state
management,props, and event handling.

                    </p>
                    <div className='btn'>
                    <button className="v_p"><a href="https://poonthendral1475.github.io/tic-tac-toe/" target='_blank'>view project</a></button>
                    </div>
                </div>
            </div>
            <h5 className='projecName'>Tic-Tac-Toe</h5>
            </div>
            <div>
            <div className='rel'>
                <img className='sizing mediaSize' src={project2} alt='tictactoe'  />
                <div className='abs'>
                    <p className='p_align'>Developed a dynamic and interactive quiz application designed to engage users with a range of questions across various topics.Utilized React.js along with hooks such as useState and useEffect to manage application state and lifecycle events efficiently.
</p>
                    <div className='btn'>
                    <button className="v_p"><a href="https://poonthendral1475.github.io/quiz-app/" target='_blank' >view project</a></button>
                    </div>
                </div>
            </div>
            <h5 className='projecName'>
                Quiz_App
                </h5>
            </div>
            <div>
            <div className='rel'>
                <img className='sizing mediaSize' src={project3} alt='tictactoe' />
                <div className='abs'>
                    <p className='p_align'> This Age Calculator allows users to input their birthdate and calculates their current age in years, months, and days instantly.<br/>
                    The calculator has a user-friendly interface with a clean design using HTML and CSS, and it performs real-time calculations using JavaScript.
                    </p>
                    <div className='btn'>
                    <button className="v_p"><a href="https://poonthendral1475.github.io/agecalculator/" target='_blank'>view project</a></button>
                    </div>
                </div>
            </div>
            <h5 className='projecName'>
               Age_Calculator
            </h5>
                </div>
            
        </div>
        <div id="project_box2">
        <div>
        <div className='rel'>
                <img className='sizing mediaSize' src={project4} alt='tictactoe'  />
                <div className='abs'>
                    <p className='p_align'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, soluta.</p>
                    <div className='btn'>
                    <button className="v_p"><a href="" download="">view project</a></button>
                    </div>
                </div>
            </div> 
            <h5 className='projecName'>FoodApp</h5>
            </div>
           <div>
           <div className='rel'>
                <img  className='sizing mediaSize' src={project5} alt='tictactoe'  />
                <div className='abs'>
                    <p className='p_align'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, soluta.</p>
                    <div className='btn'>
                    <button className="v_p"><a href="https://poonthendral1475.github.io/purchaseapp/" target="__blank" >view project</a></button>
                    </div>
                </div>
            </div>
            <h5 className='projecName'>Cart</h5>
           </div>
            <div>
            <div className='rel'>
                <img className='sizing mediaSize' src={project6} alt='tictactoe'  />
                <div className='abs'>
                    <p className='p_align'>This portfolio showcases projects and skills using React.js, Material UI, and various open-source components, providing a modern and responsive design. It highlights the user's expertise through interactive elements and clean UI, tailored to enhance user experience.</p>
                    <div className='btn'>
                    <button className="v_p"><a href="" download="">view project</a></button>
                    </div>
                </div>
                
            </div>
            <h5 className='projecName'>portfolio</h5>
            </div>
        </div>
        </section>

        </>
    )
}