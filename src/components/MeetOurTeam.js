import React from 'react';
import './MeetOurTeam.css';
import teamMember1 from '../images/teamMember1.jpg'; // Update these paths as needed
import teamMember2 from '../images/teamMember2.jpg';
import teamMember3 from '../images/teamMember3.jpg';

const MeetOurTeam = () => {
  return (
    <div className="meet-our-team">
      <div className="team-left">
        <div className="team-left-top">
          <div className="team-image team-image-left">
            <img src={teamMember2} alt="Team Member 2" />
            <div className="image-text">Team Member 2</div>
          </div>
          <div className="team-image team-image-right">
            <img src={teamMember1} alt="Team Member 1" />
            <div className="image-text">Team Member 1</div>
          </div>
        </div>
        <div className="team-image team-image-right">
          <img src={teamMember3} alt="Team Member 3" />
          <div className="image-text">Team Member 3</div>
        </div>
      </div>
      <div className="team-right">
        <h2>Meet our Team</h2>
        <p className="team-description">We’re a group of passionate people helping Restaurants grow their food business.</p>
        <div className="team-info">
          <div className="team-subsection">
            <h6>Chef Swatantra Verma</h6>
            <p>Meet our renowned Chef from Bangalore, known for his culinary excellence with 23+ years of expertise in the Food & Beverage industry.</p>
          </div>
          <div className="team-subsection">
            <h6>Chef Totan Debnath</h6>
            <p>Chef de Cuisine with 16+ years of experience in the Food & Beverage industry.</p>
          </div>
          <div className="team-subsection">
            <h6>Chef Chaitra Krishnappa Lohar</h6>
            <p>Bakery & Patisserie Chef with 3+ years of experience in the Food & Beverage industry.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
