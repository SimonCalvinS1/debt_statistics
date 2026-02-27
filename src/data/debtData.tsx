// Global Debt Database - India (IMF)
// Source: Mbaye, S., Moreno-Badia, M., and K. Chae. 2018. "Global Debt Database: Methodology and Sources"

export interface DebtDataPoint {
  year: number;
  privateDebt?: number;
  householdDebt?: number;
  corporateDebt?: number;
  publicSectorDebt?: number;
  generalGovernmentDebt?: number;
  centralGovernmentDebt?: number;
  gdpBillions?: number;
}

export const debtData: DebtDataPoint[] = [
  { year: 1950, centralGovernmentDebt: 26.13, gdpBillions: 128.04 },
  { year: 1951, privateDebt: 16.81, centralGovernmentDebt: 25.18, gdpBillions: 135.08 },
  { year: 1952, privateDebt: 16.75, centralGovernmentDebt: 26.39, gdpBillions: 132.06 },
  { year: 1953, privateDebt: 16.20, centralGovernmentDebt: 24.65, gdpBillions: 139.65 },
  { year: 1954, privateDebt: 18.65, centralGovernmentDebt: 24.86, gdpBillions: 130.45 },
  { year: 1955, privateDebt: 19.91, centralGovernmentDebt: 29.63, gdpBillions: 136.49 },
  { year: 1956, privateDebt: 18.87, centralGovernmentDebt: 25.48, gdpBillions: 154.18 },
  { year: 1957, privateDebt: 20.48, centralGovernmentDebt: 27.38, gdpBillions: 156.34 },
  { year: 1958, privateDebt: 20.38, centralGovernmentDebt: 23.73, gdpBillions: 172.45 },
  { year: 1959, privateDebt: 22.42, centralGovernmentDebt: 33.58, gdpBillions: 175.83 },
  { year: 1960, privateDebt: 22.79, centralGovernmentDebt: 34.46, gdpBillions: 180.34 },
  { year: 1961, privateDebt: 22.46, centralGovernmentDebt: 36.79, gdpBillions: 190.26 },
  { year: 1962, privateDebt: 23.03, centralGovernmentDebt: 36.21, gdpBillions: 204.56 },
  { year: 1963, privateDebt: 24.83, centralGovernmentDebt: 35.43, gdpBillions: 209.56 },
  { year: 1964, privateDebt: 22.28, centralGovernmentDebt: 33.81, gdpBillions: 255.75 },
  { year: 1965, privateDebt: 23.64, centralGovernmentDebt: 36.73, gdpBillions: 267.22 },
  { year: 1966, privateDebt: 23.46, centralGovernmentDebt: 36.38, gdpBillions: 299.52 },
  { year: 1967, privateDebt: 20.87, centralGovernmentDebt: 33.99, gdpBillions: 367.97 },
  { year: 1968, privateDebt: 21.62, centralGovernmentDebt: 40.31, gdpBillions: 389.23 },
  { year: 1969, privateDebt: 22.67, centralGovernmentDebt: 38.78, gdpBillions: 421.20 },
  { year: 1970, privateDebt: 24.07, centralGovernmentDebt: 38.18, gdpBillions: 468.20 },
  { year: 1971, privateDebt: 25.69, centralGovernmentDebt: 37.58, gdpBillions: 501.20 },
  { year: 1972, privateDebt: 26.48, centralGovernmentDebt: 37.16, gdpBillions: 552.50 },
  { year: 1973, privateDebt: 27.21, centralGovernmentDebt: 34.13, gdpBillions: 672.40 },
  { year: 1974, privateDebt: 26.31, centralGovernmentDebt: 30.61, gdpBillions: 793.80 },
  { year: 1975, privateDebt: 29.96, centralGovernmentDebt: 31.38, gdpBillions: 852.10 },
  { year: 1976, privateDebt: 35.83, centralGovernmentDebt: 33.26, gdpBillions: 918.10 },
  { year: 1977, privateDebt: 35.80, centralGovernmentDebt: 35.94, gdpBillions: 1040.20 },
  { year: 1978, privateDebt: 39.71, centralGovernmentDebt: 35.91, gdpBillions: 1126.70 },
  { year: 1979, privateDebt: 42.82, centralGovernmentDebt: 37.91, gdpBillions: 1235.60 },
  { year: 1980, privateDebt: 41.94, centralGovernmentDebt: 38.03, gdpBillions: 1470.60 },
  { year: 1981, privateDebt: 43.38, centralGovernmentDebt: 37.18, gdpBillions: 1727.80 },
  { year: 1982, privateDebt: 46.47, centralGovernmentDebt: 41.70, gdpBillions: 1932.60 },
  { year: 1983, privateDebt: 46.46, centralGovernmentDebt: 39.65, gdpBillions: 2250.70 },
  { year: 1984, privateDebt: 48.99, centralGovernmentDebt: 41.56, gdpBillions: 2521.90 },
  { year: 1985, privateDebt: 48.99, centralGovernmentDebt: 44.28, gdpBillions: 2845.30 },
  { year: 1986, privateDebt: 50.04, centralGovernmentDebt: 47.86, gdpBillions: 3183.70 },
  { year: 1987, privateDebt: 50.20, centralGovernmentDebt: 48.87, gdpBillions: 3618.70 },
  { year: 1988, privateDebt: 52.56, centralGovernmentDebt: 48.91, gdpBillions: 4293.60 },
  { year: 1989, privateDebt: 53.09, centralGovernmentDebt: 50.46, gdpBillions: 4932.80 },
  { year: 1990, privateDebt: 52.12, centralGovernmentDebt: 50.77, gdpBillions: 5761.10 },
  { year: 1991, privateDebt: 48.80, publicSectorDebt: 76.65, centralGovernmentDebt: 50.11, gdpBillions: 6622.60 },
  { year: 1992, privateDebt: 51.17, publicSectorDebt: 78.76, centralGovernmentDebt: 42.83, gdpBillions: 7612.00 },
  { year: 1993, privateDebt: 48.56, publicSectorDebt: 78.33, centralGovernmentDebt: 51.77, gdpBillions: 8759.90 },
  { year: 1994, privateDebt: 47.64, publicSectorDebt: 74.75, centralGovernmentDebt: 49.73, gdpBillions: 10275.70 },
  { year: 1995, privateDebt: 49.49, publicSectorDebt: 70.88, centralGovernmentDebt: 47.43, gdpBillions: 12055.80 },
  { year: 1996, privateDebt: 48.32, publicSectorDebt: 67.13, centralGovernmentDebt: 45.66, gdpBillions: 13948.20 },
  { year: 1997, privateDebt: 49.04, publicSectorDebt: 69.01, gdpBillions: 15452.90 },
  { year: 1998, privateDebt: 49.59, householdDebt: 0.01, corporateDebt: 49.58, publicSectorDebt: 69.28, generalGovernmentDebt: 55.84, gdpBillions: 17723.00 },
  { year: 1999, privateDebt: 52.81, householdDebt: 0.01, corporateDebt: 52.79, publicSectorDebt: 71.27, generalGovernmentDebt: 56.29, gdpBillions: 19882.60 },
  { year: 2000, privateDebt: 57.47, householdDebt: 0.01, corporateDebt: 57.46, publicSectorDebt: 74.94, generalGovernmentDebt: 56.57, gdpBillions: 21398.90 },
  { year: 2001, privateDebt: 58.65, householdDebt: 0.01, corporateDebt: 58.63, publicSectorDebt: 80.11, generalGovernmentDebt: 58.01, gdpBillions: 23152.40 },
  { year: 2002, privateDebt: 64.64, householdDebt: 0.01, corporateDebt: 64.63, publicSectorDebt: 84.30, generalGovernmentDebt: 60.87, gdpBillions: 24926.10 },
  { year: 2003, privateDebt: 64.19, householdDebt: 0.02, corporateDebt: 64.17, publicSectorDebt: 85.88, generalGovernmentDebt: 58.22, gdpBillions: 27925.30 },
  { year: 2004, privateDebt: 70.71, householdDebt: 0.02, corporateDebt: 70.69, publicSectorDebt: 84.89, generalGovernmentDebt: 56.10, gdpBillions: 31863.30 },
  { year: 2005, privateDebt: 79.12, householdDebt: 0.02, corporateDebt: 79.10, publicSectorDebt: 82.38, generalGovernmentDebt: 53.06, gdpBillions: 36321.30 },
  { year: 2006, privateDebt: 86.87, householdDebt: 0.02, corporateDebt: 86.84, publicSectorDebt: 77.94, generalGovernmentDebt: 49.55, gdpBillions: 42546.30 },
  { year: 2007, privateDebt: 92.25, householdDebt: 40.76, corporateDebt: 51.49, publicSectorDebt: 75.46, generalGovernmentDebt: 48.29, gdpBillions: 48986.60 },
  { year: 2008, privateDebt: 101.57, householdDebt: 40.97, corporateDebt: 60.60, publicSectorDebt: 74.37, generalGovernmentDebt: 48.49, gdpBillions: 55141.50 },
  { year: 2009, privateDebt: 96.80, householdDebt: 35.32, corporateDebt: 61.48, publicSectorDebt: 72.77, generalGovernmentDebt: 50.22, gdpBillions: 63664.10 },
  { year: 2010, privateDebt: 103.04, householdDebt: 35.17, corporateDebt: 67.87, publicSectorDebt: 67.70, generalGovernmentDebt: 45.62, gdpBillions: 76344.70 },
  { year: 2011, privateDebt: 105.14, householdDebt: 34.49, corporateDebt: 70.66, publicSectorDebt: 68.65, generalGovernmentDebt: 45.77, gdpBillions: 87363.30 },
  { year: 2012, privateDebt: 104.11, householdDebt: 33.62, corporateDebt: 70.49, publicSectorDebt: 67.98, generalGovernmentDebt: 47.09, gdpBillions: 99440.10 },
  { year: 2013, privateDebt: 95.08, householdDebt: 32.94, corporateDebt: 62.14, publicSectorDebt: 67.71, generalGovernmentDebt: 46.98, gdpBillions: 112335.20 },
  { year: 2014, privateDebt: 98.22, householdDebt: 32.70, corporateDebt: 65.52, publicSectorDebt: 67.10, generalGovernmentDebt: 46.03, gdpBillions: 124679.60 },
  { year: 2015, privateDebt: 94.37, householdDebt: 32.40, corporateDebt: 61.97, publicSectorDebt: 69.05, generalGovernmentDebt: 45.77, gdpBillions: 137718.70 },
  { year: 2016, privateDebt: 85.43, householdDebt: 32.04, corporateDebt: 53.40, publicSectorDebt: 68.94, generalGovernmentDebt: 45.53, gdpBillions: 153916.70 },
  { year: 2017, privateDebt: 97.89, householdDebt: 33.25, corporateDebt: 64.65, publicSectorDebt: 69.67, generalGovernmentDebt: 44.27, gdpBillions: 170900.40 },
  { year: 2018, privateDebt: 91.81, householdDebt: 34.14, corporateDebt: 57.67, publicSectorDebt: 70.39, generalGovernmentDebt: 44.13, gdpBillions: 188996.70 },
  { year: 2019, privateDebt: 86.24, householdDebt: 35.95, corporateDebt: 50.29, publicSectorDebt: 75.04, generalGovernmentDebt: 46.70, gdpBillions: 201035.90 },
  { year: 2020, privateDebt: 93.46, householdDebt: 40.12, corporateDebt: 53.34, publicSectorDebt: 88.43, generalGovernmentDebt: 55.03, gdpBillions: 198541.00 },
  { year: 2021, privateDebt: 87.42, householdDebt: 37.57, corporateDebt: 49.85, publicSectorDebt: 83.49, generalGovernmentDebt: 54.42, gdpBillions: 235974.00 },
  { year: 2022, privateDebt: 86.40, householdDebt: 38.90, corporateDebt: 47.50, publicSectorDebt: 82.17, generalGovernmentDebt: 54.48, gdpBillions: 268904.70 },
  { year: 2023, privateDebt: 88.71, householdDebt: 39.94, corporateDebt: 48.77, publicSectorDebt: 81.23, generalGovernmentDebt: 55.03, gdpBillions: 301229.60 },
  { year: 2024, privateDebt: 90.55, householdDebt: 40.77, corporateDebt: 49.78, publicSectorDebt: 81.29, generalGovernmentDebt: 53.82, gdpBillions: 330728.48 },
];

// Get latest year data
export const getLatestData = () => debtData[debtData.length - 1];

// Get data for specific year range
export const getDataByRange = (startYear: number, endYear: number) =>
  debtData.filter((d) => d.year >= startYear && d.year <= endYear);

// Get data for recent years (for charts)
export const getRecentData = (years: number = 20) =>
  debtData.slice(-years);

// Calculate total debt for a year
export const getTotalDebt = (data: DebtDataPoint) =>
  (data.privateDebt || 0) + (data.publicSectorDebt || data.centralGovernmentDebt || 0);

// Get decade averages
export const getDecadeAverages = () => {
  const decades = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
  return decades.map((decade) => {
    const decadeData = debtData.filter(
      (d) => d.year >= decade && d.year < decade + 10
    );
    const avgPrivate =
      decadeData.reduce((sum, d) => sum + (d.privateDebt || 0), 0) /
      decadeData.filter((d) => d.privateDebt).length || 0;
    const avgPublic =
      decadeData.reduce(
        (sum, d) => sum + (d.publicSectorDebt || d.centralGovernmentDebt || 0),
        0
      ) / decadeData.length;
    return {
      decade: `${decade}s`,
      privateDebt: Math.round(avgPrivate * 10) / 10,
      publicDebt: Math.round(avgPublic * 10) / 10,
    };
  });
};
