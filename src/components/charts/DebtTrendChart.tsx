import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getRecentData } from "@/data/debtData";

interface DebtTrendChartProps {
  years?: number;
  showLegend?: boolean;
}

export const DebtTrendChart = ({ years = 25, showLegend = true }: DebtTrendChartProps) => {
  const data = getRecentData(years).map((d) => ({
    year: d.year,
    private: d.privateDebt || 0,
    public: d.publicSectorDebt || d.centralGovernmentDebt || 0,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-4 shadow-lg border border-border/50">
          <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toFixed(1)}% of GDP
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-card border border-border/50 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Debt Trends (% of GDP)
      </h3>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrivate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(173 80% 40%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(173 80% 40%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPublic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(280 65% 60%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(280 65% 60%)" stopOpacity={0} />
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
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            {showLegend && (
              <Legend
                wrapperStyle={{ paddingTop: 20 }}
                formatter={(value) => (
                  <span className="text-muted-foreground text-sm">{value}</span>
                )}
              />
            )}
            <Area
              type="monotone"
              dataKey="private"
              name="Private Debt"
              stroke="hsl(173 80% 40%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrivate)"
            />
            <Area
              type="monotone"
              dataKey="public"
              name="Public Debt"
              stroke="hsl(280 65% 60%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPublic)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
