import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onFeedbackClick }) => {
  return (
    <ButtonList>
      <li>
        <Button type="button" name="good" onClick={onFeedbackClick}>
          Good
        </Button>
      </li>
      <li>
        <Button type="button" name="neutral" onClick={onFeedbackClick}>
          Neutral
        </Button>
      </li>
      <li>
        <Button type="button" name="bad" onClick={onFeedbackClick}>
          Bad
        </Button>
      </li>
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  onFeedbackClick: PropTypes.func.isRequired,
};
