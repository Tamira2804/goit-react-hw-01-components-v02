import PropTypes from 'prop-types';
import css from './StatsElement.module.css';
import { getRandomColor } from 'utils/getRandomColor';

const Statselement = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
      className={css.item}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage} %</span>
    </li>
  );
};

Statselement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statselement;
