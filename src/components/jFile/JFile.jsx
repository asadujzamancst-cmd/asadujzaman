import React, { useEffect, useState } from 'react'
import Project from '../Project/Project';

const JFile = () => {

                   const [data,setdata]= useState([]);
                   useEffect(()=>{

                    fetch('/Project.json')
                    .then(res=>res.json())
                    .then(data=>{console.log(" data:", data);
                                        setdata(data);})

                   },[])


  return (
    <div>
                    <h1>datalengt:{data.length}</h1>
                    {
                                        data.map(singledata => <Project
                                        key={singledata.id}
                                        godata = {singledata}
                                        
                                        ></Project>)
                    }
    </div>
  )
}

export default JFile