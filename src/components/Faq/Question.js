import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import classes from './FAQ.module.css';

const Question = ({title, info}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <article className={classes.question}>
      <header>
        <h5>{title}</h5>
        <button className={classes['faq-btn']} onClick={() => setIsShown(!isShown)}>
          {isShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isShown && <p>{info}</p>}
    </article>
  );
}

export default Question;
