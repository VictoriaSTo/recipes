import Form from '../UI/Form';
import { Link } from 'react-router-dom';

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <article className={classes['grid-container']}>
      <div className={classes['grid-item']}>
        <ul className={classes["footer-list"]}>
        <h5>Menu</h5>
          <li><Link to="/recipes">Homepage</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
        </ul>
      </div>
      <div className={classes['grid-item']}>
      <h5>Contact us to stay updated</h5>
        <Form />
      </div>
    </article>
  )
};

export default Footer;