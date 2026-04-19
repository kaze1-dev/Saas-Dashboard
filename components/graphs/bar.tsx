"use client";

import {
   ResponsiveContainer,
   BarChart,
   Bar,
   XAxis,
   YAxis,
   Tooltip,
   CartesianGrid,
} from "recharts";

const data = [
   { name: "Mon", sales: 20013 },
   { name: "Tue", sales: 15170 },
   { name: "Wed", sales: 11500 },
   { name: "Thu", sales: 24400 },
   { name: "Fri", sales: 17060 },
   { name: "Sat", sales: 21180 },
   { name: "Sun", sales: 22330 },
];

const formatNumber = (value?: number) => {
   if(typeof value !== "number") return "";
   if(value >= 1_000) return (value /1_000).toFixed(1) + "k";
   return value.toString();
}


export default function DarkTowerChart() {
   return (
      <div className="w-full h-60">
         <div className="rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all bg-neutral-950 p-4 shadow-xl backdrop-blur-md">

            {/* Header */}
            <div className="mb-4">
               <h2 className="text-sm font-semibold text-white">
                  Weekly Activity
               </h2>
               <p className="text-xs text-neutral-400">
                  Performance overview
               </p>
            </div>

            {/* Chart */}
            <div className="h-60 w-full">
               <ResponsiveContainer height="100%" width="100%">
                  <BarChart data={data}>
                     <CartesianGrid
                        stroke="#ffffff"
                        strokeOpacity={0.05}
                        vertical={false}
                     />

                     <XAxis
                        dataKey="name"
                        tick={{ fill: "#9ca3af", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                     />

                     <YAxis hide />

                     <Tooltip
                        contentStyle={{
                           backgroundColor: "#171717",
                           borderRadius: "10px",
                           fontWeight: "bold",
                           border: "1px solid #262626 ",
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "center",
                           alignItems: "center"
                        }}
                        labelStyle={{
                           color: "#a3a3a3",
                           fontSize: "12px"
                        }}
                        itemStyle={{
                           color: "#e5e5e5",
                           fontSize: "13px",
                        }}
                        cursor={false}
                        formatter={(value) => formatNumber(value as number)}

                     />

                     <Bar
                        activeBar={false}
                        dataKey="sales"
                        radius={[10, 10, 6, 6]}
                        fill="url(#barGradient)"
                     />

                     {/* Gradient fill */}
                     <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                           <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.6} />
                        </linearGradient>
                     </defs>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
   );
}