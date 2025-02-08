import React from 'react'
import './Portfolio.css'
import imgOne from '../../assets/img1.png'
import imgTwo from '../../assets/img2.png'
import imgThree from '../../assets/img3.png'
import imgFour from '../../assets/img4.png'
import imgFive from '../../assets/img5.png'
import imgSix from '../../assets/img6.png'
import imgSeven from '../../assets/img7.png'
import { Link } from 'react-scroll'


const Portfolio = () => {
  return (
    <section id="Portfolio">
        <h2 className='worksTitle'>
            My Portfolio
        </h2>
        <span className='worksDescription'>
            I take pride in paying attention
            to the smallest details and making
            sure that my work is pixel perfect. I am
            excited to bring my skills  to help
            businesses achieve their goals and 
            create a strong online presence 
        </span>
        <div className='worksImgs'>
            <img src={imgOne} alt="" className="worksImg"/>
            <img src={imgTwo} alt="" className="worksImg"/>
            <img src={imgThree} alt="" className="worksImg"/>
            <img src={imgFour} alt="" className="worksImg"/>
            <img src={imgFive} alt="" className="worksImg"/>
            <img src={imgSix} alt="" className="worksImg"/>
            <img src={imgSeven} alt="" className="worksImg"/>
        </div>
        <Link activeClass='active' to='Contacts' spy= {true} duration={500} smooth={true} offset={-100}>
        
        <button className='worksBtn'>See These in Detail Below </button></Link>
    </section>
  )
}
 
export default Portfolio
