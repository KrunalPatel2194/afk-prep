import React from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp, onExpire }) {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
  } = useTimer({ expiryTimestamp, onExpire });

  return (
    <div>
      <h3>Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3>
    </div>
  );
}

export default Timer;
