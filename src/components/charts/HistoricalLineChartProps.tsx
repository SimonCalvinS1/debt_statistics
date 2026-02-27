import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import { debtData } from "@/data/debtData";

interface HistoricalLineChartProps {
  showEvents?: boolean;
}

const economicEvents = [
  { year: 1991, label: "Economic Crisis" },
  { year: 2008, label: "Global Financial Crisis" },
  { year: 2020, label: "COVID-19 Pandemic" },
];

export const HistoricalLineChart = ({ showEvents = true }: HistoricalLineChartProps) => {
  const data = debtData.map((d) => ({
    year: d.year,
    private: d.privateDebt || null,
    central: d.centralGovernmentDebt || null,
    public: d.publicSectorDebt || null,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const event = economicEvents.find((e) => e.year === label);
      return (
        <div className="glass rounded-lg p-4 shadow-lg border border-border/50">
          <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
          {event && (
            <p className="text-xs text-chart-4 mb-2 font-medium">{event.label}</p>
          )}
          {payload.map((entry: any, index: number) => (
            entry.value !== null && (
              <p key={index} className="text-sm" style={{ color: entry.color }}>
                {entry.name}: {entry.value.toFixed(1)}%
              </p>
            )
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
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Historical Debt Trajectory (1950-2024)
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        75 years of debt evolution as percentage of GDP
      </p>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
              interval={9}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 110]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: 20 }}
              formatter={(value) => (
                <span className="text-muted-foreground text-sm">{value}</span>
              )}
            />
            {showEvents &&
              economicEvents.map((event) => (
                <ReferenceLine
                  key={event.year}
                  x={event.year}
                  stroke="hsl(340 75% 55%)"
                  strokeDasharray="4 4"
                  strokeOpacity={0.6}
                />
              ))}
            <Line
              type="monotone"
              dataKey="private"
              name="Private Debt"
              stroke="hsl(173 80% 40%)"
              strokeWidth={2}
              dot={false}
              connectNulls
            />
            <Line
              type="monotone"
              dataKey="central"
              name="Central Govt Debt"
              stroke="hsl(45 93% 58%)"
              strokeWidth={2}
              dot={false}
              connectNulls
            />
            <Line
              type="monotone"
              dataKey="public"
              name="Public Sector Debt"
              stroke="hsl(280 65% 60%)"
              strokeWidth={2}
              dot={false}
              connectNulls
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {showEvents && (
        <div className="flex gap-4 mt-4 justify-center flex-wrap">
          {economicEvents.map((event) => (
            <div
              key={event.year}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <div className="w-3 h-0.5 bg-chart-4" />
              <span>
                {event.year}: {event.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
