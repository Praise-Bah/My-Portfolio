import { motion } from 'framer-motion';
import { ArrowUp, Heart, Download, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-primary-dark border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold">
                <span style={{ color: '#A0522D' }}>P</span>
                <span className="text-text-primary">B</span>
                <span style={{ color: '#E8DCC8' }}>B</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm mb-4">
              Software Engineer specializing in Backend/API Development, AI Engineering, and Full-Stack Solutions.
            </p>
            <motion.a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              style={{ backgroundColor: 'rgba(232, 220, 200, 0.1)', color: '#E8DCC8' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-text-secondary transition-colors text-sm hover:opacity-80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com/Praise-Bah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/20 backdrop-blur border border-white/10 rounded-lg transition-all duration-300 hover:opacity-80"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/praise-bah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/20 backdrop-blur border border-white/10 rounded-lg transition-all duration-300 hover:opacity-80"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:praisebag@gmail.com"
                className="p-2 bg-black/20 backdrop-blur border border-white/10 rounded-lg transition-all duration-300 hover:opacity-80"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-text-secondary text-sm">
              <a href="mailto:praisebag@gmail.com" className="transition-colors hover:opacity-80">
                praisebag@gmail.com
              </a>
            </p>
            <p className="text-text-secondary text-sm">
              <a href="tel:+237681297814" className="transition-colors hover:opacity-80">
                +237 681 297 814
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Praise Bucuzong Bah. Made with 
              <Heart size={14} style={{ color: '#A0522D', fill: '#A0522D' }} /> 
              in Yaoundé
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-black/20 backdrop-blur border border-white/10 rounded-full transition-all duration-300 group hover:opacity-80"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-text-secondary transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
