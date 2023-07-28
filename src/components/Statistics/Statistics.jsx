import Statselement from '../StatsElement/Statselement';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from 'utils/getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(statsEl => (
          <Statselement
            key={statsEl.id}
            label={statsEl.label}
            percentage={statsEl.percentage}
            color={getRandomColor()}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
