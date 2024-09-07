import React from 'react';

import './aboutus.css';

const TeamMember = ({ name, location, description, github, img }) => {
  return (
    <div className="team-member">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github github-icon"></i>
      </a>
    </div>
  );
};

export default TeamMember;
