import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { DELETE_TOUR, SET_DATA } from "./actions";
import { reducer } from "./reducer";
const AppContext = createContext();

const url = "https://course-api.com/react-tours-project";

const initialState = {
  tours: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    const fetching = await fetch(url);
    const jsonData = await fetching.json();

    dispatch({ type: SET_DATA, payload: { jsonData } });
  };

  const deleteTour = (id) => {
    dispatch({ type: DELETE_TOUR, payload: { id } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ fetchData, ...state, deleteTour }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
