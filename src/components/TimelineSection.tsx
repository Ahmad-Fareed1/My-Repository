import { motion } from "framer-motion";

const timeline = [
  {
    year: "Foundation",
    title: "Learning the Basics",
    desc: "Started exploring IT fundamentals — HTML, CSS, and basic networking concepts. Built curiosity for how systems connect and communicate.",
  },
  {
    year: "B.IT",
    title: "Bachelor of Information Technology",
    desc: "Enrolled in B.IT program. Studied Mathematics & Statistics, Network Programming, System Administration, Routing & Switching, and Network Design.",
  },
  {
    year: "Building",
    title: "Enterprise Projects & ML",
    desc: "Built secure web applications with ASP.NET, designed hierarchical networks, administered servers, and applied machine learning models to real-world datasets.",
  },
  {
    year: "Now",
    title: "Scaling Up",
    desc: "Pursuing advanced certifications, building production-grade projects, and expanding into cloud infrastructure and data science applications.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const TimelineSection = () => {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.p {...fadeInUp} className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
          The Story So Far
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16">
          From Code to<span className="text-gradient"> Impact</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-primary border-2 border-background z-10 mt-2" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8 md:ml-auto"}`}>
                <span className="text-primary font-mono text-sm font-semibold">{item.year}</span>
                <h3 className="text-foreground font-bold text-lg mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
