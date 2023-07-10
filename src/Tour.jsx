import React from "react";
import { useGlobalContext } from "./context";

const Tour = ({ id, name, image, price, info }) => {
  const { deleteTour } = useGlobalContext();
  return (
    <div key={id} className="single-tour">
      <img src={image} alt="" className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {info}
          <button className="info-btn">...show more</button>
        </p>
      </div>
      <div className="tour-price">${price}</div>
      <button className="delete-btn btn" onClick={() => deleteTour(id)}>
        Not interested
      </button>
    </div>
  );
};

export default Tour;
