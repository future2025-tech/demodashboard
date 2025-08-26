import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const steelCompositionData = [
  { name: 'Iron (Fe)', value: 93.1 },
  { name: 'Manganese (Mn)', value: 1.1 },
  { name: 'Carbon (C)', value: 1.2 },
  { name: 'Silicon (Si)', value: 1.3 },
  { name: 'Sulphur (S)', value: 1.1 },
  { name: 'Phosphorus (P)', value: 1.5 },
  { name: 'Niobium (Nb)', value: 1.32 },
  { name: 'Vanadium (V)', value: 1.0 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8A2BE2', '#FF1493', '#A52A2A', '#2E8B57'];

function SteelCompositionPieChart() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={steelCompositionData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}
          >
            {steelCompositionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SteelCompositionPieChart;
