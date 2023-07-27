import Statselement from '../StatsElement/Statselement';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from 'utils/getRandomColor';

const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statlist}>
        {stats.map(statsEl => (
          <li
            key={statsEl.id}
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <Statselement
              label={statsEl.label}
              percentage={statsEl.percentage}
              color={getRandomColor()}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default Statistics;
