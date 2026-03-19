import { motion } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl" style={{ background: 'var(--gradient-funky)' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/30 mb-6">
          <Send size={14} className="text-primary" />
          <span className="text-xs text-muted-foreground font-medium">Let's Connect</span>
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-6xl font-display font-extrabold text-foreground mb-4 tracking-tight"
        >
          Let's Build Something{" "}
          <span className="text-gradient-funky">Extraordinary</span>
        </motion.h2>
        <motion.p {...fadeInUp} className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-10">
          Whether you're launching a project or need IT expertise, I'm here to turn your vision into reality.
        </motion.p>

        <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:ahmedfb998@gmail.com"
            className="px-8 py-3.5 rounded-full text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Get in Touch <ArrowUpRight size={18} />
          </a>
          <a
            href="https://www.kaggle.com/ahmedfareedbakhsh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-border text-foreground hover:bg-secondary/50 transition-colors font-medium"
          >
            Kaggle Profile
          </a>
        </motion.div>

        <motion.p {...fadeInUp} className="text-muted-foreground text-sm mt-8">
          Available for full-time roles and collaborative projects.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
