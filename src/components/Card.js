import React from "react";

const Card = (props) => {
    const { id, name, instructions, imageUrl }  = props;
  return (
    <div>
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-id">{id}</h5>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
