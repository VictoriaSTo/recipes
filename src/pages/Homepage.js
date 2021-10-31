import React from 'react';
import Introduction from '../components/Introduction';
import Values from '../components/Values';
import Menu from '../components/Recipes/Menu';
import Reviews from '../components/Reviews/Reviews';

const Homepage = () => {
  return (
    <React.Fragment>
      <Introduction />
      {/* <Values /> */}
      <Menu />
      <Reviews /> 
    </React.Fragment>
  );
}

export default Homepage;