import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Margin from '../assets/Margin.png';

const data = [
    { day: "Jan", Revenue: 30, OpearatingExpense: 20, COGS: 10 },
    { day: "Feb", Revenue: 40, OpearatingExpense: 15, COGS: 20 },
    { day: "Mar", Revenue: 35, OpearatingExpense: 25, COGS: 15 },
    { day: "Apr", Revenue: 50, OpearatingExpense: 30, COGS: 25 },
    { day: "May", Revenue: 45, OpearatingExpense: 20, COGS: 10 },
    { day: "Jun", Revenue: 60, OpearatingExpense: 35, COGS: 20 },
];

const Bargraph = () => {
    return (
        <div className="flex gap-4">
            <div className="w-[380px] h-[300px]  bg-white shadow-lg rounded-2xl">
                <div className="flex  gap-4">
                    <img src={Margin} alt="Margin" className="w-6 h-6 mt-1" />
                    <h2 className="text-xl font-bold mb-4 text-left">Weekly Performance <span className="text-gray-400 text-xs">{`(Last Six Months)`}</span></h2>
                </div>
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart data={data}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Revenue" fill="#74d7e9ff" barSize={5} radius={[6, 6, 0, 0]} />
                        <Bar dataKey="OpearatingExpense" fill="#b450b4ff" barSize={5} radius={[6, 6, 0, 0]} />
                        <Bar dataKey="COGS" fill="#c6b623ff" barSize={5} radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Bargraph;
