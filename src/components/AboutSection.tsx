import { motion } from "framer-motion";
import aboutArtwork from "@/assets/about-artwork.png";
import { User, Briefcase, Code2, GraduationCap } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

const stats = [
  { value: "3+", label: "Projects Built", icon: Briefcase },
  { value: "B.IT", label: "Education", icon: GraduationCap },
  { value: "10+", label: "Technologies", icon: Code2 },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden">
      {/* Background artwork accent */}
      <div className="absolute -right-40 top-0 w-[500px] h-[500px] opacity-10 pointer-events-none hidden lg:block">
        <img src={aboutArtwork} alt="" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/30 mb-4">
          <User size={14} className="text-primary" />
          <span className="text-xs text-muted-foreground font-medium">Get to Know Me</span>
        </motion.div>

        <motion.h2 {...fadeInUp} className="text-2xl md:text-5xl font-display font-extrabold text-foreground mb-3 tracking-tight">
          Turning Ideas Into <span className="text-gradient">Reality</span>
        </motion.h2>
        <motion.p {...fadeInUp} className="text-muted-foreground mb-10 md:mb-14 max-w-lg text-sm md:text-base">
          Developer by day, problem solver by nature. Let's build something amazing together.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div {...fadeInUp} className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Motivated IT student with hands-on academic and practical experience building and
              configuring enterprise-style networks, administering Windows and Linux systems,
              developing secure web applications, and implementing machine learning models.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Strong understanding of routing protocols, server management, database integration,
              and statistical analysis. Passionate about building scalable, real-world solutions
              that bridge the gap between theory and practice.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 md:p-5 rounded-xl bg-secondary/30 border border-border group hover:border-primary/30 transition-colors">
                  <stat.icon size={20} className="text-primary mx-auto mb-2 opacity-60" />
                  <div className="text-xl md:text-2xl font-extrabold text-gradient font-display">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Ahmad Fareed crafts high-performance applications with clean architecture
              and exceptional attention to security and scalability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
