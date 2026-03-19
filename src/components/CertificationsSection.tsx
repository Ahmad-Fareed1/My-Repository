import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const CertificationsSection = () => {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
          Certifications & <span className="text-gradient">Courses</span>
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="p-6 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/30 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-foreground font-semibold text-lg">Machine Learning & Data Science</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Completed hands-on training in Python, Data Analysis, and Machine Learning through Kaggle.
              </p>
            </div>
            <a
              href="https://www.kaggle.com/ahmedfareedbakhsh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors whitespace-nowrap"
            >
              View Kaggle Profile →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
