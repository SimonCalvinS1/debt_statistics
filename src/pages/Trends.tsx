import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { HistoricalLineChart } from "@/components/charts/HistoricalLineChartProps";
import { debtData } from "@/data/debtData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

const Trends = () => {
  // Prepare GDP growth data
  const gdpData = debtData
    .filter((d) => d.gdpBillions)
    .map((d, i, arr) => ({
      year: d.year,
      gdp: d.gdpBillions! / 1000,
      growth:
        i > 0 && arr[i - 1].gdpBillions
          ? ((d.gdpBillions! - arr[i - 1].gdpBillions!) /
              arr[i - 1].gdpBillions!) *
            100
          : 0,
    }));

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-4 shadow-lg border border-border/50">
          <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
          {payload.map((entry: (typeof payload)[number], index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toFixed(1)}
              {entry.dataKey === "growth" ? "%" : "T"}
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
              Historical <span className="text-gradient">Trends</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              75 years of economic evolution from 1950 to 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Events */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <div className="flex items-center gap-3 bg-card border border-border/50 rounded-lg px-4 py-3">
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div>
                <p className="text-sm font-medium text-foreground">1991</p>
                <p className="text-xs text-muted-foreground">
                  Balance of Payments Crisis & Liberalization
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card border border-border/50 rounded-lg px-4 py-3">
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div>
                <p className="text-sm font-medium text-foreground">2008</p>
                <p className="text-xs text-muted-foreground">
                  Global Financial Crisis
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card border border-border/50 rounded-lg px-4 py-3">
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div>
                <p className="text-sm font-medium text-foreground">2020</p>
                <p className="text-xs text-muted-foreground">
                  COVID-19 Pandemic
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Historical Chart */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <HistoricalLineChart showEvents={true} />
        </div>
      </section>

      {/* GDP Growth Chart */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border/50 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              GDP Trajectory
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Nominal GDP growth over the decades (in Trillions ₹)
            </p>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={gdpData}>
                  <defs>
                    <linearGradient
                      id="colorGdpArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="hsl(45 93% 58%)"
                        stopOpacity={0.4}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(45 93% 58%)"
                        stopOpacity={0}
                      />
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
                    interval={9}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
                    tickFormatter={(value) => `₹${value}T`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="gdp"
                    name="GDP"
                    stroke="hsl(45 93% 58%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorGdpArea)"
                  />
                </AreaChart>
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

export default Trends;
