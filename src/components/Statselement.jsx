import PropTypes from 'prop-types';

const Statselement = stats => {
  const { label, percentage } = stats;
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

Statselement.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statselement;
