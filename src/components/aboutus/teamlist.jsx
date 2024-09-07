import React from 'react';
import TeamMember from './teammember';
import teamData from './teamdata';

const TeamList = () => {
  return (
    <div className="team-list">
      {teamData.map((member, index) => (
        <TeamMember 
          key={index} 
          name={member.name} 
          location={member.location} 
          description={member.description} 
          github={member.github}
          img={member.img}
        />
      ))}
    </div>
  );
};

export default TeamList;
