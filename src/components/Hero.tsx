import { Github, Linkedin, ChevronDown, TrendingUp, Database, PieChart } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/8 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/6 blur-3xl pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Floating data icons */}
      <div className="absolute top-32 right-16 hidden lg:flex flex-col gap-6 opacity-20">
        <div className="animate-float w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
          <TrendingUp size={18} className="text-blue-400" />
        </div>
        <div className="animate-float w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center" style={{ animationDelay: '1.5s' }}>
          <Database size={18} className="text-cyan-400" />
        </div>
        <div className="animate-float w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center" style={{ animationDelay: '3s' }}>
          <PieChart size={18} className="text-blue-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
       {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Available for Work
        </div> */}

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="gradient-text">Ahsan Nawaz</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 font-medium mb-6 tracking-wide">
          Senior Data Analyst &amp; Power BI Expert
        </p>

        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforming raw data into compelling visual stories. I design enterprise-grade Power BI
          dashboards that drive informed decisions and measurable business impact.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[
            { value: '30+', label: 'Dashboards Built' },
            { value: '9+', label: 'Years Experience' },
            {/*{ value: '30+', label: 'Happy Clients' },*/}
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3 rounded-xl border border-blue-500/30 hover:border-blue-500/60 text-slate-300 hover:text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-blue-500/8 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/ahsannawaz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg card-bg text-sm text-slate-400 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ahsannawaz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg card-bg text-sm text-slate-400 hover:text-blue-400 font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-blue-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
