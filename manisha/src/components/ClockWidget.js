import React, { useEffect, useState } from 'react';
import SevenSegmentDisplay from '../components/SevenSegmentDisplay';

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div id="clock">
      <SevenSegmentDisplay value={Math.floor(hours / 10)} />
      <SevenSegmentDisplay value={hours % 10} />
      <div className="digit">:</div>
      <SevenSegmentDisplay value={Math.floor(minutes / 10)} />
      <SevenSegmentDisplay value={minutes % 10} />
      <div className="digit">:</div>
      <SevenSegmentDisplay value={Math.floor(seconds / 10)} />
      <SevenSegmentDisplay value={seconds % 10} />
    </div>
  );
};

export default ClockWidget;
