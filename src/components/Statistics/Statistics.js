import React from 'react';
import Notification from 'components/Notification/Notification';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total > 0 ? (
        <>
          <p className={css.info}>Good: {good}</p>
          <p className={css.info}>Neutral: {neutral} </p>
          <p className={css.info}>Bad: {bad}</p>
          <p className={css.info}>Total: {total}</p>
          <p className={css.info}>Positive feedback: {positivePercentage} %</p>
        </>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
