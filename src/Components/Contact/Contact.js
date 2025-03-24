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
                    Recipe Sharing Platform 
                </h4>
                <span className='span1'>
                    MERN
                </span>
                <p className='project1Description'>
                  Food Recipe Hub is a MERN stack-based recipe-sharing
                   platform where users can add, view, and 
                   explore recipes with images. It features user authentication, s
                   ecure recipe management, and smooth navigation 
                   using React.js and Axios. The backend, built with Node.js, 
                   Express.js, and MongoDB Atlas, ensures efficient data handling. 
                   The project is deployed with Vercel (frontend) and Render (backend) 
                   for seamless performance.

                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    I gained experience in 
                    full-stack development using the MERN stack, 
                    integrating user authentication with JWT, 
                    and managing a MongoDB Atlas database. Additionally, I 
                    learned how to handle image uploads, set up environment 
                    variables securely, and deploy applications using Vercel and Render</p>
                <div className='links-container'>
                <p> To view Code :  <a href="https://github.com/aryandumale04/EYGDS-P6-RecipeApp.git" target="_blank">Click Here </a></p>
                <p> Live Demo:<a href="https://food-recipe-hub.vercel.app/" target="_blank"> Click Here</a></p>

                </div>
                
    
            </div>
            <div className='project'>
                <h4>
                    Edusity Website
                </h4>
                <span className='span1'>
                    HTML | Css | JavaScript | ReactJS
                </span>
                <p className='project1Description'>
                Edusity is a fully responsive education-based 
                website built using React.js, CSS, and JavaScript. 
                It is designed to offer a seamless learning experience 
                across all devices, ensuring a modern and 
                interactive UI/UX for users. The platform includes video content, 
                user testimonials, and dynamic components to enhance engagement.

                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    improved my React.js skills by building 
                    reusable components and managing state efficiently. 
                    Learned responsive design using CSS Flexbox & Grid and 
                    enhanced user engagement with interactive elements. Gained experience
                     in modern JavaScript (ES6+) and successfully deployed a R
                     eact app on Vercel. Also, understood the 
                     importance of performance optimization for a smooth user experience.</p>
                <div className='links-container'>
                <p> To view Code :  <a href="https://github.com/aryandumale04/edusityWebsite.git" target="_blank">Click Here </a></p>
                <p> Live Demo:<a href="https://edusity-website-kappa.vercel.app/" target="_blank">Click Here</a></p>

                     </div>
                
            </div>
            <div className='project'>
                <h4>
                    Portfolio 
                </h4>
                <span className='span1'>
                     HTML | CSS | JAVASCRIPT | ReactJS
                </span>
                <p className='project1Description'>
                A personal portfolio website showcasing my skills, projects, and experience as a web developer. The site is built with React, HTML, CSS, and JavaScript, featuring smooth navigation, interactive UI elements, and a project showcase section. It also includes a contact form for easy communication and is deployed on Vercel for seamless updates.


                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    This project helped me refine my React development skills and improve my understanding of UI/UX design. I learned how to implement scroll-based navigation, integrate CSS Flexbox for responsive layouts, and enhance user experience with animations using React Scroll. Deploying on Vercel taught me continuous deployment techniques, making it easier to maintain and update the portfolio efficiently.
                   
                    
                    

                    </p>
                <div className='links-container'>
                <p> To view Code :  <a href="https://github.com/aryandumale04/portfolio.git" target="_blank">Click Here </a></p>
                <p> Live Demo:<a href="https://portfolio-aryan-dumales-projects.vercel.app/" target="_blank">Click Here</a></p>

                </div>
                
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
