import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Revenue from '../assets/Revenue.png';


const data = [
  { day: "Jul 24", Revenue: 80, ProfitTrend: 20 },
  { day: "Aug 24", Revenue: 70, ProfitTrend: 25 },
  { day: "Sapt 24", Revenue: 65, ProfitTrend: 30 },
  { day: "Oct 24", Revenue: 83, ProfitTrend: 35 },
  { day: "Nov 24", Revenue: 75, ProfitTrend: 28 },
  { day: "Dec 24", Revenue: 60, ProfitTrend: 40 },
  { day: "Jan 25", Revenue: 80, ProfitTrend: 32 },
  { day: "Feb 25", Revenue: 73, ProfitTrend: 35 },
  { day: "Mar 25", Revenue: 69, ProfitTrend: 28 },
  { day: "Apr 25", Revenue: 81, ProfitTrend: 40 },
  { day: "May 25", Revenue: 75, ProfitTrend: 32 },
  { day: "Jun 25", Revenue: 67, ProfitTrend: 32 },
];

const LineChartGraph = () => {
  return (
    <div className="w-[1200px] h-[300px] bg-white shadow-lg rounded-2xl">
      <div className="flex  gap-4">
        <img src={Revenue} alt="Revenue" className="w-6 h-6 mt-1" />
        <h2 className="text-xl font-bold mb-4 text-left">Weekly Trends fd</h2>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>

          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />


          <Line
            type="linear"
            dataKey="Revenue"
            stroke="#3b82f6"
            strokeWidth={1}
            dot={{ r: 3, fill: "#3b82f6" }}
            activeDot={{ r: 3, fill: "#1e40af" }}
          />

          <Line
            type="linear"
            dataKey="ProfitTrend"
            stroke="#f97316"
            strokeWidth={1}
            dot={{ r: 3, fill: "#f97316" }}
            activeDot={{ r: 3, fill: "#c2410c" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartGraph;
