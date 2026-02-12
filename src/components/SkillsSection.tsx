import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const technicalSkills = [
  { category: "Programming", items: ["Python", "C/C++", "SQL", "Java", "Php"] },
  { category: "ML & Data", items: ["TensorFlow", "XGBoost", "Pandas", "NumPy", "Yolo", "matplotlib", "OpenCV"] },
  { category: "Web & Frameworks", items: ["React JS", "FastAPI", "HTML/CSS/JS"] },
  { category: "Tools", items: ["Git", "Jupyter", "VS Code", "Tableau"] },
];

const softSkills = [
  { category: "Communication", items: ["Impactful Speaker", "Writing", "Active Listening", "Presentation"] },
  { category: "Leadership", items: ["Team Management", "Mentoring", "Decision Making"] },
  { category: "Problem Solving", items: ["Critical Thinking", "Analytical Skills", "Creativity", "Adaptability"] },
  { category: "Collaboration", items: ["Teamwork", "Conflict Resolution", "Time Management"] },
];

const pages = [
  { title: "Skills", subtitle: "& Tech", skills: technicalSkills },
  { title: "Soft", subtitle: "Skills", skills: softSkills },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [page, setPage] = useState(0);
  const current = pages[page];

  return (
    <section
      id="skills"
      className="relative section-padding bg-card/30 overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              <span className="text-gradient">
                {current.title}
              </span>{" "}
              {current.subtitle}
              <motion.span
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full"
              />
            </h2>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPage(0)}
                disabled={page === 0}
                className="p-2 rounded-full border border-border/60 backdrop-blur-md 
                text-muted-foreground hover:text-primary hover:border-primary/40 
                transition-all duration-300 hover:scale-110 
                hover:shadow-[0_0_10px_rgba(99,102,241,0.6)]
                disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                className="p-2 rounded-full border border-border/60 backdrop-blur-md 
                text-muted-foreground hover:text-primary hover:border-primary/40 
                transition-all duration-300 hover:scale-110 
                hover:shadow-[0_0_10px_rgba(99,102,241,0.6)]
                disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Indicator */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-1 bg-primary rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            <div className="flex gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === page
                      ? "bg-primary shadow-[0_0_10px_rgba(99,102,241,0.8)] scale-125"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {current.skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                  <div className="relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-lg group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300">
                    <h3 className="text-primary font-mono text-sm tracking-wider mb-5">
                      {group.category}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-1.5 text-sm rounded-full 
                          bg-primary/10 text-primary border border-primary/20
                          transition-all duration-300 
                          hover:bg-primary hover:text-white 
                          hover:shadow-[0_0_15px_rgba(99,102,241,0.6)] 
                          hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
