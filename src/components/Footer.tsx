import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Ahmad-Fareed1", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/ahmadfareed", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ahmedfb998@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Gradient glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: 'var(--gradient-primary)' }} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold font-display text-gradient mb-4">AF</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Building elegant solutions to complex problems. Let's innovate together and create something extraordinary.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary/40 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/Ahmad_Fareed_CV_Modern_Style.docx" download className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:ahmedfb998@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Mail size={16} className="text-primary shrink-0" />
                ahmedfb998@gmail.com
              </a>
              <a href="tel:+923001234567" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Phone size={16} className="text-primary shrink-0" />
                +92 300 123 4567
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary shrink-0" />
                Karachi, Pakistan
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Ahmad Fareed. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-primary" /> & lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
