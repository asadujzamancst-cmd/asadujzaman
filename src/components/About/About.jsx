
import React from 'react'
import './About.css'
import meo from '../../assets/me.png'

const About = () => {
  return (
    <div>


     
           
            <section className="about , ab" id="about">
              <h2 className="heading">About <span>Me</span></h2>
              <div className="about-img">
                  <span class="circle-span"></span>
                  <img src={meo} alt="" />             
                    
  
              </div>
              <div className="about-content">
                                  <h3>Full-stack Developer</h3>
                                  


<p>
  Who I Am
  Hello! I'm <strong> Md Asaduj Zaman</strong>, a creative and driven Web Developer based in Rajshahi,Bangladesh. I specialize in crafting modern, user-friendly digital experiences that not only look stunning but also solve real problems.
  
  With <strong>1 year</strong> of experience. I’m constantly learning, exploring, and evolving to stay ahead in the fast-moving digital world.</p>
  
  
  
  

                     
                      
              </div>


</section>
      
    </div>
  )
}

export default About
