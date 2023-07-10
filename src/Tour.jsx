import React from "react";
import { useGlobalContext } from "./context";

const Tour = ({ id, name, image, price, info }) => {
  const { deleteTour, stringModification, ...state } = useGlobalContext();
  return (
    <div key={id} className="single-tour">
      <img src={image} alt="" className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {state.showMore ? info.substring(1, 150) : info}
          <button className="info-btn" onClick={() => stringModification(id)}>
            {state.showMore ? "...show more" : "show less"}
          </button>
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
