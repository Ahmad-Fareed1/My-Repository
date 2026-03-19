import { motion } from "framer-motion";
import { Globe, Server, Code, Brain, Database } from "lucide-react";

const services = [
  { icon: Globe, title: "Networking", desc: "Enterprise network design with VLAN, OSPF, EIGRP, NAT, and link aggregation. Scalable hierarchical architectures from access to core.", color: "text-cyan-400" },
  { icon: Server, title: "System Admin", desc: "Windows Server & Linux administration. Active Directory, GPO, PowerShell, Bash scripting, backup & recovery solutions.", color: "text-blue-400" },
  { icon: Code, title: "Web Development", desc: "Secure web applications with ASP.NET, ADO.NET, SQL Server integration. Authentication, database connectivity, and responsive design.", color: "text-pink-400" },
  { icon: Brain, title: "Data & ML", desc: "Machine learning models with Logistic Regression, KNN, and Linear Regression. Data preprocessing, model evaluation, and Gradio deployments.", color: "text-purple-400" },
  { icon: Database, title: "Database Integration", desc: "SQL Server design and optimization. Secure data access patterns, role-based access control, and enterprise data management.", color: "text-yellow-400" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-24 px-5 md:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors">
                <s.icon size={22} className={s.color} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
