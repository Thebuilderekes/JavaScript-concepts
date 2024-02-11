const stats = {
    max: 20,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: 4,
    average: 35.85
  };
  
  // Only change code below this line
  // const half = (stats) => (stats.max + stats.min) / 2.0; 
  
  //Answer
  const { max, min } = stats;
  const halfSum = (max + min) / 2;
  console.log(halfSum); // logs 12
  