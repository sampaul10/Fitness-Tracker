import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries'; //query categories or query targets from workout workout.find().distinct('target', function(error, ids))
import { idbPromise } from '../../utils/helpers';
import './category.css';


function CategoryMenu() {
    const [state, dispatch] = useStoreContext();
    const { categories } = state;
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    
    useEffect(() => {
      if (data) {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: data.categories,
        });
        data.categories.forEach((category) => {
          idbPromise('categories', 'put', category);
        });
      } else if (!loading) {
        idbPromise('categories', 'get').then((categories) => {
          dispatch({
            type: UPDATE_CATEGORIES,
            categories: categories,
          });
        });
      }
    }, [data, loading, dispatch]);
  
    const handleClick = (id) => {
      dispatch({
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: id,
      });
    };

    return (
      <div className="category-choose">
        <h2>Choose an Excercise Category:</h2>
        <div className="category-menu">
        {categories.map((item) => (
          <button
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.target}
          </button>
        ))}
        </div>
      </div>
    );
}

export default CategoryMenu;