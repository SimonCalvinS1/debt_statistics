import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { DebtCompositionChart } from "@/components/charts/DebtCompositionChart";
import { DecadeComparisonChart } from "@/components/charts/DecadeComparisonChart";
import { getLatestData, debtData } from "@/data/debtData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Analysis = () => {
  const latest = getLatestData();

  // Prepare household vs corporate data
  const householdVsCorporate = debtData
    .filter((d) => d.householdDebt && d.corporateDebt)
    .map((d) => ({
      year: d.year,
      household: d.householdDebt,
      corporate: d.corporateDebt,
    }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-4 shadow-lg border border-border/50">
          <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value?.toFixed(1)}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">
              International Debt <span className="text-gradient">Statistics Analysis</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Deep dive into the structure and composition of India's debt over
              time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-chart-1 mb-2">
                {(
                  (latest.privateDebt || 0) + (latest.publicSectorDebt || 0)
                ).toFixed(1)}
                %
              </div>
              <p className="text-sm text-muted-foreground">Total Debt to GDP</p>
              <p className="text-xs text-muted-foreground mt-2">
                Combined private and public sector debt
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/50 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-chart-2 mb-2">
                {(
                  ((latest.householdDebt || 0) / (latest.privateDebt || 1)) *
                  100
                ).toFixed(0)}
                %
              </div>
              <p className="text-sm text-muted-foreground">
                Household Share of Private Debt
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Portion of private debt held by households
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border/50 rounded-xl p-6"
            >
              <div className="text-3xl font-bold text-chart-3 mb-2">
                {(latest.gdpBillions! / 1000).toFixed(0)}T
              </div>
              <p className="text-sm text-muted-foreground">
                GDP in {latest.year}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Nominal GDP in Indian Rupees
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DebtCompositionChart />
            <DecadeComparisonChart />
          </div>
        </div>
      </section>

      {/* Household vs Corporate */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border/50 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Household vs Corporate Debt
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Comparison of private sector debt composition since 2007
            </p>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={householdVsCorporate}>
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
                  <Legend
                    wrapperStyle={{ paddingTop: 20 }}
                    formatter={(value) => (
                      <span className="text-muted-foreground text-sm">
                        {value}
                      </span>
                    )}
                  />
                  <Line
                    type="monotone"
                    dataKey="household"
                    name="Household Debt"
                    stroke="hsl(173 80% 40%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(173 80% 40%)", strokeWidth: 0, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="corporate"
                    name="Corporate Debt"
                    stroke="hsl(280 65% 60%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(280 65% 60%)", strokeWidth: 0, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <p className="text-sm text-muted-foreground text-center">
            Data sourced from IMF Global Debt Database • Last Updated: December
            2019
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Analysis;
