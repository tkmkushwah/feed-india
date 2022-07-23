import React from 'react'
import logo from '../components/assets/foundation-logo.png'
import img1 from '../components/assets/img3.jpeg'
import img2 from '../components/assets/img2.jpg'
import '../components/styles/aboutUs.css'
const AboutUs = () => {
    return (
        <>
            <div className="about-container">
                <h2 className='about-heading'>WHo We Are</h2>
                <div className="about1">
                    <div className="text-and-logo">
                        <div className="about-text">

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, accusantium consequuntur repellendus non quia ipsa adipisci accusamus, aliquid expedita harum nemo at fugit odit et vero iusto quidem esse rerum fugiat sequi ab! Expedita maiores quasi nemo eos quis. Aut, nobis! Suscipit natus mollitia illum aliquam iusto et deleniti soluta vel eaque necessitatibus? Illum tenetur accusantium assumenda porro, similique veritatis cupiditate. Aperiam eos, aspernatur quae nostrum architecto, perspiciatis voluptas alias praesentium

                        </div>
                        <div className='about-logo'> <img src={logo} alt="here is logo" /></div>
                    </div>
                    <div className="img">
                        <img src={img1} alt="here is an image" />
                    </div>
                </div>
            <div className="about2">
                <div className="about-text">
                    
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, accusantium consequuntur repellendus non quia ipsa adipisci accusamus, aliquid expedita harum nemo at fugit odit et vero iusto quidem esse rerum fugiat sequi ab! Expedita maiores quasi nemo eos quis. Aut, nobis! Suscipit natus mollitia illum aliquam iusto et deleniti soluta vel eaque necessitatibus? Illum 
                  
                </div>
                <div className="img"><img src={img2} alt="here is an image" /></div>
            </div>
        </div>
        </>
    )
}

export default AboutUs