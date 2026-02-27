import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getRecentData } from "@/data/debtData";

export const GDPChart = () => {
  const data = getRecentData(15).map((d) => ({
    year: d.year,
    gdp: (d.gdpBillions || 0) / 1000, // Convert to trillions
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-4 shadow-lg border border-border/50">
          <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
          <p className="text-sm text-chart-3">
            GDP: ₹{(payload[0].value * 1000).toLocaleString()} Billion
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-card border border-border/50 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Nominal GDP Growth
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        In Trillions of Rupees
      </p>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGDP" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(45 93% 58%)" stopOpacity={1} />
                <stop offset="95%" stopColor="hsl(45 93% 58%)" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(222 47% 20%)"
              vertical={false}
            />
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
              tickFormatter={(value) => `₹${value}T`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="gdp"
              fill="url(#colorGDP)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
