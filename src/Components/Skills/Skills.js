import React from 'react'
import './Skills.css'
import UiDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="Skills">
        <span className="skillTitle">
            What I do 
        </span>
        <span className="skillDescription">
        I am passionate about exploring emerging
        technologies and applying my skills in web development.With hands-on experience in
        building projects using Java, HTML, CSS, JavaScript and React I am continuously
        learning and enhancing my technical expertise to contribute to
        innovative solutions
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UiDesign} alt='UiDesign' className='skillBarImg' />
                <div className="skillBarText">
                    <h2>
                        UI/UX 
                    </h2>
                    <p>
                    I have created user-friendly interfaces 
                    for web and desktop applications, ensuring a 
                    smooth user experience. My projects include 
                    interactive forms, cards, and static web 
                    pages using HTML & CSS, along with Java 
                    Swing applications, focusing on usability 
                    and aesthetics.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className="skillBarText">
                    <h2>
                        Website  Creation & Design
                    </h2>
                    <p>
                    I have developed responsive and visually 
                    appealing web applications, including a 
                    Notes Saver app, a Paste app, and a Countdown
                     Timer using HTML, CSS, JavaScript, and React.
                     My work emphasizes structured layouts, intuitive navigation,
                    and modern design principles.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className="skillBarText">
                    <h2>
                            WebApp Creation
                    </h2>
                    <p>
                    I have built dynamic applications such as a 
                    Java Swing Calculator and a Socket-based application,
                    along with React-based apps like a Counter and a Paste app
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills;
