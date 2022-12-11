import PropTypes from 'prop-types';
import { StatList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <StatList>
      <li>Good : {good}</li>
      <li>Neutral : {neutral}</li>
      <li>Bad : {bad}</li>
      <li>Total : {total}</li>
      <li>Positive feedback : {total > 0 && positivePercentage}%</li>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
