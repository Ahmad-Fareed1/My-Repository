const row1 = [
  "Networking", "◆", "System Administration", "◆", "Web Development", "◆",
  "Machine Learning", "◆", "Data Analysis", "◆", "SQL Server", "◆",
  "ASP.NET", "◆", "Python", "◆",
];

const row2 = [
  "IT Student", "◆", "VLAN & OSPF", "◆", "Windows Server", "◆",
  "Linux Admin", "◆", "PowerShell", "◆", "Bash Scripting", "◆",
  "Cisco Networking", "◆", "Problem Solver", "◆",
];

const MarqueeSection = () => {
  return (
    <section className="py-8 overflow-hidden border-y border-border">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-4 text-sm text-muted-foreground font-medium">
        {[...row1, ...row1].map((item, i) => (
          <span key={i} className={item === "◆" ? "text-primary text-xs" : ""}>{item}</span>
        ))}
      </div>
      <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-4 text-sm text-muted-foreground font-medium mt-4">
        {[...row2, ...row2].map((item, i) => (
          <span key={i} className={item === "◆" ? "text-accent text-xs" : ""}>{item}</span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
