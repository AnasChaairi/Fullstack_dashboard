import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useGetPlantQuery } from "state/api";

const OverviewChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetPlantQuery("Rose");
  if (!data || isLoading) return "Loading...";
  const formatChartData = (apiData ) => {
    const chartData = [
        {
            id: 'Plant Health',
            data: apiData.map((dataPoint) => ({
                x: dataPoint.Date, // Assuming 'Date' is in the format 'YYYY-MM-DD'
                y: parseFloat(dataPoint.HealthScore.toFixed(0)) // Rounding HealthScore to integer
            }))
        }
    ];
    return chartData;
};
  const chartData = formatChartData(data); 
  console.log(chartData)
   return (
    <ResponsiveLine
          data={chartData}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          xScale={{ type: "time", format: "%Y-%m-%dT%H:%M:%S.%LZ", useUTC: true }} 
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          xFormat="time:%Y-%m-%d"
          axisBottom={{
            format: "%b %Y", // Format for X-axis labels (Month and Year)
            tickValues: 'every 1 month', // Show ticks every month
            legend: "Time", // X-axis legend
            legendOffset: 36, // Offset for X-axis legend
            legendPosition: "middle", // Position of X-axis legend
          }}
          axisLeft={{
            tickValues: 5,
            legend: "Health", // Y-axis legend
            legendOffset: -36, // Offset for X-axis legend
            legendPosition: "middle", // Position of Y-axis legend
          }}
          enablePoints={false}
          enableGridX
          enableGridY
          lineWidth={2}
          colors={['rgb(75, 192, 192)']}
          />
  );
};

export default OverviewChart;
