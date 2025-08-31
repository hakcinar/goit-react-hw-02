import React from 'react';
import styles from './Feedback.module.css';
const Feedback = ({ good, neutral, bad }) => {
  return (
    <div className={styles.feedback}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {good + neutral + bad}</span>
      <span>
        Positive feedback:{' '}
        {good + neutral + bad
          ? ((good / (good + neutral + bad)) * 100).toFixed(2) + '%'
          : '0%'}
      </span>
    </div>
  );
};

export default Feedback;
