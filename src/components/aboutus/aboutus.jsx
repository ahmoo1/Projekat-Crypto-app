import React from 'react';
import './about.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Ammar Dolovac',
      role: 'Software Developer',
      image: '', 
    },
    {
      name: 'Ahmed Avdic',
      role: 'UI/UX Designer',
      image: '',
    },
    {
      name: 'Junus Osmanlic',
      role: 'Frontend Developer',
      image: '',
    },
    {
      name: 'Dzemil Sahovic',
      role: 'Backend Developer',
      image: '',
    },
  ];

  return (
    <div className="aboutus-container">
      {teamMembers.map((member) => (
        <div className="card" key={member.name}>
          <img src={member.image} alt={member.name} className="card-img" />
          <h3 className="card-name">{member.name}</h3>
          <p className="card-role">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
