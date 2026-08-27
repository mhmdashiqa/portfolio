import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaGithub, FaYoutube, FaTelegram, FaLinkedin } from "react-icons/fa";
import { Send, MessageSquare, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Hello Ashiq,\n\nMy name is ${form.name} (${form.email || "No email provided"}).\n\n${form.message}`);
    window.open(`mailto:mohammedashiqansar@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  const handleWhatsApp = () => {
    if (!form.name || !form.message) return;
    const text = encodeURIComponent(`Hello Ashiq, my name is ${form.name}.\n\n${form.message}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white px-6 sm:px-12 md:px-20 py-24 overflow-hidden select-none"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white">
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="uppercase tracking-widest font-semibold">Get In Touch</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Let's Connect &{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg font-sans">
            Whether you have a project idea, infrastructure question, or internship opportunity, feel free to reach out directly.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">
                Contact Information
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                I am actively open to Cloud & DevOps opportunities, open-source collaborations, and system engineering discussions.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <a
                href="mailto:mohammedashiqansar@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl hover:border-white hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400">Direct Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors">
                    mohammedashiqansar@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-ashiq-a-b804562a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl hover:border-white hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors">
                    Mohammed Ashiq A
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/mhmdashiqa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl hover:border-white hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <FaGithub size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400">GitHub Repositories</div>
                  <div className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors">
                    github.com/mhmdashiqa
                  </div>
                </div>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-gray-400 font-semibold">
                Social Networks:
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/ashiq_anzar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://t.me/zeryn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  <FaTelegram size={20} />
                </a>

                <a
                  href="https://www.youtube.com/@ashzerynofficial4293"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-8 bg-black/80 border border-white/20 backdrop-blur-2xl shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Send Direct Message
                  </h3>
                  <p className="text-xs text-gray-400">
                    Will launch your mail client or WhatsApp instantly
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-white" />
              </div>

              <form onSubmit={handleSendMail} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Your Email / Contact Info
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all font-sans text-sm resize-none"
                  />
                </div>

                {/* Form Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={!form.name || !form.message}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-xs tracking-widest uppercase text-black bg-white hover:bg-gray-200 transition-all shadow-lg shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Mail</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    disabled={!form.name || !form.message}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-xs tracking-widest uppercase text-white border border-white/20 bg-white/10 hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <FaWhatsapp size={18} />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>

              {/* Status Note */}
              <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Usually responds within a few hours</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-16 border-t border-white/10 text-center space-y-3">
          <p className="text-sm font-mono tracking-widest text-gray-400">
            © {new Date().getFullYear()} <span className="text-white font-bold">MOHAMMED ASHIQ A</span>. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 font-sans">
            Built with React, TypeScript, Tailwind CSS & Framer Motion · Cloud & DevOps Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
