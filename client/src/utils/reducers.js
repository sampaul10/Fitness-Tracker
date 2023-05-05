import { useReducer } from 'react';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // TODO: Add a comment describing what the default case is for
    // Your comment here// if none of the case applied , return default state.
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
