import Plant from "../models/Plant.js"
import makePrediction from "./MakePred.js"
// statistical functions 
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



// Controller function to get all plant data

export const getPlantsData = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getPlantsNames = async (req, res) => {
  try {
    const plants = await Plant.distinct('PlantType');
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const analyzePlantData = async (req, res) => {
  try {
    const receivedData = await Plant.aggregate([
      {
        $group: {
            _id: '$PlantType',
            mean_N: { $avg: '$N' },

        }
    }
    ])
    // Replace this with your actual analysis code
    res.json({ receivedData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const predictPlantData = async (req, res) => {
  try {
    const receivedData = req.body.data; // Assuming data is sent in the request body
    // Use machine learning models to make predictions
    // Replace this with your actual prediction code
    const predictionResult = makePrediction(receivedData);
    res.json({ predictionResult });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {getPlantsData , getPlantsNames}