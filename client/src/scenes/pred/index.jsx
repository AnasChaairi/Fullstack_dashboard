import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid, CircularProgress } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
//import { useGetPredictionsQuery } from "state/api";

const PredictiveAnalysis = () => {

  //const { data: predictionData, isLoading } = useGetPredictionsQuery(); // Fetch predictions from API
  const predictionData = [
    {
      id: 'PlantA',
      data: [
        { x: '2024-01-01', y: 80 }, // Predicted health score for PlantA on Jan 1, 2024
        { x: '2024-01-02', y: 85 }, // Predicted health score for PlantA on Jan 2, 2024
        // ... more predicted data points for PlantA
      ],
    },
    {
      id: 'PlantB',
      data: [
        { x: '2024-01-01', y: 75 }, // Predicted health score for PlantB on Jan 1, 2024
        { x: '2024-01-02', y: 82 }, // Predicted health score for PlantB on Jan 2, 2024
        // ... more predicted data points for PlantB
      ],
    },
    // Add more objects for predictions of other plants
  ];
  const [plantInfo, setPlantInfo] = useState({
    name: "",
    type: "",
    temperature: "",
    humidity: "",
    ph : "",
    rainfall :"",
    Potassium :""

  });
  const [predictedHealth, setPredictedHealth] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlantInfo({ ...plantInfo, [name]: value });
  };

  const handlePrediction = () => {
    const { temperature, humidity } = plantInfo;

    // Simulate health score calculation (Replace this with your actual algorithm)
    const healthScore = calculateHealthScore(parseFloat(temperature), parseFloat(humidity));

    setPredictedHealth(healthScore);
  };

  const calculateHealthScore = (temperature, humidity) => {
    // Example algorithm (can be replaced with your logic)
    // Health score calculation based on given metrics
    const temperatureImpact = (temperature - 20) * 2; // Example: Each degree from 20 affects health by 2
    const humidityImpact = (60 - humidity) * 1.5; // Example: Each percent below 60 affects health by 1.5

    // Combine impacts and limit the health score between 0 and 100
    let healthScore = 100 - Math.abs(temperatureImpact + humidityImpact);
    healthScore = Math.max(0, Math.min(healthScore, 100));

    return Math.round(healthScore);
  };
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Predictive Analysis - Plant Health Forecasts
      </Typography>
      <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Health Prediction Form
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <TextField
            label="Plant Name"
            name="name"
            value={plantInfo.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Plant Type"
            name="type"
            value={plantInfo.type}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Temperature"
            name="temperature"
            value={plantInfo.temperature}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Humidity"
            name="humidity"
            value={plantInfo.humidity}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="ph"
            name="ph"
            value={plantInfo.ph}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="rainfall"
            name="rainfall"
            value={plantInfo.rainfall}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Potassium"
            name="Potassium"
            value={plantInfo.Potassium}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Nitrogen"
            name="Nitrogen"
            value={plantInfo.Nitrogen}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        </Grid>
        </Box>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handlePrediction}>
            Predict Health Score
          </Button>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {predictedHealth !== null && (
            <Box mt={2} position="relative" display="inline-block">
              <CircularProgress variant="determinate" value={predictedHealth} size={80} thickness={6} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              <Typography variant="body2" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#000' }}>
                {predictedHealth}%
              </Typography>
            </Box>
          )}
        </Grid>
        
    </Box>
  );
};

export default PredictiveAnalysis;
