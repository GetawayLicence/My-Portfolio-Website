import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";  

const projects = [
  { 
    id: 1,
    category: "cybersecurity",
    title: "Google Cybersecurity Cert",
    description: "Contains cybersecurity portfolio showcasing security skills and knowledge. Portfolio was built while attending the Google Cybersecurity Professional Course.", 
    image: "/projects/Google_Cybersecurity_Cert.jpg",
    tags: ["Incident Management & Response", "Linux", "SQL","Intrusion Detection & Prevention", "Python", "Bash", "Network Protocols", "Cyber Attacks", "Hardening"],
    githubURL: "https://github.com/GetawayLicence/Google-Cybersecurity-Course.git",
  },
  {
    id: 2,
    category: "cybersecurity",
    title: "The Encrypted Chronicles (Blog)",
    description: "Personal blog created with the objective to learn and explore more about cybersecurity attacks and concepts.", 
    image: "/projects/The_Encrypted_Chronicles.png",
    tags: ["Network Protocols", "Cyber Attacks", "Frameworks", "infosec", "threat hunting", "cybersecurity"],
    demoURL: "https://getawaylicence.github.io/TheEncryptedChronicles/",
    githubURL: "https://github.com/GetawayLicence/TheEncryptedChronicles.git",
  },
  {
    id: 3,
    category: "AI/ML",
    title: "MNIST from Scratch",
    description: "Built a simple neural network from scratch to further my understanding of basic concepts and create a digit recognizer by training with MNIST number dataset.", 
    image: "/projects/Neural_Networks_from_scratch.png",
    tags: ["Machine Learning", "Neural Network", "MNIST", "Digit Recognizer", "Python", "Numpy"],
    githubURL: "https://github.com/GetawayLicence/MNIST-from-Scratch.git",
  },
  {
    id: 4,
    category: "other",
    title: "ReportIt",
    description: "MVP of mobile application that aims to transform how accident scenes are reported and analysed. Built for the hackathon: ITSS x LTA 2025.", 
    image: "/projects/ReportIt.png",
    tags: ["Flutter", "Python"],
    demoURL: "https://youtu.be/a2i8H_WJ7UU",
    githubURL: "https://github.com/GetawayLicence/ITSS-LTA-Hackathon.git",
  },
  {
    id: 5,
    category: "other",
    title: "WokeScroll",
    description: "MVP of mobile application that introduces intuitive features like Vibe Score, share-to-analyze functionality, and fact-check tools that fact-check, emotionally analyze, and score social media posts and news articles in real-time. Received Diamond Achievement for the hackathon: SummerBuild 2025 (organised by NTU CCDS iLabs).", 
    image: "/projects/WokeScroll.png",
    tags: ["Flutter", "Python", "pytorch", "sklearn", "transformers", "huggingface", "bert model", "Natural Language Processing", "Machine Learning", "Text Classification"],
    demoURL: "https://devpost.com/software/wokescroll",
    githubURL: "https://github.com/GetawayLicence/BrainHackers_WokeScroll.git",
  },
];

const categories = ["all", "cybersecurity", "AI/ML", "other"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was undertaken as opportunities to explore a wide range of skills, 
          and challenged me to apply what I've learned in new and meaningful ways.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
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
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-[#546850]/88 text-primary-foreground whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-[#5E4634] text-sm flex-grow">{project.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    {project.demoURL && (
                      <a
                        href={project.demoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            className="button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GetawayLicence"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
