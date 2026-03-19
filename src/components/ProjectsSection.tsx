import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Employee Information Management System",
    subtitle: "Secure Enterprise Application",
    desc: "Secure ASP.NET application with role-based access and SQL Server integration. Features comprehensive employee data management, authentication system, and admin controls.",
    features: [
      "Role-based access control",
      "SQL Server database integration",
      "Secure authentication system",
    ],
    tags: ["ASP.NET", "ADO.NET", "SQL Server", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "02",
    title: "Tripify",
    subtitle: "Travel Planning Web Application",
    desc: "Responsive travel planning platform that enables users to explore destinations and organize trips efficiently. Focused on performance optimization, user-friendly design, and structured content delivery.",
    features: [
      "Destination exploration & search",
      "Trip organization tools",
      "Performance-optimized UI",
    ],
    tags: ["Web Development", "HTML", "CSS", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "03",
    title: "Machine Learning Prediction Projects",
    subtitle: "AI-Powered Classification & Regression",
    desc: "Multiple ML projects including Eye Disease Prediction, Diabetes Prediction, BMW Sales Prediction, and Pattern Recognition using KNN. Models integrated into interactive web apps using Gradio.",
    features: [
      "Logistic & Linear Regression models",
      "Real-time predictions via Gradio",
      "Data preprocessing & model evaluation",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Gradio"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-4">
          <div>
            <motion.p {...fadeInUp} className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              Portfolio Showcase
            </motion.p>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Featured<span className="text-gradient"> Projects</span>
            </motion.h2>
          </div>
          <motion.div {...fadeInUp} className="flex gap-4 text-muted-foreground text-sm">
            <span><strong className="text-foreground">{projects.length}</strong> Projects</span>
            <span><strong className="text-foreground">15+</strong> Technologies</span>
          </motion.div>
        </div>

        <div className="space-y-16 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="grid md:grid-cols-2 gap-8 items-center group"
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-xl border border-border ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4 text-xs text-muted-foreground font-mono">
                  {project.num} / 0{projects.length}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.desc}</p>
                <ul className="space-y-2 mb-5">
                  {project.features.map((f) => (
                    <li key={f} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
