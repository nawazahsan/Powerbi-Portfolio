import { useState } from 'react';
import { Mail, Send, Github, Linkedin, MessageSquare, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl font-bold text-white mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
            Have a project in mind? I'd love to discuss how we can build something impactful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-bg rounded-2xl p-6 space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'ahsan@example.com', href: 'mailto:ahsan.ntu@gmail.com' },
                { icon: Globe, label: 'Location', value: 'Germany · Remote Worldwide', href: null },
                { icon: Clock, label: 'Availability', value: 'Mon–Fri · 9am–6pm GMT+2', href: null },
                { icon: MessageSquare, label: 'Response Time', value: 'Usually within 24 hours', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/12 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-300 text-sm hover:text-blue-400 transition-colors font-medium">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="card-bg rounded-2xl p-6">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">Follow Me</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/nawazahsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-200 group"
                >
                  <Github size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-white text-xs font-medium">GitHub</p>
                    <p className="text-slate-500 text-xs">@ahsannawaz</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahsan-nawaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-200 group"
                >
                  <Linkedin size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                  <div>
                    <p className="text-white text-xs font-medium">LinkedIn</p>
                    <p className="text-slate-500 text-xs">Ahsan Nawaz</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card-bg rounded-2xl p-8">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mb-5">
                    <Send size={24} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-slate-800 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-slate-800 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Dashboard project inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-slate-800 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, data sources, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-slate-800 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/20"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
