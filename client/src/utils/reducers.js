import { useReducer } from 'react';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      const newState = {
        ...state,
        categories: [...action.categories],
      };
      return newState;

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};

export function useCategoryReducer(initialState) {
  return useReducer(reducer, initialState);
}
