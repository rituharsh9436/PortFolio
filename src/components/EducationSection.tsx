import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "KIET Group of Institutions, AKTU",
    year: "2023 – 2027",
    score: "CGPA: In Continuation",
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Kendriya Vidyalaya O.F.M.",
    year: "2023",
    score: "Percentage: 93.2%",
  },
  {
    degree: "Class X (CBSE)",
    institution: "Kendriya Vidyalaya O.F.M.",
    year: "2021",
    score: "Percentage: 96.2%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="education"
      className="relative section-padding bg-card/30 overflow-hidden"
      ref={ref}
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
            <span className="text-gradient animate-gradient bg-[length:200%_200%]">
              Education
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full"
            />
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full mb-12 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />

          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-primary via-purple-500 to-transparent hidden sm:block"
            />

            <div className="space-y-10">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -60 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: i * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 70,
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-5 group"
                >
                  {/* Icon */}
                  <div className="hidden sm:flex relative flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 items-center justify-center mt-1 backdrop-blur-md">
                    <GraduationCap
                      size={18}
                      className="text-primary group-hover:rotate-12 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>

                  {/* Card */}
                  <div className="relative flex-1 p-6 rounded-xl border border-border bg-card/60 backdrop-blur-lg transition-all duration-300 shadow-md group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] group-hover:border-primary/40">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono text-primary tracking-wider">
                        {edu.year}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>

                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.score}
                    </p>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
