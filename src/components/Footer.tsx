import { BarChart3, Github, Linkedin, Heart } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-blue-500/10 py-12" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/25 flex items-center justify-center">
              <BarChart3 size={15} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Ahsan Nawaz</p>
              <p className="text-slate-600 text-xs">Power BI Expert</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className="text-slate-500 hover:text-blue-400 text-xs font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/nawazahsan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-all"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com/in/ahsan-nawaz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>

        <div className="section-divider my-8" />

        <p className="text-center text-slate-600 text-xs flex items-center justify-center gap-1.5">
          &copy; {new Date().getFullYear()} Ahsan Nawaz. Crafted with
          <Heart size={11} className="text-blue-500 fill-blue-500" />
          and data.
        </p>
      </div>
    </footer>
  );
}
