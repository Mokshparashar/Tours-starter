import React from "react";
import { useGlobalContext } from "./context";
import Tour from "./Tour";

const Tours = () => {
  const { tours } = useGlobalContext();
  const newTours = Array.from(tours.entries());
  return (
    <div className="tours">
      {newTours.map((tour) => {
        const [id, item] = tour;
        return <Tour key={id} {...item} />;
      })}
    </div>
  );
};

export default Tours;
