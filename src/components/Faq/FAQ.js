import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import classes from './FAQ.module.css';

const Faq = () => {
const [questions, setQuestions] = useState(data);

  return (
    <div className={classes['faq-main']}>
      <div className={classes['faq-container']}>
        <h4>Questions And Answers About Healthy Recipes</h4>
        <section className={classes['faq-info']}>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}/>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Faq;
