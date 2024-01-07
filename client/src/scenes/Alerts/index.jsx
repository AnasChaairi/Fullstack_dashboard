import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const AlertsView = () => {
  const theme = useTheme();

  // Mock data for demonstration (replace this with your actual data)
  const alerts = [
    {
      id: 1,
      type: "Disease Outbreak",
      timestamp: "2023-12-15T08:00:00Z",
      plantId: "659abd7e875a611c99aee243",
      message: "Potential disease detected in Plant A. Take immediate action.",
      severity: "High",
    },
    {
      id: 2,
      type: "Metric Fluctuation",
      timestamp: "2023-12-17T10:30:00Z",
      plantId: "659abd7e875a611c99aee244",
      message: "Unusual temperature variation detected in Plant B.",
      severity: "Medium",
    },
    // Add more alerts as needed
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Alerts and Notifications
      </Typography>
      {alerts && alerts.length > 0 ? (
        <Box>
          {alerts.map((alert) => (
            <Box key={alert.id} p={2} mb={2} boxShadow={2} bgcolor={theme.palette.secondary.light}>
              <Typography variant="subtitle1">{alert.type}</Typography>
              <Typography variant="body1">{alert.message}</Typography>
              <Typography variant="caption">
                Plant ID: {alert.plantId} | Timestamp: {alert.timestamp}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography>No alerts found.</Typography>
      )}
    </Box>
  );
};

export default AlertsView;
