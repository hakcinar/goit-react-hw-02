import { useState } from 'react';

import './App.css';
import Feedback from './Components/Feedback/Feedback';
import Description from './Components/Description/Description';
import Options from './Components/Options/Options';

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const updateFeedback = type => {
    if (type === 'reset') {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
      return;
    }
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };
  return (
    <>
      <Description />
      <Options feedbackHandler={updateFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </>
  );
}

export default App;
