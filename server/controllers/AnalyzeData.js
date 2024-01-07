function performAnalysis(data) {
    const analysisResult = {};
  
    // Calculate statistics for numeric attributes
    const numericAttributes = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'];
  
    numericAttributes.forEach(attribute => {
      const values = data.map(item => item[attribute]);
      analysisResult[`mean${attribute}`] = calculateMean(values);
      analysisResult[`median${attribute}`] = calculateMedian(values);
      analysisResult[`stdDev${attribute}`] = calculateStandardDeviation(values);
      // Add other statistics as needed
    });
  
    return analysisResult;
  }

// Function to calculate mean
function calculateMean(values) {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  }

// Function to calculate median
function calculateMedian(values) {
    const sortedValues = values.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedValues.length / 2);
    if (sortedValues.length % 2 === 0) {
        return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
    } else {
        return sortedValues[middle];
    }
}

// Function to calculate standard deviation
function calculateStandardDeviation(values) {
    const mean = calculateMean(values);
    const squaredDiffs = values.map(val => (val - mean) ** 2);
    const variance = calculateMean(squaredDiffs);
    return Math.sqrt(variance);
}
export default { performAnalysis };  