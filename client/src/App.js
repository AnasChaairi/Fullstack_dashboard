import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Breakdown from "scenes/breakdown";
import Plants from "scenes/Plants";
import Overview from "scenes/overview";
import Layout from "scenes/layout";
import StatisticalAnalysis from "scenes/stats";
import PredictiveAnalysis from "scenes/pred";
import { Rule } from "@mui/icons-material";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/plant metrics" element={<Plants />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/statistical analysis" element={<StatisticalAnalysis/>}/>
              <Route path="/predictive analytics" element={<PredictiveAnalysis/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
