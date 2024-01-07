import {React , useState} from "react";
import { Box, Typography } from "@mui/material";
import { useGetPlantsDataQuery } from "state/api";
import { ResponsiveBar } from "@nivo/bar";

const StatisticalAnalysis = () => {
  // Calculate aggregated statistics
  const {data , isLoading} = useGetPlantsDataQuery();
  if (!data || isLoading) return "Loading...";
  const plantTypeGroups = {};
  data.forEach(plant => {
    if (!plantTypeGroups[plant.PlantType]) {
      plantTypeGroups[plant.PlantType] = [];
    }
    plantTypeGroups[plant.PlantType].push(plant);
  });

  // Calculating statistics for each plant type
  const typeStatistics = Object.keys(plantTypeGroups).map(type => {
    const plants = plantTypeGroups[type];
    const totalPlants = plants.length;
    const averageHealthScore = plants.reduce((acc, plant) => acc + plant.HealthScore, 0) / totalPlants;
    const averagePhScore = plants.reduce((acc, plant) => acc + plant.ph, 0) / totalPlants;
    const averageNitrogenScore = plants.reduce((acc, plant) => acc + plant.Nitrogen, 0) / totalPlants;
    const averagePhosphorusScore = plants.reduce((acc, plant) => acc + plant.Phosphorus, 0) / totalPlants;
    const averagePotassiumScore = plants.reduce((acc, plant) => acc + plant.Potassium, 0) / totalPlants;
    // Calculate more statistics per plant type if needed
    return {
      type,
      totalPlants,
      averageHealthScore,
      averagePhScore,
      averageNitrogenScore,
      averagePhosphorusScore,
      averagePotassiumScore
      // Add more statistics as needed
    };
  });

  // Prepare data for Nivo chart
  const barChartData = typeStatistics.map(stat => ({
    type: stat.type,
    'Total Plants': stat.totalPlants,
    'Average Health': stat.averageHealthScore.toFixed(2),
    'Average ph': stat.averagePhScore.toFixed(2),
    'Average Nitrogen': stat.averageNitrogenScore.toFixed(2),
    'Average Phosphorus': stat.averagePhosphorusScore.toFixed(2),
    'Average Potassium': stat.averagePotassiumScore.toFixed(2),
  }));

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Statistical Analysis per Plant Type
      </Typography>
      <Box height={400}>
        <ResponsiveBar
          data={barChartData}
          keys={['Average Health','Average ph','Average Nitrogen','Average Phosphorus','Average Potassium']}
          indexBy="type"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true
              },
              {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
              }
          ]}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Plants',
              legendPosition: 'middle',
              legendOffset: 32,
              truncateTickAt: 0
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'metrics',
              legendPosition: 'middle',
              legendOffset: -40,
              truncateTickAt: 0
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          legends={[
              {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
          role="application"
        />
      </Box>
    </Box>
  );
};

export default StatisticalAnalysis;
