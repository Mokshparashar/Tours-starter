import React from "react";
import { useGlobalContext } from "./context";
import { useState } from "react";

const Tour = ({ id, name, image, price, info }) => {
  const { deleteTour, stringModification, ...state } = useGlobalContext();
  const [showMore, setShowMore] = useState(true);

  if (state.tours.size === 0) {
    return <h1>No tours</h1>;
  } else {
    return (
      <div key={id} className="single-tour">
        <img src={image} alt="" className="img" />
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {showMore ? info.substring(1, 150) : info}
            <button className="info-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "...show more" : "show less"}
            </button>
          </p>
        </div>
        <div className="tour-price">${price}</div>
        <button className="delete-btn btn" onClick={() => deleteTour(id)}>
          Not interested
        </button>
      </div>
    );
  }
};

export default Tour;
