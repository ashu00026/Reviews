import React from "react";

function Person({ name, job, image, text }) {
  return (
    <div>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h3 className="author">{name}</h3>
      <h5 className="job"> {job}</h5>
      <p className="info">{text}</p>
    </div>
  );
}

export default Person;
