import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, CircularProgress } from "@mui/material";
//import { useGetPredictionsQuery } from "state/api";

const PredictiveAnalysis = () => {


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
    const { temperature, humidity,ph,rainfall,Potassium } = plantInfo;

    // Simulate health score calculation (Replace this with your actual algorithm)
    const healthScore = calculateHealthScore(parseFloat(temperature), parseFloat(humidity),parseFloat(ph),parseFloat(rainfall),parseFloat(Potassium));

    setPredictedHealth(healthScore);
  };

  const calculateHealthScore = (temperature, humidity, ph, rainfall, potassium) => {
    const temperatureImpact = (temperature - 20) * 2; // Example: Each degree from 20 affects health by 2
    const humidityImpact = (60 - humidity) * 1.5; // Example: Each percent below 60 affects health by 1.5
  
    // Define impacts for pH, rainfall, and potassium
    const phImpact = (ph - 6) * 10; // Example: Each unit away from pH 6 affects health by 10
    const rainfallImpact = (rainfall - 500) * 0.05; // Example: Each unit away from 500mm affects health by 0.05
    const potassiumImpact = (potassium - 50) * 0.5; // Example: Each unit away from 50 affects health by 0.5
  
    // Combine impacts and limit the health score between 0 and 100
    let healthScore = 100 - Math.abs(temperatureImpact + humidityImpact + phImpact + rainfallImpact + potassiumImpact);
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
