import React from 'react'

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>



const Skill = () => {
  
  const skills = [
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Django', level: 75 },
    {name: 'Django Rest Api', level:70},
    {name:"Next.js", level:80},
    {name:"Tailwind css", level:75}
  ];

  return (
    <div className='skill'>
    <div className="container my-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{skill.name}</h5>
                <div className="progress">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
 
}

export default Skill