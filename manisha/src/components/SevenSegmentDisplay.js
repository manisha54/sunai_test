import React from 'react';
// import '../components/ClockWidget';

const SevenSegmentDisplay = ({ value }) => {
  const segments = [
    [1, 1, 1, 0, 1, 1, 1], // 0
    [0, 0, 1, 0, 0, 1, 0], // 1
    [1, 0, 1, 1, 1, 0, 1], // 2
    [1, 0, 1, 1, 0, 1, 1], // 3
    [0, 1, 1, 1, 0, 1, 0], // 4
    [1, 1, 0, 1, 0, 1, 1], // 5
    [1, 1, 0, 1, 1, 1, 1], // 6
    [1, 0, 1, 0, 0, 1, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1], // 9
  ];

  return (
    <div className="digit">
      {segments[value].map((segment, index) => (
        <div key={index} className="segment" style={{ visibility: segment ? 'visible' : 'hidden' }} />
      ))}
    </div>
  );
};

export default SevenSegmentDisplay;
