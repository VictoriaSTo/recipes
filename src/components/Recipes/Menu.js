import React, { useState } from 'react';
import data from './data';
import Recipes from './Recipes';
import Categories from './Categories';
import classes from './Menu.module.css';

const menuCategories = ["all", ...new Set(data.map((item) => item.category))]
const Menu = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(menuCategories);

  const filterRecipesHandler = (category) => {
    if(category === 'all'){
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className={classes.menu}>
        <div className={classes.title}>
          <h2>Our Recipes</h2>
          <div className={classes.underline}></div>
        </div>
        <Categories categories={categories} filterRecipes={filterRecipesHandler}/>
        <Recipes items={menuItems}/>
      </section>
    </main>
  );
}

export default Menu;