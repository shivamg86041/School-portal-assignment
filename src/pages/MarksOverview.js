import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const MarksOverview = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("marksData");
    if (storedData) {
      setChartData(JSON.parse(storedData));
    } else {
      setChartData([
        { studentName: "John", email: "john@example.com", totalMarks: 85 },
        { studentName: "Alice", email: "alice@example.com", totalMarks: 90 },
        { studentName: "Bob", email: "bob@example.com", totalMarks: 78 },
        { studentName: "Sophia", email: "sophia@example.com", totalMarks: 88 },
      ]);
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-xl font-bold mb-4">Marks Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="studentName"
            tickLine={true}
            tickMargin={15}
            style={{ fontSize: 12, textAnchor: "middle", fontWeight: "bold" }}
          />
          <YAxis />
          <Tooltip
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;
              const { email, totalMarks } = payload[0].payload;
              return (
                <div className="bg-white p-2 shadow-md rounded-md text-black">
                  <p className="font-bold">Email: {email}</p>
                  <p>Marks: {totalMarks}</p>
                </div>
              );
            }}
          />
          <Bar dataKey="totalMarks" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarksOverview;
