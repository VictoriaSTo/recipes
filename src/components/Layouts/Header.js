import classes from "./Header.module.css";
import tree from "../../assets/tree.png";
// import { NavLink } from "react-router-dom";
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Header = (props) => {

 return (
   <>
    <header className={classes.header}>
      <nav className={classes.nav}>
        <img src={tree} className={classes.logo} alt='logo' />
          <ul>
            <li>
              {/* <NavLink exact to="/recipes" activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="faq" activeClassName={classes.active}>
                FAQ
              </NavLink> */}
            </li>
          </ul>
          <div className={classes.icon}>
            <a href='https://www.facebook.com'><FaFacebook /></a>
            <a href='https://www.twitter.com'><FaTwitter /></a>
          </div>
        </nav>
      </header>
    <hr className={classes.zigzag}/>
  </>
  )
}

export default Header;