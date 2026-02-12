import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ML-Based Smart Govt Policy Feedback & Sentiment Analysis System",
    description:
      "Full-stack sentiment analysis system using a fine-tuned RoBERTa transformer. Features FastAPI backend, React frontend, MySQL database, real-time predictions, and an admin dashboard for policy insights.",
    tech: ["RoBERTa", "FastAPI", "React", "MySQL", "NLP"],
    github: "https://github.com/rituharsh9436/smart-gov-feedback-system",
    live: "https://github.com/rituharsh9436/smart-gov-feedback-system",
  },
  {
    title: "Explainable Loan Approval Engine",
    description:
      "XGBoost-based loan approval model with SHAP and LIME explanations. Deployed using FastAPI and integrated with a React dashboard for what-if analysis.",
    tech: ["XGBoost", "SHAP", "LIME", "FastAPI", "React"],
    github: "https://github.com/rituharsh9436/Loan-Approval-Engine",
    live: "https://github.com/rituharsh9436/Loan-Approval-Engine",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="projects"
      className="relative section-padding overflow-hidden"
      ref={ref}
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 -left-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
            <span className="text-gradient bg-[length:200%_200%] animate-gradient">
              Projects
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full"
            />
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full mb-12 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                {/* Card */}
                <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 transition-all duration-300 shadow-lg group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Icons */}
                    <div className="flex gap-4 sm:mt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
