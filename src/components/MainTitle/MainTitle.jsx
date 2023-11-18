import PropTypes from 'prop-types';
import css from './MainTitle.module.css';
import Dots from 'components/Spinner/Dots';

export function MainTitle({ title, isLoading }) {
  return (<span style={{display: 'flex', alignItems:'baseline', flexWrap:'wrap', gap: '25px'}}>
   <h1 className={css.mainTitle}>{title}</h1>
   {isLoading && <Dots styles={{margin: "0"}}/>}
  </span>
   
    )
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
