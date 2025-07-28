import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'CO2 Emissions', value: 1.5 },
  { name: 'Water Usage', value: 15 },
  { name: 'Energy Consumption', value: 8.5 },
  { name: 'Waste Generated', value: 0.1 },
];

function EnvironmentalImpactChart() {
  return (
    <div className="bar-chart-container">
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className="chart-axis" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#f37100ff" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p>*Data represents impact per ton of steel produced.</p>
    </div>
  );
}

export default EnvironmentalImpactChart;