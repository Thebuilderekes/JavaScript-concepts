const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  // const half = (stats) => (stats.max + stats.min) / 2.0; 
  
  //Answer
  const half = ({ max, min }) => (max + min) / 2.0; // when destructuring, you can reach the properties in an object even thought you don't use the dot operator on it.