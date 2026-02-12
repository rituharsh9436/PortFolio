import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface Stats {
  easy: number;
  medium: number;
  hard: number;
  total: number;
}

const profile = {
  platform: "LeetCode",
  icon: Code2,
  username: "rituharsh9436",
  link: "https://leetcode.com/rituharsh9436/",
  color: "from-amber-500 to-orange-500",
};

const topicSkills = {
  advanced: [
    { name: "Dynamic Programming", count: 29 },
    { name: "Divide and Conquer", count: 15 },
    { name: "Backtracking", count: 11 },
    { name: "Monotonic Stack", count: 4 },
    { name: "Quickselect", count: 3 },
    { name: "Data Stream", count: 2 },
    { name: "Game Theory", count: 2 },
    { name: "Trie", count: 2 },
  ],
  intermediate: [
    { name: "Hash Table", count: 70 },
    { name: "Math", count: 65 },
    { name: "Database", count: 50 },
    { name: "Tree", count: 44 },
    { name: "Binary Tree", count: 42 },
    { name: "Depth-First Search", count: 38 },
    { name: "Binary Search", count: 37 },
    { name: "Bit Manipulation", count: 36 },
  ],
  fundamental: [
    { name: "Array", count: 191 },
    { name: "String", count: 66 },
    { name: "Two Pointers", count: 58 },
    { name: "Sorting", count: 53 },
    { name: "Simulation", count: 35 },
    { name: "Linked List", count: 30 },
    { name: "Matrix", count: 29 },
    { name: "Stack", count: 27 },
  ],
};

const Badge = ({ name, count }: { name: string; count: number }) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    className="px-4 py-1.5 rounded-full text-xs font-medium
      bg-secondary/60 text-muted-foreground
      hover:bg-primary/10 hover:text-primary
      transition-all duration-300 cursor-default
      border border-border/40 hover:border-primary/40
      hover:shadow-[0_0_12px_rgba(249,115,22,0.4)]"
  >
    {name}
    <span className="ml-1 text-foreground font-semibold">
      x{count}
    </span>
  </motion.div>
);

const CodingProfilesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${profile.username}`
        );

        if (!response.ok) throw new Error("API failed");

        const data = await response.json();

        setStats({
          easy: data.easySolved || 0,
          medium: data.mediumSolved || 0,
          hard: data.hardSolved || 0,
          total: data.totalSolved || 0,
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const problemData =
    stats && stats.total > 0
      ? [
          { name: "Easy", value: stats.easy, color: "#22c55e" },
          { name: "Medium", value: stats.medium, color: "#f97316" },
          { name: "Hard", value: stats.hard, color: "#ef4444" },
        ]
      : [];

  return (
    <section
      id="coding-profiles"
      className="relative section-padding overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-red-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Coding</span> Profiles
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 shadow-[0_0_15px_rgba(249,115,22,0.8)]" />

          <motion.div
  whileHover={{ y: -6 }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  }}
  className="relative p-8 rounded-3xl 
    bg-background/60 backdrop-blur-xl 
    border border-border 
    shadow-2xl transition-all duration-500
    overflow-hidden group"
>
  {/* Cursor Glow Layer */}
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
    style={{
      background: `
        radial-gradient(
          600px circle at var(--mouse-x) var(--mouse-y),
          rgba(249, 115, 22, 0.15),
          transparent 60%
        )
      `,
    }}
  />

            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center shadow-xl`}>
                  <profile.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{profile.platform}</h3>
                  <p className="text-muted-foreground text-sm font-mono">
                    @{profile.username}
                  </p>
                </div>
              </div>

              <a href={profile.link} target="_blank">
                <ExternalLink className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
              </a>
            </div>

            {/* Chart + Stats */}
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="w-44 h-44">
                {loading ? (
                  <div className="flex items-center justify-center h-full animate-pulse text-muted-foreground">
                    Loading...
                  </div>
                ) : error ? (
                  <div className="flex items-center justify-center h-full text-red-500">
                    Failed to load
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <div className="w-[220px] aspect-square flex-shrink-0">
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={problemData}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={95}
        paddingAngle={3}
        dataKey="value"
        stroke="#0b0f19"
        strokeWidth={4}
        isAnimationActive={false}
      >
        {problemData.map((entry, index) => (
          <Cell
            key={index}
            fill={entry.color}
          />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "12px",
        }}
      />
    </PieChart>
  </ResponsiveContainer>
</div>

                  </ResponsiveContainer>
                )}
              </div>

              {stats && !loading && !error && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                  {[
                    ["Total", stats.total, "text-foreground"],
                    ["Easy", stats.easy, "text-green-500"],
                    ["Medium", stats.medium, "text-orange-500"],
                    ["Hard", stats.hard, "text-red-500"],
                  ].map(([label, value, color]) => (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      key={label as string}
                      className="p-5 rounded-2xl bg-secondary/50 text-center border border-border/40
                      hover:border-primary/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]
                      transition-all duration-300"
                    >
                      <p className={`text-xl font-bold ${color}`}>
                        {value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Topic Sections */}
            <div className="mt-14 space-y-10">
              {[
                { title: "Advanced", color: "bg-red-500", data: topicSkills.advanced },
                { title: "Intermediate", color: "bg-yellow-400", data: topicSkills.intermediate },
                { title: "Fundamental", color: "bg-green-500", data: topicSkills.fundamental },
              ].map((section) => (
                <div
                  key={section.title}
                  className="p-7 rounded-2xl bg-secondary/40 border border-border
                  hover:border-primary/40 hover:bg-secondary/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`w-2.5 h-2.5 rounded-full ${section.color}`} />
                    <h4 className="text-sm font-semibold">
                      {section.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {section.data.map((item) => (
                      <Badge key={item.name} name={item.name} count={item.count} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
