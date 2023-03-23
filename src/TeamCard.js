import React from 'react';

function TeamCard(props) {
  const { school, mascot, city, state } = props;

  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>{mascot}</p>
      <p>{city}, {state}</p>
    </div>
  );
}

export default TeamCard;
