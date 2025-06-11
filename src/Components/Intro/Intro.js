import React from 'react'
import './Intro.css'
import bg from '../../assets/h1.png'
import btnimg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="Intro">
            <div className='introContent'>
                <span className="hello">Hello,</span>
                <span className="introtext">I'm <span className='introname'>
                    Aryan</span> <br/>
                    Web Developer</span>
                <p className='intropara'> I am a enthusiastic web developer with experience 
                    in creating<br/> visually appealing and user friendly websites.
                </p>
                <Link activeClass='active' to='contact' spy= {true} duration={500} smooth={true} offset={-10}>
                <button className="btn">
                <img src={btnimg} alt="Hire me" className='btnimg'/> Hire me </button></Link>
    
            </div>
            <img className='bg' src={bg} alt="ig"/>
    
        </section>
      );
    }
    


export default Intro
