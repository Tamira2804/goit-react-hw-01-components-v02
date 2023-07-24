import React from 'react';

const Statselement = stats => {
  const { label, percentage } = stats;
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

export default Statselement;
