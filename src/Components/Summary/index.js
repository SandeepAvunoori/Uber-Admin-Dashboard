import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './index.css';

const data = [
  { date: "2022-01-01", totalRevenue: 2000, driverRevenue: 500 },
  { date: "2022-01-02", totalRevenue: 3000, driverRevenue: 1000 },
  { date: "2022-01-03", totalRevenue: 5000, driverRevenue: 2000 },
  { date: "2022-01-04", totalRevenue: 6000, driverRevenue: 3000 },
  { date: "2022-01-05", totalRevenue: 8000, driverRevenue: 4000 },
  { date: "2022-01-06", totalRevenue: 10000, driverRevenue: 5000 },
  { date: "2022-01-07", totalRevenue: 12000, driverRevenue: 6000 },
];

const SummaryChart = () => {
  const [filter, setFilter] = useState("monthly");

  const filteredData = data.filter((item) => {
    const date = new Date(item.date);
    switch (filter) {
      case "quarterly":
        return date.getMonth() % 3 === 0;
      case "monthly":
        return true;
      case "weekly":
        return date.getDay() === 0;
      case "daily":
        return true;
      default:
        return true;
    }
  });

  return (
    <div>
      <h1 className="summary">Summary</h1>
      <select  className ="graph"value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="quarterly">Quarterly</option>
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
        <option value="daily">Daily</option>
      </select>
      <LineChart width={600} height={300} data={filteredData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalRevenue" stroke="#8884d8" />
        <Line type="monotone" dataKey="driverRevenue" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default SummaryChart;
