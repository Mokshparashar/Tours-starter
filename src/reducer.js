import useReducer from "react";
import { DELETE_TOUR, SET_DATA } from "./actions";
import { useGlobalContext } from "./context";

export const reducer = (state, action) => {
  if (action.type == SET_DATA) {
    const newTypeTours = action.payload.jsonData.map((item) => [item.id, item]);
    const mappedTours = new Map(newTypeTours);
    return { ...state, tours: mappedTours };
  }

  if (action.type == DELETE_TOUR) {
    let faTours = new Map(state.tours);
    faTours.delete(action.payload.id);
    return { ...state, tours: faTours };
  }
};
