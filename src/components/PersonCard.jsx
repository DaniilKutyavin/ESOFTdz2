import React from 'react';

const PersonCard = (props) => {
  return (
    <div className="myself">
      <img src={props.photo} alt="Person" />
      <h2 className="name">{props.fullName}</h2>
    </div>
  );
};

export default PersonCard;