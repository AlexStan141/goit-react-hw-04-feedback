import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.div}>
      {options.map((option, index) => {
        return (
          <button onClick={onLeaveFeedback} className={css.button} key={index}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
