import React from 'react';
import styles from './Options.module.css';
const Options = ({ feedbackHandler }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => feedbackHandler('good')}>Good</button>
      <button onClick={() => feedbackHandler('neutral')}>Neutral</button>
      <button onClick={() => feedbackHandler('bad')}>Bad</button>
      <button onClick={() => feedbackHandler('reset')}>Reset</button>
    </div>
  );
};

export default Options;
