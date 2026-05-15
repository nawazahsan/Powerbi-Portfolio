import { ExternalLink, BarChart2, TrendingUp, ShoppingCart, Users, Activity, DollarSign } from 'lucide-react';

const projects = [
  {
    icon: DollarSign,
    title: 'Financial Performance Dashboard',
    category: 'Finance',
    desc: 'Executive-level P&L, cash flow, and budget variance analysis with drill-through capabilities.',
    tags: ['DAX', 'SQL Server', 'Power BI Service'],
  },
  {
    icon: ShoppingCart,
    title: 'Retail Sales Analytics',
    category: 'Retail',
    desc: 'Multi-store sales KPIs, inventory turnover, and customer segmentation across 50+ locations.',
    tags: ['Power Query', 'RLS', 'Paginated Reports'],
  },
  {
    icon: Activity,
    title: 'Operations & KPI Tracker',
    category: 'Manufacturing',
    desc: 'Real-time production metrics, downtime analysis, and OEE reporting integrated with ERP.',
    tags: ['Azure SQL', 'DirectQuery', 'Alerts'],
  },
  {
    icon: Users,
    title: 'HR Workforce Analytics',
    category: 'Human Resources',
    desc: 'Headcount, attrition, performance, and diversity reporting with self-service capabilities.',
    tags: ['Power BI Embedded', 'SharePoint', 'Python'],
  },
  {
    icon: TrendingUp,
    title: 'Marketing ROI Dashboard',
    category: 'Marketing',
    desc: 'Campaign attribution, funnel analysis, and channel ROI across digital and traditional media.',
    tags: ['Power BI Service', 'REST API', 'Custom Visuals'],
  },
  {
    icon: BarChart2,
    title: 'Supply Chain Intelligence',
    category: 'Logistics',
    desc: 'End-to-end supply chain visibility — procurement, fulfillment, and vendor scorecards.',
    tags: ['Star Schema', 'Row-level Security', 'Mobile'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl font-bold text-white mt-3">
            Featured <span className="gradient-text">Dashboards</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            Real-world Power BI solutions delivering actionable insights across industries
          </p>
        </div>

        {/* Live Power BI embed */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Live Demo</span>
          </div>

          <div className="card-bg rounded-2xl overflow-hidden glow-blue gradient-border">
            <div className="p-5 border-b border-blue-500/10 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-sm">Ahsan Nawaz — Power BI Portfolio</h3>
                <p className="text-slate-500 text-xs mt-0.5">Interactive live dashboard · Hosted on Power BI Service</p>
              </div>
              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiYjJhZDE5YjYtMjZhMy00YjdjLTg3ODMtZDMxOGVjZDI0ODFmIiwidCI6IjA3ZWY4NWRlLTNkMDctNDEwZC1iNzJkLTBjZDRjNzc2Y2U3OCIsImMiOjh9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                <ExternalLink size={13} />
                Open Full Screen
              </a>
            </div>

            {/* Responsive iframe wrapper */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%', minHeight: '380px' }}>
              <iframe
                title="Ahsan Nawaz PBI Portfolio"
                src="https://app.powerbi.com/view?r=eyJrIjoiYjJhZDE5YjYtMjZhMy00YjdjLTg3ODMtZDMxOGVjZDI0ODFmIiwidCI6IjA3ZWY4NWRlLTNkMDctNDEwZC1iNzJkLTBjZDRjNzc2Y2U3OCIsImMiOjh9"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ minHeight: '380px' }}
              />
            </div>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ icon: Icon, title, category, desc, tags }) => (
            <div
              key={title}
              className="card-bg rounded-2xl p-6 cursor-default group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/12 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={17} className="text-blue-400" />
                </div>
                <span className="text-xs text-blue-400/70 font-medium bg-blue-500/8 border border-blue-500/15 px-2.5 py-1 rounded-full">
                  {category}
                </span>
              </div>

              <h3 className="text-white font-semibold text-sm mb-2.5 group-hover:text-blue-100 transition-colors">
                {title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">{desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
