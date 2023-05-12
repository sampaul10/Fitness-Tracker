import React, { createContext, useContext } from "react";
import { useCategoryReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useCategoryReducer({
    workouts: [],
    categories: [],
    currentCategory: '',
  });
  //console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
