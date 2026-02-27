import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { getLatestData } from "@/data/debtData";

export const DebtCompositionChart = () => {
  const latest = getLatestData();

  const data = [
    { name: "Household Debt", value: latest.householdDebt || 0, color: "hsl(173 80% 40%)" },
    { name: "Corporate Debt", value: latest.corporateDebt || 0, color: "hsl(200 80% 50%)" },
    { name: "Public Sector", value: latest.publicSectorDebt || 0, color: "hsl(280 65% 60%)" },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-4 shadow-lg border border-border/50">
          <p className="text-sm font-semibold" style={{ color: payload[0].payload.color }}>
            {payload[0].name}
          </p>
          <p className="text-lg font-bold text-foreground">
            {payload[0].value.toFixed(1)}% of GDP
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
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-card border border-border/50 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Debt Composition ({latest.year})
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Breakdown by sector as % of GDP
      </p>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: 20 }}
              formatter={(value) => (
                <span className="text-muted-foreground text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
