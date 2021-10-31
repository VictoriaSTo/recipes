import React from 'react';
import classes from './Introduction.module.css';
import cherry from '../assets/cherry.jpg';

const Introduction = () => {
  return (
    <div className={classes['flex-container-banner']}>
      <div className={classes['flex-item']}>
        <img src={cherry} className={classes["banner"]} alt="cherries"/>
      </div>
      <div className={classes['flex-item']}>
        <h6 className={classes["hero-text"]}>Quick and Healthy Recipes</h6>
        <h4>Cooking at home doesn’t have to be complicated.  In fact, simple meals are often the tastiest.</h4>
      </div>
    </div>
  )
};

export default Introduction;