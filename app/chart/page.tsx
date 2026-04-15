"use client";
import {
   AreaChart,
   Area,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer
} from "recharts";

const dataArray = [
   { name: "Mon", revenue: 400 },
   { name: "Tue", revenue: 700 },
   { name: "Wed", revenue: 500 },
   { name: "Thu", revenue: 900 },
   { name: "Fri", revenue: 1000 },
   { name: "Sat", revenue: 800 },
   { name: "Sun", revenue: 800 },
];

import React from 'react'

const Graph = () => {
   return (
      <div className="pl-64 pt-4 outline-none foc">
         <ResponsiveContainer className='px-4' width="20%" height={100}>
            <AreaChart data={dataArray}>
               <defs>
                  <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#166534" stopOpacity={1} />
                     <stop offset="100%" stopColor="#166534" stopOpacity={0.1} />
                  </linearGradient>
               </defs>
               <CartesianGrid
                  strokeDasharray=""
                  stroke="#404040"
                  opacity={0}
               />



               <Tooltip
                  contentStyle={{
                     backgroundColor: "#262626",
                     border: "1px solid #404040",
                     borderRadius: "8px",
                     color: "#fff"
                  }}
               />
               <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#166534"
                  strokeWidth={3}
                  fill="url(#green)"
                  dot={(props) => {
                     const { cx, cy, index } = props;

                     if (index === dataArray.length - 1) {
                        return (
                           <circle
                              cx={cx}
                              cy={cy}
                              r={5}
                              fill="#22C55E"
                              stroke="#022c22"
                              strokeWidth={2}
                              style={{
                                 filter: "drop-shadow(0 0 6px #22C55E)",
                                 border: "none"
                              }}
                           />
                        );
                     }

                     return null;
                  }}
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   )
}

export default Graph


