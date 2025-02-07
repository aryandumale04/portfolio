import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'
import facebook from '../../assets/facebook-icon.png'
import twitter from '../../assets/x3.png'
import instagram from '../../assets/instagram.png'
import lnkedin  from '../../assets/lkd.png'


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0v5d5hn', 'template_6bn2zg4', form.current, {
            publicKey: 'M0Ydou4AsDIMJy1VX',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email sent!!');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="Contacts" >
        <div className='projects' >
            <h1 className="projectTitle">
                My Projects  </h1>
            <p className='projectsDescription'>
            A collection of diverse projects ranging
             from web applications to Java-based 
             applications, showcasing my skills in 
             frontend development and problem-solving. 
             These projects highlight my learning journey 
             through various technologies, including HTML, 
             CSS, JavaScript, React, and Java.
            </p>
            <div className='projectContainer'>
            <div className='project'>
                <h4>
                    Java Swing Calculator
                </h4>
                <span className='span1'>
                    Java
                </span>
                <p className='project1Description'>
                    A GUI-based calculator built using 
                    Java, supporting basic
                    arithmetic operations with a 
                    user-friendly interface. It provides real-time 
                    calculations and an interactive design for 
                    easy usability.

                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    This project helped me learn to 
                    build interactive UIs with 
                    Java Swing, using components like 
                    JFrame and JButton. I gained experience in 
                    handling user input with ActionListener, 
                    implementing arithmetic operations, and 
                    managing layout with GridLayout</p>
                <p> To view Code :  <a href="https://github.com/aryandumale04/JavaSwingCalculator.git" target="_blank">Click Here </a></p>
            </div>
            <div className='project'>
                <h4>
                    Java Socket Chat Application
                </h4>
                <span className='span1'>
                    Java
                </span>
                <p className='project1Description'>
                     A real-time chat application built using Java 
                    sockets, allowing users to send and receive messages
                    over a network. It demonstrates 
                    client-server communication 
                    with multithreading for simultaneous conversations.

                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    This project taught me how to build a
                    real-time chat application using Java sockets, 
                    enabling communication between the client and server. 
                    I gained experience in multithreading, GUI design with JFrame 
                    and JPanel, and event handling with ActionListener
                    , while enhancing my skills in network programming and creating interactive user interfacest</p>
                <p> To view Code :  <a href="https://github.com/aryandumale04/JAVA_SOCKET_CHAT_APPLICATION.git" target="_blank">Click Here </a></p>
            </div>
            <div className='project'>
                <h4>
                    Notes WebApp
                </h4>
                <span className='span1'>
                    HTML | CSS | JAVASCRIPT
                </span>
                <p className='project1Description'>

                    The Notes App allows users to add,
                     view, and delete notes with titles 
                     and descriptions. By clicking the "Add Note" 
                     button, users can enter a title and description 
                     in a form, which is then displayed in a list. 
                     Each note can be deleted by 
                     clicking a "Delete" button associated with it
                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    In this project, I learned how to manipulate
                     the DOM using JavaScript to create interactive 
                     features such as adding and removing notes dynamically. 
                     It helped me understand event handling, 
                     modifying HTML elements, and managing user 
                     inputs efficiently. Additionally, I worked with form 
                     elements, event listeners, and DOM traversal 
                     to achieve a seamless user experience
                        </p>
                <p> To view Code :  <a href="https://github.com/aryandumale04/NotesApp.git" target="_blank">Click Here </a></p>
            </div>
            <div className='project'>
                <h4>
                    Countdown Timer  
                </h4>
                <span className='span1'>
                     HTML | CSS | JAVASCRIPT
                </span>
                <p className='project1Description'>
                The Countdown Timer project displays a countdown to a 
                specific date and time, showing remaining days, 
                hours, minutes, and seconds. It also features a
                 progress bar that visually tracks the time
                  elapsed. Once the countdown ends, 
                  it shows "EXPIRED" and fills the progress ba


                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    I learned how to use setInterval to update
                     elements every second, work with date manipulation 
                     in JavaScript, and create dynamic progress 
                     bars based on elapsed time. This project enhanced my 
                     skills in combining JavaScript 
                     with HTML and CSS for interactive feature
                    
                    

                    </p>
                <p> To view Code :  <a href="https://github.com/aryandumale04/Countdown-Timer.git" target="_blank">Click Here </a></p>
            </div>
            </div>


          


        </div>



        <div className="contactPage" id="contact">
            <h1 className='contactPageTitle'>
                Contact Me</h1>
            <span className='contactDescription'>
                Please fill out the form below to discuss
                any work opportunities
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name'
                 placeholder='Your Name' name='from_name' >
                </input>
                <input type='email' className='email'
                 placeholder='Your Email' name='from_email'>
                </input>
                <textarea name='message' rows="5"
                placeholder='Your Message' className='msg'>
                    </textarea>  
                <button className='submitBtn' type='submit' value='Send'
                >
                    Submit
                </button>
                <div className='links'>
                    <a href="https://www.facebook.com/aryan.dumale" target='_blank'><img src={facebook} alt='socials'className='link'/></a>
                    <a href="https://x.com/aryandumale05?t=nvqSgVuMBTvrzOB7KHH4Ug&s=09"><img src={twitter} alt='socials'className='link1'/></a>
                    <a href="https://www.instagram.com/aryan.dumale?igsh=YzM3MWEzMml2eHdv"><img src={instagram} alt='socials'className='link'/></a>
                    <a href="http://www.linkedin.com/in/aryan-d-b83409257"><img src={lnkedin} alt='socials' className='link'/></a>
                    
                </div>

            </form>
           


        </div>

    </section>
  )
}

export default Contact
