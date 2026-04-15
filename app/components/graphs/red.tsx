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

const Red = () => {
   return (
      <div className="outline-none focus:outline-none pointer-events-none">
         <ResponsiveContainer className='px-4' width={200} height={100}>
            <AreaChart data={dataArray}>
               <defs>
                  <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#EF4444" stopOpacity={0.5} />
                     <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
               </defs>
               <CartesianGrid
                  strokeDasharray=""
                  stroke="#404040"
                  opacity={0}
               />
               <Tooltip
                  contentStyle={{
                     backgroundColor: "#EF4444",
                     border: "1px solid #EF4444",
                     borderRadius: "8px",
                     color: "#fff"
                  }}
               />
               <Area
                  type="linear"
                  dataKey="revenue"
                  stroke="#EF4444"
                  strokeWidth={3}
                  fill="url(#red)"
                  dot={(props) => {
                     const { cx, cy, index } = props;

                     if (index === dataArray.length - 1) {
                        return (
                           <circle
                              cx={cx}
                              cy={cy}
                              r={5}
                              fill="#EF4444"
                              stroke="#EF4444"
                              strokeWidth={1}
                              style={{
                                 filter: "drop-shadow(0 0 6px #EF4444)",
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

export default Red


