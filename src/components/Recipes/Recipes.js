import React from 'react';
import classes from './Menu.module.css';

const Recipes = ({items}) => {
  return (
    <div className={classes['section-center']}>
      {items.map((item) => {
        const {id, title, img, price, desc} = item;
        return (
          <article key={id} className={classes['menu-item']}>
              <img src={img} alt={title} className={classes['photo']} />
            <div className={classes['item-info']}>
              <header>
                <h4>{title}</h4>
              </header>
              <p className={classes['item-text']}>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  );
}

export default Recipes;
