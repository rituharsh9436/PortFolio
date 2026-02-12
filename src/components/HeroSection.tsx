import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-28 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 items-center gap-14">

        {/* LEFT SIDE — TEXT */}
        <div className="text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm mb-4 tracking-widest"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-foreground">Harsh </span>
            <span className="text-gradient bg-[length:200%_200%] animate-gradient">
              Bhardwaj
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            Machine Learning Enthusiast & Full-Stack Developer.
            Building intelligent, clean, and user-friendly applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-5 justify-center md:justify-start"
          >
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl 
              bg-primary text-primary-foreground font-semibold 
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            >
              <Mail size={18} />
              Get in Touch
            </a>

            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl 
              border border-border backdrop-blur-md
              text-foreground transition-all duration-300
              hover:border-primary/60 hover:text-primary
              hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              <FileText size={18} />
              View Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full 
              bg-gradient-to-r from-primary via-purple-500 to-primary
              blur-2xl opacity-40 animate-pulse" 
            />

            {/* Animated Border Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />

            {/* Image */}
            <img
              src="/profile.jpg"
              alt="Harsh Bhardwaj"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover 
              rounded-full border-4 border-background shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, "#about")}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={22} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
