import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { debtData, DebtDataPoint } from "../data/debtData";

type SortKey = keyof DebtDataPoint;

export default function Table() {
  const [sortKey, setSortKey] = useState<SortKey>("year");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...debtData].sort((a, b) => {
    const aVal = a[sortKey] ?? 0;
    const bVal = b[sortKey] ?? 0;

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }

    return 0;
  });

  const renderSortIndicator = (key: SortKey) => {
    if (sortKey === key) {
      return sortOrder === "asc" ? " ↑" : " ↓";
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Debt <span className="text-gradient">Database</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore detailed debt statistics with interactive sorting and
              filtering
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border/50 rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b border-border/50 sticky top-0">
                  <tr>
                    <th
                      onClick={() => handleSort("year")}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      Year{renderSortIndicator("year")}
                    </th>
                    <th
                      onClick={() => handleSort("privateDebt")}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      Private Debt{renderSortIndicator("privateDebt")}
                    </th>
                    <th
                      onClick={() => handleSort("householdDebt")}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      Household Debt{renderSortIndicator("householdDebt")}
                    </th>
                    <th
                      onClick={() => handleSort("corporateDebt")}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      Corporate Debt{renderSortIndicator("corporateDebt")}
                    </th>
                    <th
                      onClick={() => handleSort("publicSectorDebt")}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      Public Sector Debt
                      {renderSortIndicator("publicSectorDebt")}
                    </th>
                    <th
                      onClick={() => handleSort("generalGovernmentDebt")}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      General Gov. Debt
                      {renderSortIndicator("generalGovernmentDebt")}
                    </th>
                    <th
                      onClick={() => handleSort("centralGovernmentDebt")}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      Central Gov. Debt
                      {renderSortIndicator("centralGovernmentDebt")}
                    </th>
                    <th
                      onClick={() => handleSort("gdpBillions")}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                      GDP (Billions){renderSortIndicator("gdpBillions")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {sortedData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-secondary/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">
                        {row.year}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.privateDebt?.toFixed(2) || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.householdDebt?.toFixed(2) || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.corporateDebt?.toFixed(2) || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.publicSectorDebt?.toFixed(2) || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.generalGovernmentDebt?.toFixed(2) || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.centralGovernmentDebt?.toFixed(2) || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.gdpBillions?.toFixed(2) || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
