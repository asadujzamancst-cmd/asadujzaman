import React, { useEffect, useState } from 'react';
import './Project.css';

const Project = () => {
  const [data, setData] = useState([]);
  const [expandedId, setExpandedId] = useState(null); // Only one expanded at a time

  useEffect(() => {
    fetch('/Project.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const toggleDetails = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id)); // Toggle or switch
  };

  return (
    <div className="card-container">
      {data.map(item => (
        <div key={item.id} className="card">
          <img src={item.img} alt={item.name} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-name">Name: {item.name}</p>
            <p className="card-id">ID: {item.id}</p>
            <button className="details-button" onClick={() => toggleDetails(item.id)}>
              {expandedId === item.id ? 'Hide Details' : 'Show Details'}
            </button>

            {expandedId === item.id && (
              <div className="card-details">
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Technologies:</strong> {item.tech}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;