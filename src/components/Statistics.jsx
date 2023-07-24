import React from 'react';
import Statselement from './Statselement';

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

export default Statistics;
