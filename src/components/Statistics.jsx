import Statselement from './Statselement';
import PropTypes from 'prop-types';

const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(statsEl => (
          <li key={statsEl.id} className="item">
            <Statselement
              label={statsEl.label}
              percentage={statsEl.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  statsEl: PropTypes.shape({
    id: PropTypes.string,
  }),
};
export default Statistics;
