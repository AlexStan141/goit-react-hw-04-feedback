import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    var report = good / countTotalFeedback();
    var percentageWithDecimals = report * 100;
    var percentageWithoutDecimals = percentageWithDecimals.toFixed(0);
    return percentageWithoutDecimals;
  }

  return (
    <Section title="Statistics">
      <FeedbackOptions
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={evt => {
          var category = evt.target.innerText.toLowerCase();
          switch (category) {
            case 'good':
              setGood(good + 1);
              break;
            case 'neutral':
              setNeutral(neutral + 1);
              break;
            default:
              setBad(bad + 1);
              break;
          }
        }}
      ></FeedbackOptions>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    </Section>
  );
};
