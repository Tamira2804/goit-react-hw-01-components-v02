import PropTypes from 'prop-types';
import css from './StatsElement.module.css';
import { getRandomColor } from 'utils/getRandomColor';

const Statselement = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage} %</span>
    </li>
  );
};

Statselement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statselement;
