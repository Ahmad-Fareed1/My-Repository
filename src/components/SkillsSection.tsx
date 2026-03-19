import { motion } from "framer-motion";

type TechItem = { name: string; slug: string; color: string };

const techRow1: TechItem[] = [
  { name: "ASP.NET", slug: "dotnet", color: "512BD4" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "SQL Server", slug: "microsoftsqlserver", color: "CC2927" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css3", color: "1572B6" },
  { name: "ADO.NET", slug: "dotnet", color: "512BD4" },
  { name: "PowerShell", slug: "powershell", color: "5391FE" },
  { name: "Bash", slug: "gnubash", color: "4EAA25" },
  { name: "Gradio", slug: "gradio", color: "F97316" },
  { name: "Pandas", slug: "pandas", color: "150458" },
  { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
  { name: "NumPy", slug: "numpy", color: "013243" },
  { name: "Git", slug: "git", color: "F05032" },
];

const techRow2: TechItem[] = [
  { name: "Windows Server", slug: "windows", color: "0078D4" },
  { name: "Ubuntu Linux", slug: "ubuntu", color: "E95420" },
  { name: "Active Directory", slug: "microsoft", color: "5E5E5E" },
  { name: "Cisco", slug: "cisco", color: "1BA0D7" },
  { name: "OSPF", slug: "cisco", color: "1BA0D7" },
  { name: "EIGRP", slug: "cisco", color: "1BA0D7" },
  { name: "Wireshark", slug: "wireshark", color: "1679A7" },
  { name: "VMware", slug: "vmware", color: "607078" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Matplotlib", slug: "python", color: "3776AB" },
  { name: "NLTK", slug: "python", color: "3776AB" },
  { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
  { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
];

const skillGroups = [
  {
    category: "Networking",
    color: "from-cyan-500/20 to-transparent",
    items: ["VLAN (802.1Q)", "Inter-VLAN Routing", "OSPF", "EIGRP", "Static Routing", "NAT", "STP", "LACP", "QoS", "SNMP"],
  },
  {
    category: "System Admin",
    color: "from-blue-500/20 to-transparent",
    items: ["Windows Server", "Ubuntu Linux", "Active Directory", "GPO", "PowerShell", "Bash", "Backup & Recovery"],
  },
  {
    category: "Web Development",
    color: "from-pink-500/20 to-transparent",
    items: ["ASP.NET", "ADO.NET", "SQL Server", "HTML", "CSS", "Secure Authentication"],
  },
  {
    category: "Data & ML",
    color: "from-purple-500/20 to-transparent",
    items: ["Python", "Logistic Regression", "Linear Regression", "KNN", "Hypothesis Testing", "Z-Score", "Gradio", "Pandas", "Scikit-learn", "NumPy", "NLTK", "Matplotlib"],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const TechIcon = ({ name, slug, color }: TechItem) => (
  <div className="flex flex-col items-center gap-2.5 min-w-[80px] md:min-w-[100px] px-3 md:px-5">
    <div
      className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-card/80 border border-border flex items-center justify-center transition-all hover:bg-secondary/70 hover:border-primary/30 hover:scale-110"
      style={{ boxShadow: `0 0 0px transparent` }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 20px #${color}44`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0px transparent`; }}
    >
      <img
        src={`https://cdn.simpleicons.org/${slug}/${color}`}
        alt={`${name} logo`}
        width={28}
        height={28}
        className="w-7 h-7"
        loading="lazy"
      />
    </div>
    <span className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">{name}</span>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeInUp} className="text-primary text-xs md:text-sm uppercase tracking-widest mb-3 text-center font-semibold">
          My Arsenal
        </motion.p>
        <motion.h2 {...fadeInUp} className="text-2xl md:text-5xl font-extrabold text-foreground mb-3 text-center tracking-tight font-display">
          Technologies I <span className="text-gradient">Master</span>
        </motion.h2>
        <motion.p {...fadeInUp} className="text-muted-foreground text-center mb-12 md:mb-16 max-w-lg mx-auto text-sm md:text-base px-4">
          Building modern applications with cutting-edge tools and frameworks
        </motion.p>

        {/* Marquee Row 1 */}
        <div className="overflow-hidden mb-8 md:mb-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...techRow1, ...techRow1].map((tech, i) => (
              <TechIcon key={`r1-${i}`} {...tech} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="overflow-hidden mb-14 md:mb-20 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
            {[...techRow2, ...techRow2].map((tech, i) => (
              <TechIcon key={`r2-${i}`} {...tech} />
            ))}
          </div>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className={`p-5 md:p-6 rounded-2xl border border-border bg-card/50 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} pointer-events-none`} />
              <div className="relative">
                <h3 className="text-foreground font-bold text-base md:text-lg mb-3 md:mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-secondary/50 text-muted-foreground text-[11px] md:text-xs border border-border hover:text-foreground hover:border-primary/30 transition-colors"
                    >
                      {item}
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

export default SkillsSection;
