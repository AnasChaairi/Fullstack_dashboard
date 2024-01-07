import mongoose from "mongoose";
// Create a schema for the plant data
const PlantDataSchema = new mongoose.Schema({
  Nitrogen: {
      type: Number,
      required: true
  },
  Phosphorus: {
      type: Number,
      required: true
  },
  Potassium: {
      type: Number,
      required: true
  },
  temperature: {
      type: Number,
      required: true
  },
  humidity: {
      type: Number,
      required: true
  },
  ph: {
      type: Number,
      required: true
  },
  rainfall: {
      type: Number,
      required: true
  },
  Date: {
      type: Date,
      required: true
  },
  HealthScore: {
      type: Number,
      required: true
  },
  PlantType: {
      type: String,
      required: true
  }
},{collection: 'SoilData'});

// Create a model using the schema
const Plant = mongoose.model('Plant', PlantDataSchema);

export default Plant;