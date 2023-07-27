import PropTypes from 'prop-types';
import css from './StatsElement.module.css';

const Statselement = stats => {
  const { label, percentage } = stats;
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage} %</span>
    </>
  );
};

Statselement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statselement;
