import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "Plant",
    "PlantsNames",
    "plantsData",
    "AnalyzeData",
    "Dashboard"
  ],
  endpoints: (build) => ({
    getPlant: build.query({
      query: (label) => `general/plant/${label}`,
      providesTags: ["Plant"],
    }),
    getPlantsNames: build.query({
      query: (label) => "Plants/plantsNames",
      providesTags: ["PlantsNames"],
    }),
    getPlantsData: build.query({
      query: () => "Plants/plantsData",
      providesTags: ["plantsData"],
    }),
    getAnalyzeData: build.query({
      query: (label) => `Plants/AnalyzeData/${label}`,
      providesTags: ["AnalyzeData"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetPlantQuery,
  useGetPlantsNamesQuery,
  useGetPlantsDataQuery,
  useGetAnalyzeDataQuery,
  useGetDashboardQuery,
} = api;