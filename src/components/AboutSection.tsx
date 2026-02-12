import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
            <span className="text-gradient">About</span> Me
            <motion.span
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full"
            />
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full mb-10 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-5 text-muted-foreground leading-relaxed text-[15px]"
            >
              <p className="hover:text-foreground transition-colors duration-300">
                I'm a B.Tech Computer Science student at KIET Group of Institutions, passionate about
                Machine Learning and full-stack development. I love building intelligent systems
                that solve real-world problems and generating insights from raw facts and figures.
              </p>

              <p className="hover:text-foreground transition-colors duration-300">
                Beyond coding, I actively explore developer tools and emerging technologies that help engineers work smarter. I believe productivity and problem-solving efficiency are as important as technical skills, so I continuously adopt tools that optimize development, debugging, and deployment processes
              </p>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <div className="relative p-7 rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-lg transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] space-y-5">
                {[
                  ["Name", "Harsh Bhardwaj"],
                  ["Degree", "B.Tech CS"],
                  ["College", "KIET Groups of Institutions"],
                  ["University", "AKTU"],
                  ["Batch", "2023 – 2027"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className={`flex justify-between items-center ${
                      index !== 4 ? "border-b border-border/50 pb-4" : ""
                    }`}
                  >
                    <span className="text-muted-foreground text-sm">
                      {label}
                    </span>
                    <span className="text-foreground font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
