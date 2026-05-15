import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    title: '9+ Years Experience',
    desc: 'Enterprise Power BI solutions across multiple industries',
  },
  {
    icon: Award,
    title: 'Microsoft LinkedIn Certified',
    desc: 'Power BI Data Analyst Certification',
  },
  {
    icon: GraduationCap,
    title: 'Information Engineering & Computer Science',
    desc: 'M.Sc. Computer Science with Data Science focus',
  },
  {
    icon: MapPin,
    title: 'Based in Germany',
    desc: 'Available for remote & on-site engagements globally',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl font-bold text-white mt-3">
            Turning Data into <span className="gradient-text">Decisions</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            Passionate about making complex data accessible and actionable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Text block */}
          <div>
            <div className="space-y-5 text-slate-400 leading-relaxed text-sm">
              <p>
                I'm <span className="text-white font-semibold">Ahsan Nawaz</span>, a Power BI Developer
                and Data Analyst with over 9 years of hands-on experience designing and deploying
                interactive business intelligence solutions for clients across finance, operations, Ecommerce,
                manufacturing, public safety, and retail.
              </p>
              <p>
                My expertise spans the full data lifecycle — from raw data ingestion and transformation
                in Power Query, to advanced DAX modeling and report publishing. I specialize in creating
                dashboards that aren't just visually impressive, but genuinely move the needle on
                strategic objectives.
              </p>
              <p>
                I believe great data visualization is equal parts science and storytelling. Every chart
                I build answers a question; every dashboard tells a story that empowers its audience
                to act with confidence.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Azure', 'AWS', 'Python', 'Excel', 'Data Modeling', 'n8n automation', 'Project Management'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
              >
                Let's Talk
              </a>
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-2.5 rounded-lg border border-blue-500/25 text-slate-300 hover:text-white text-sm font-medium transition-colors hover:border-blue-500/50"
              >
                See Portfolio
              </a>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-bg rounded-xl p-5 cursor-default">
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Icon size={16} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* Mini stats */}
            <div className="sm:col-span-2 card-bg rounded-xl p-5 flex justify-around text-center">
              {[
                { n: '30+', l: 'Projects' },
                { n: '9+', l: 'Years' },
                { n: '99%', l: 'Satisfaction' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className="text-xl font-bold gradient-text">{n}</div>
                  <div className="text-xs text-slate-500 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
