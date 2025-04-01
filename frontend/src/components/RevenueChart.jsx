import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const RevenueChart = ({ data }) => {
  return (
    <ResponsiveContainer  width="90%" height={210}>
      <LineChart data={data}>
        <CartesianGrid stroke="transparent" />
        <XAxis dataKey="month" strokeWidth={2} tick={{ fontSize: 10 }} stroke="white" />
        <YAxis stroke="white" strokeWidth={2} tick={{ fontSize: 10 }} />
        <Tooltip />
        <Line type="" dataKey="revenue" dot={false} stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
