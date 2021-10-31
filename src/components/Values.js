import avocado from '../assets/avocado.jpg';
import cafe from '../assets/cafe.jpg';
import community from '../assets/community.jpg';
import classes from './Values.module.css';

const DUMMY_FEATURES = [
  {
    id: 10, 
    img: avocado, 
    text: 'Boosts immunity'
  },
  {
    id: 11, 
    img: cafe, 
    text: 'Helps you live longer'
  },
  {
    id: 12, 
    img: community, 
    text: 'Improves mood and energy level'
  }
];

const Values = () => {
  const features = DUMMY_FEATURES.map((item) => (
    <div className={classes['grid-item']}>
      <img src={item.img} alt="page description"/>
      <h5>{item.text.toUpperCase()}</h5>
    </div>
  ))
  return (
    <div className={classes['grid-container']}>
      {features}
    </div>
  )
};

export default Values;