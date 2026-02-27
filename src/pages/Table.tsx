import { useState } from "react";
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
    <div className="w-full h-screen overflow-auto bg-gray-50 p-4">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="sticky top-0 bg-blue-600 text-white">
          <tr>
            <th
              onClick={() => handleSort("year")}
              className="border border-gray-400 px-4 py-3 text-left font-bold cursor-pointer hover:bg-blue-700"
            >
              Year{renderSortIndicator("year")}
            </th>
            <th
              onClick={() => handleSort("privateDebt")}
              className="border border-gray-400 px-4 py-3 text-left font-bold cursor-pointer hover:bg-blue-700"
            >
              Private Debt{renderSortIndicator("privateDebt")}
            </th>
            <th
              onClick={() => handleSort("householdDebt")}
              className="border border-gray-400 px-4 py-3 text-left font-bold cursor-pointer hover:bg-blue-700"
            >
              Household Debt{renderSortIndicator("householdDebt")}
            </th>
            <th
              onClick={() => handleSort("corporateDebt")}
              className="border border-gray-400 px-4 py-3 text-left font-bold cursor-pointer hover:bg-blue-700"
            >
              Corporate Debt{renderSortIndicator("corporateDebt")}
            </th>
            <th
              onClick={() => handleSort("publicSectorDebt")}
              className="border border-gray-400 px-4 py-3 text-left font-bold cursor-pointer hover:bg-blue-700"
            >
              Public Sector Debt{renderSortIndicator("publicSectorDebt")}
            </th>
            <th
              onClick={() => handleSort("generalGovernmentDebt")}
              className="border border-gray-400 px-4 py-3 text-left font-bold cursor-pointer hover:bg-blue-700"
            >
              General Gov. Debt{renderSortIndicator("generalGovernmentDebt")}
            </th>
            <th
              onClick={() => handleSort("centralGovernmentDebt")}
              className="border border-gray-400 px-4 py-3 text-left font-bold cursor-pointer hover:bg-blue-700"
            >
              Central Gov. Debt{renderSortIndicator("centralGovernmentDebt")}
            </th>
            <th
              onClick={() => handleSort("gdpBillions")}
              className="border border-gray-400 px-4 py-3 text-left font-bold cursor-pointer hover:bg-blue-700"
            >
              GDP (Billions){renderSortIndicator("gdpBillions")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={idx}
              className={
                idx % 2 === 0
                  ? "bg-white text-gray-900"
                  : "bg-gray-100 text-gray-900"
              }
            >
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {row.year}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.privateDebt?.toFixed(2) || "-"}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.householdDebt?.toFixed(2) || "-"}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.corporateDebt?.toFixed(2) || "-"}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.publicSectorDebt?.toFixed(2) || "-"}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.generalGovernmentDebt?.toFixed(2) || "-"}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.centralGovernmentDebt?.toFixed(2) || "-"}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.gdpBillions?.toFixed(2) || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
