import { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
export default function()
{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_f4ynxa8', 'template_iby2oqr', form.current, {
            publicKey: '70z8c1Un5czyznFPD',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <>
        <section id="contact">
            <h3>My Contact</h3>
        <h1 id="cont">Contact <span id="me_here">Me Here</span></h1>
        <p id="cont_para">Please Fill out the form below to discuss any work Opportunities.</p>
       <div id='for_Padding'>
       <div id='form'>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor='name' className='gap'>Name</label>
                <input  type='text' id='name' name='from_name' placeholder='Your Name' required />
                <label htmlFor='mail' className='gap'>E-mail</label>
                <input id='mail'  type='text' name='from_email' placeholder='Your E-mail' required />
                <label htmlFor='texta' id='msg'>Message</label>
                <textarea id='texta' type="text" name="message" rows="9" placeholder='Message here' required ></textarea>
                <button type='submit' className='subtn' >Send Message</button>
            </form>
        </div>
       </div>
        {/* <div>
            <h1 id='thank'>Thank you!</h1>
        </div> */}
        </section>
        </>
    )
}