import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiFlutter, SiPython,
  SiFirebase, SiPostgresql, SiPytorch,
  SiScikitlearn, SiTensorflow, SiWireshark,
  SiGit, SiNodedotjs, SiFlask
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, category: "languages" },
  { name: "CSS", icon: <SiCss3 />, category: "languages" },
  { name: "JavaScript", icon: <SiJavascript />, category: "languages" },
  { name: "Flutter", icon: <SiFlutter />, category: "languages" },
  { name: "Python", icon: <SiPython />, category: "languages" },
  { name: "Java", icon: <FaJava />, category: "languages" },
  { name: "Firebase", icon: <SiFirebase />, category: "databases" },
  { name: "AWS", icon: <FaAws />, category: "databases" },
  { name: "Postgresql", icon: <SiPostgresql />, category: "databases" },
  { name: "Pytorch", icon: <SiPytorch />, category: "tools" },
  { name: "Scikit-learn", icon: <SiScikitlearn />, category: "tools" },
  { name: "TensorFlow", icon: <SiTensorflow />, category: "tools" },
  { name: "Wireshark", icon: <SiWireshark />, category: "tools" },
  { name: "Git/GitHub", icon: <SiGit />, category: "tools" },
  { name: "Node.js", icon: <SiNodedotjs />, category: "tools" },
  { name: "Flask", icon: <SiFlask />, category: "tools" },
];

const categories = ["all", "languages", "databases", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors  duration-300 capitalize",
                activeCategory === category
                  ? "bg-[#794E46] text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center"
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-24 h-24 bg-[#FAF3E0] rounded-full shadow-md flex items-center justify-center text-4xl">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


