import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-snug sm:leading-tight">
            <span className="opacity-0 animate-fade-in-delay-1 block">
              Hi! I'm
            </span>
            <span className="bg-gradient-to-r from-[#1EAE98] to-[#CD259A] bg-clip-text text-transparent font-extrabold opacity-0 animate-fade-in-delay-2 block">
              Sruthi Sathishkumar
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-2 sm:mt-4 text-[#3E2723] text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I'm a Year 4 Computer Science student at Nanyang Technological University with a passion for cybersecurity and Artificial Intelligence. I'm dedicated to expanding my technical skills and constantly learning to thrive in the ever-evolving digital landscape.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="button">
              View my Work
            </a>

            <a href="@/assets/res/CV.pdf" className="button" download>
              Download my CV
            </a>
          </div>

        </div>
      </div>

      {/* Swipe Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
