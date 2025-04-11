"use client";
import React from "react";
import Layout from "../components/layout";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample data for the time series forecasting (Historical vs. Predicted)
const forecastData = [
  { month: "January", actual: 200, predicted: 210 },
  { month: "February", actual: 230, predicted: 225 },
  { month: "March", actual: 250, predicted: 240 },
  { month: "April", actual: 270, predicted: 265 },
  { month: "May", actual: 300, predicted: 310 },
  { month: "June", actual: 320, predicted: 315 },
  { month: "July", actual: 330, predicted: 340 },
];

// Sample data for the error distribution (Forecast Error Ranges)
const errorDistribution = [
  { range: "0-5%", value: 45 },
  { range: "5-10%", value: 30 },
  { range: "10-15%", value: 15 },
  { range: "15%+", value: 10 },
];

// Define colors for the pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Analytics() {
  return (
    <Layout>
      <Box sx={{ padding: 3, backgroundColor: "#f9f9f9" }}>
        {/* Title Section */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          ML Predictions for Time Series Forecasting
        </Typography>

        {/* Line Chart Section */}
        <Paper
          sx={{
            padding: 3,
            marginBottom: 4,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Historical vs. Predicted Values
          </Typography>
          <LineChart
            width={600}
            height={300}
            data={forecastData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#8884d8"
              name="Actual"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#82ca9d"
              name="Predicted"
            />
          </LineChart>
        </Paper>

        {/* Pie Chart Section */}
        <Paper
          sx={{
            padding: 3,
            marginBottom: 4,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Forecast Error Distribution
          </Typography>
          <PieChart width={400} height={400}>
            <Pie
              data={errorDistribution}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ range, percent }) =>
                `${range} (${(percent * 100).toFixed(0)}%)`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {errorDistribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Paper>

        {/* Insights Section */}
        <Paper
          sx={{
            padding: 3,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Insights and Recommendations
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={<strong>Model Accuracy:</strong>}
                secondary="The line chart indicates that the model's predictions closely follow the actual values. A continuous evaluation of performance metrics like MAPE can further validate the model's accuracy."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<strong>Error Analysis:</strong>}
                secondary="The pie chart shows that the majority of predictions fall within a 0-5% error range, suggesting reliable forecasting. However, the 15%+ error segment should be analyzed to identify potential model improvements."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<strong>Feature Optimization:</strong>}
                secondary="Review input features and consider incorporating additional variables to capture seasonal trends or external factors that might affect forecasting performance."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<strong>Future Enhancements:</strong>}
                secondary="Implementing cross-validation and hyperparameter tuning can optimize the model further. Also, exploring advanced techniques like ensemble methods may lead to more robust predictions."
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Layout>
  );
}
