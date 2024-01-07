import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetPlantsDataQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Plants = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetPlantsDataQuery();
  console.log("data", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "Nitrogen",
      headerName: "Nitrogen",
      flex: 1,
    },
    {
      field: "Phosphorus",
      headerName: "Phosphorus",
      flex: 1,
    },
    {
      field: "Potassium",
      headerName: "Potassium",
      flex: 1,
    },
    {
      field: "temperature",
      headerName: "temperature",
      flex: 1,
    },
    {
      field: "humidity",
      headerName: "humidity",
      flex: 1,
    },
    {
      field: "ph",
      headerName: "ph",
      flex: 0.5,
    },
    {
        field: "rainfall",
        headerName: "rainfall",
        flex: 1,
      },
    {
        field: "PlantType",
        headerName: "PlantType",
        flex: 0.5,
    }
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Plants" subtitle="List of Plants" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Plants;