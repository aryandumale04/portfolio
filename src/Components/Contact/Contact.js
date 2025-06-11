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
                    Food Recipe Hub
                </h4>
                <span className='span1'>
                    Tech STack : MERN
                </span>
                <p className='project1Description'>
                  <span className='heading'>Description : </span>   A full-stack web application where users can share, view, and manage food recipes with image uploads and dynamic search features.

                </p>
                <p className="learnings"><span className="heading">
                    Learnings : </span>
                    This project enhanced my skills in REST API design, user authentication, and image handling with Cloudinary. It also gave me practical experience in deploying MERN stack applications using Render (for backend).

</p>
                <div className='links'>
                    <p> To view Code :  <a href="https://github.com/aryandumale04/EYGDS-P6-RecipeApp.git" target="_blank">Click Here </a></p>
                    <p>  For Live  Demo : <a href = " https://food-recipe-hub.vercel.app/" target='_blank'>Click Here</a></p>

                </div>
            </div>
            <div className='project'>
                <img></img>
                <h4>
                    Portfolio Website
                </h4>
                <span className='span1'>
                    Technology Used: HTML, CSS, JavaScript, React
                </span>
                <p className='project1Description'>
                   A personal portfolio website showcasing my skills, projects, and resume, built with a responsive design and smooth user interface.

                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                   Through this project, I gained experience in frontend design principles, responsive layout building, and component-based architecture using React. It also helped me understand version control and hosting with GitHub Pages</p>
                <div className='links'>
                    <p> To view Code :  <a href="https://github.com/aryandumale04/portfolio.git" target="_blank">Click Here </a></p>
                    <p>  For Live  Demo : <a href = " https://portfolio-aryan-dumales-projects.vercel.app/" target='_blank'>Click Here</a></p>

                </div>
            </div>
            <div className='project'>
                <img></img>
                <h4>
                     Educative Website
                </h4>
                <span className='span1'>
                   Technology Used: HTML, CSS, JavaScript, ReactJs
                </span>
                <p className='project1Description'>

                   An informative educational website offering interactive tutorials and topic-wise resources in a clean and user-friendly interface.
                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    This project taught me to organize educational content efficiently using basic frontend technologies. I practiced building structured layouts and improved my grasp on DOM manipulation and user-centric design.


                        </p>
                <div className='links'>
                    <p> To view Code :  <a href="https://github.com/aryandumale04/edusityWebsite.git" target="_blank">Click Here </a></p>
                    <p>  For Live  Demo : <a href = " https://edusity-website-kappa.vercel.app/" target='_blank'>Click Here</a></p>

                </div>
                
            </div>
            <div className='project'>
                <img></img>
                <h4>
                    Task Creator App
                </h4>
                <span className='span1'>
                    Technology Used: Node.js, Express.js, EJS
                </span>
                <p className='project1Description'>
                A web application that lets users create, view, and delete daily tasks using a dynamic and clean server-side rendered interface.


                </p>
                <p className="learnings"><span className="heading">
                    Learnings: </span>
                    This project helped me understand server-side rendering with EJS templates and routing in Express.js. I also learned how to manage form data, work with dynamic content, and structure a Node.js app effectively.


                    
                    

                    </p>
                <div className='links'>
                    <p> To view Code :  <a href="https://github.com/aryandumale04/TaskManger.git" target="_blank">Click Here </a></p>
                    <p>  For Live  Demo : <a href = "https://tasksmanger.onrender.com/" target='_blank'>Click Here</a></p>

                </div>
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
                    <a href="https://x.com/aryandumale05?t=nvqSgVuMBTvrzOB7KHH4Ug&s=09" target='_blank'><img src={twitter} alt='socials'className='link1'/></a>
                    <a href="https://www.instagram.com/aryan.dumale?igsh=YzM3MWEzMml2eHdv" target='_blank'><img src={instagram} alt='socials'className='link'/></a>
                    <a href="http://www.linkedin.com/in/aryan-d-b83409257" target='_blank'><img src={lnkedin} alt='socials' className='link'/></a>
                    
                </div>

            </form>
           


        </div>

    </section>
  )
}

export default Contact
