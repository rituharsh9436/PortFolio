import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const AchievementSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="achievements" className="relative section-padding overflow-hidden" ref={ref}>
      
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-60 
        bg-yellow-400/10 blur-3xl opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl 
            bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 
            opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

          <div className="relative p-10 rounded-3xl 
            bg-card/60 backdrop-blur-xl border border-border 
            shadow-xl group-hover:border-yellow-400/40 
            group-hover:shadow-[0_0_35px_rgba(250,204,21,0.4)]
            transition-all duration-500 text-center"
          >

            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl 
                bg-yellow-400/10 flex items-center justify-center">
                <Trophy size={28} className="text-yellow-400" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-foreground">
              Smart India Hackathon (SIH 2025)
            </h3>

            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Successfully cleared the <span className="text-yellow-400 font-medium">
              Institutional Level
              </span> and got <span className="text-yellow-400 font-medium">
              waitlisted for the Grand Finale
              </span>, demonstrating strong problem-solving,
              technical execution, and innovation under pressure.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AchievementSection;
