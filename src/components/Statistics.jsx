import React from 'react';

const Statistics = props => {
  const { title, stats } = props;
  const {} = stats;
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(el => (
          <li key={el.id} className="item">
            <span className="label">.docx</span>
            <span className="percentage">4%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
