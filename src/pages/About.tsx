import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { ExternalLink, Database, FileText, Globe } from "lucide-react";

const sources = [
  {
    abbr: "BIS",
    name: "Bank of International Settlements",
    type: "International",
  },
  { abbr: "IMF", name: "International Monetary Fund", type: "International" },
  { abbr: "WEO", name: "World Economic Outlook", type: "IMF Publication" },
  { abbr: "RBI", name: "Reserve Bank of India", type: "National" },
  { abbr: "MOF", name: "Ministry of Finance India", type: "National" },
  { abbr: "WDI", name: "World Development Indicators", type: "World Bank" },
];

const About = () => {
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
              About the <span className="text-gradient">Data</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the methodology and sources behind the Global Debt
              Database
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Global Debt Database
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                The Global Debt Database (GDD) is the result of a multiyear
                investigative process that started with the October 2016 Fiscal
                Monitor. The dataset comprises total gross debt of the (private
                and public) nonfinancial sector for an unbalanced panel of 190
                economies.
              </p>
              <p className="text-muted-foreground">
                This visualization focuses specifically on India's debt data,
                dating back to 1950, providing over 75 years of historical
                perspective on debt dynamics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/50 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-chart-2/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-chart-2" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Methodology
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                All debt figures are expressed as a percentage of GDP, allowing
                for meaningful comparisons across time periods with vastly
                different nominal values.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-chart-1" />
                  <span className="text-sm text-muted-foreground">
                    Private Debt: Loans and debt securities
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-chart-2" />
                  <span className="text-sm text-muted-foreground">
                    Public Debt: General government obligations
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-chart-3" />
                  <span className="text-sm text-muted-foreground">
                    GDP: Nominal figures in local currency
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Data Sources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sources.map((source, index) => (
                <motion.div
                  key={source.abbr}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-card border border-border/50 rounded-lg p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {source.abbr}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {source.name}
                    </p>
                    <p className="text-xs text-primary">{source.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border/50 rounded-xl p-8"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Citation
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 text-muted-foreground italic mb-4">
              Mbaye, S., Moreno-Badia, M., and K. Chae. 2018. "Global Debt
              Database: Methodology and Sources," IMF Working Paper 18/111,
              International Monetary Fund, Washington, DC.
            </blockquote>
            <a
              href="https://www.imf.org/en/Publications/WP/Issues/2018/05/14/Global-Debt-Database-Methodology-and-Sources-45838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>View Original Publication</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card border border-border/50 rounded-xl p-8"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Built With
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Recharts",
                "Framer Motion",
                "Vite",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-muted rounded-lg text-sm text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
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

export default About;
