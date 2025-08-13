import React from 'react';
import slogo from '../../assets/me.png'; // Replace with your actual image path
import './Home.css'

const Home = () => {
  return (
    <div>
      {/* Mobile View Section */}
      <div className="onMobile">
        <div className="card" id="das">
          <h1>Hello, I'm Md Asaduj Zaman</h1>
          <p>
            Creative <span>Developer & Designer</span>  passionate about crafting beautiful,
            functional experiences in 3D and web.
          </p>
          <div className="rig">
            <img src={slogo} alt="My profile" width="200" height="400" />
          </div>
        </div>
      </div>

      
      <section className="home">
        <div className="home-content">
          <h1>
            Hi, I'm <span>Asaduj Zaman</span>
          </h1>
          <div className="text-animated">
            <h3>Full-Stack Developer</h3>
          </div>
          <p>
            Creative Developer & Designer passionate about crafting beautiful,
            functional experiences in 3D and web.
          </p>
          <div className="rig">
            <img src={slogo} alt="My profile" width="200" height="400" />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
