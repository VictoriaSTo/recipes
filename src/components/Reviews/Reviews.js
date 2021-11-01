import React, { useState } from 'react';
import people from './people';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import classes from './Reviews.module.css';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className={classes.review}>
      <div className={classes['img-container']}>
        <img src={image} alt={name} className={classes['person-img']} />
        <span className={classes['quote-icon']}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={classes.author}>{name}</h4>
      <p className={classes.job}>{job}</p>
      <p className={classes.info}>{text}</p>
      <div className={classes['button-container']}>
        <button className={classes['prev-btn']} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={classes['next-btn']} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      {/* <button className={classes['random-btn']} onClick={randomPerson}>
        surprise me
      </button> */}
    </article>
  );
};

export default Reviews;
