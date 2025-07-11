import { Pin } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import profileImg from "@/assets/res/profile.jpg";

export const AboutSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  // 'once' makes sure it animates only the first time
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left side: Picture */}
          <div className="space-y-6" data-aos="fade-right">
            <img
              src={profileImg}
              alt="Sruthi's Profile"
              className="rounded-lg shadow-md w-120 h-120 object-cover mx-auto border-4 border-[#FAF3E0] card-hover"
            />
          </div>

          {/* Right side: About Card */}
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto md:mx-0 relative" data-aos="fade-left">

            <div className="gradient-border bg-[#FAF3E0] p-8 rounded-lg shadow-lg card-hover space-y-6">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <Pin className="w-6 h-6 text-[#8B4513]" />
              </div>

              <p className="text-[#5E4634] leading-relaxed text-left">
                I'm deeply immersed in the world of technology, with a keen interest in Cybersecurity and Artificial Intelligence. As a student, I'm dedicated to honing my skills and staying on top of industry developments.
              </p>

              <p className="text-[#5E4634] leading-relaxed text-left">
                Outside of academics, I love diving into workshops and meetups to keep my finger on the pulse of emerging tech and swap stories with people who are on the same wavelength as me. When I’m not in work mode, you’ll probably find me with a guitar or piano, recharging through my love for music.              </p>

              <p className="text-[#5E4634] leading-relaxed text-left">
                I'm eager to merge my love for technology with my aspirations in cybersecurity and AI, seeking opportunities to make a meaningful and lasting impact.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
