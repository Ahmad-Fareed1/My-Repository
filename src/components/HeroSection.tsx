import { motion } from "framer-motion";
import heroArtwork from "@/assets/hero-artwork.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroArtwork} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? 'hsl(var(--neon-pink))' : 'hsl(var(--neon-cyan))',
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/30 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: 'hsl(var(--neon-pink))' }} />
          <span className="text-xs text-muted-foreground font-medium">Available for Work</span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-foreground text-xl md:text-3xl font-medium mb-2"
        >
          Hi, I'm
        </motion.p>

        {/* Name - big & bold */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-display tracking-tight mb-4"
        >
          <span className="text-gradient">Ahmad</span>{" "}
          <span className="text-gradient-funky">Fareed</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-2xl mb-6"
        >
          Full-Stack Developer & IT Specialist
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-muted-foreground text-sm md:text-lg mb-10 max-w-xl mx-auto"
        >
          Crafting <em className="text-gradient not-italic font-medium">Scalable Solutions</em> that Elevate{" "}
          <em className="text-gradient-funky not-italic font-medium">Networks & Applications</em>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center gap-4 justify-center flex-wrap"
        >
          <a
            href="#work"
            className="px-7 py-3 rounded-full font-medium text-primary-foreground hover:opacity-90 transition-opacity text-sm md:text-base"
            style={{ background: 'var(--gradient-primary)' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-border text-foreground hover:bg-secondary/50 transition-colors font-medium text-sm md:text-base"
          >
            Get In Touch
          </a>
          <a
            href="/Ahmad_Fareed_CV_Modern_Style.docx"
            download
            className="px-7 py-3 rounded-full border border-primary/50 text-foreground hover:bg-primary/10 transition-colors font-medium text-sm md:text-base flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80L1440 80L1440 40C1440 40 1200 0 720 0C240 0 0 40 0 40L0 80Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
