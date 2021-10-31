import React from 'react';
import classes from './Menu.module.css';

const Categories = ({categories, filterRecipes}) => {
  return (
    <div className={classes['btn-container']}>
      {categories.map((category, index) => {
        return (
          <button
          type='button'
          key={index}
          className={classes['filter-btn']}
          onClick={() => filterRecipes(category)}>
            {category}
          </button>
        )
      }
    )}
    </div>
  );
}

export default Categories;