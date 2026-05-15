import { BarChart3, Database, Code2, Cloud, TrendingUp, Layers } from 'lucide-react';

const categories = [
  {
    icon: BarChart3,
    title: 'Power BI',
    color: 'blue',
    skills: [
      { name: 'Report Development', level: 98 },
      { name: 'Dashboard Design', level: 97 },
      { name: 'DAX Formulas', level: 95 },
      { name: 'Power Query (M)', level: 95 },
      { name: 'Row-Level Security', level: 90 },
    ],
  },
  {
    icon: Database,
    title: 'Data & SQL',
    color: 'cyan',
    skills: [
      { name: 'SQL Server (T-SQL)', level: 92 },
      { name: 'Data Modeling', level: 94 },
      { name: 'ETL / Data Pipeline', level: 88 },
      { name: 'Star & Snowflake Schema', level: 90 },
      { name: 'Azure Synapse', level: 82 },
    ],
  },
  {
    icon: Code2,
    title: 'Programming',
    color: 'blue',
    skills: [
      { name: 'Python', level: 87 },
      { name: 'DAX Studio', level: 92 },
      { name: 'Tabular Editor', level: 85 },
      { name: 'Excel / VBA', level: 88 },
      { name: 'R Studio', level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Platforms',
    color: 'cyan',
    skills: [
      { name: 'Power BI Service', level: 96 },
      { name: 'Azure Data Factory', level: 78 },
      { name: 'Azure SQL Database', level: 80 },
      { name: 'SharePoint Integration', level: 88 },
      { name: 'Power Automate', level: 82 },
      { name: 'n8n Automation', level: 75 },
    ],
  },
];

const tools = [
  { icon: TrendingUp, name: 'Power BI Desktop' },
  { icon: BarChart3, name: 'DAX Studio' },
  { icon: Database, name: 'SQL Server' },
  { icon: Layers, name: 'Tabular Editor' },
  { icon: Cloud, name: 'Azure' },
  { icon: Code2, name: 'Python' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500',
  cyan: 'bg-cyan-500',
};

const borderMap: Record<string, string> = {
  blue: 'border-blue-500/25 bg-blue-500/10 text-blue-400',
  cyan: 'border-cyan-500/25 bg-cyan-500/10 text-cyan-400',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl font-bold text-white mt-3">
            Skills &amp; <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            A comprehensive toolkit built over years of real-world data projects
          </p>
        </div>

        {/* Skill grids */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map(({ icon: Icon, title, color, skills }) => (
            <div key={title} className="card-bg rounded-2xl p-6 cursor-default">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${borderMap[color]}`}>
                <Icon size={18} />
              </div>
              <h3 className="text-white font-semibold text-sm mb-5">{title}</h3>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-slate-400 text-xs">{name}</span>
                      <span className="text-slate-500 text-xs">{level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${colorMap[color]} transition-all duration-1000`}
                        style={{ width: `${level}%`, opacity: 0.85 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools strip */}
        <div className="card-bg rounded-2xl p-8">
          <p className="text-xs text-slate-500 uppercase tracking-widest text-center mb-8 font-semibold">
            Tools &amp; Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-800/60 border border-blue-500/10 hover:border-blue-500/25 hover:bg-slate-800 transition-all duration-200 cursor-default"
              >
                <Icon size={15} className="text-blue-400" />
                <span className="text-slate-300 text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
