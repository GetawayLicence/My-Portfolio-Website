import { GraduationCap, Code2, Shield, Book } from "lucide-react";  
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
<section id="experience" className="py-24 px-4 bg-background text-foreground">
  <div className="container mx-auto max-w-5xl">

    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      <span className="text-primary">Experience & </span> Education 
    </h2>

    {/* Timeline Container */}
    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#B86B4B]"></div>

      {/* All Cards */}
      <div className="flex flex-col space-y-12">

        {/* CARD 1 */}
        <div data-aos="fade-left" className="flex flex-col md:flex-row items-center md:items-start justify-end gap-8 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#FAF3E0] p-3 rounded-full border border-[#3E2723] shadow-md z-10">
            <GraduationCap className="w-5 h-5 text-[#8B4513]" />
          </div>

          <div className="gradient-border bg-[#FAF3E0] p-6 rounded-lg shadow-lg card-hover space-y-2 md:w-1/2 md:mr-auto">
            <h4 className="font-semibold text-lg text-[#3E2723]">Final Year Student</h4>
            <p className="text-sm text-[#5E4634] mb-1">Nanyang Technological University, Singapore</p>
            <p className="text-sm text-[#5E4634] leading-relaxed  text-left">• Bachelor of Computing (Hons) in Computer Science</p>
            <p className="text-sm text-[#5E4634] leading-relaxed  text-left">• Specialisation (On-Track): Security, Artificial Intelligence </p>
          </div>

          {/* RIGHT SIDE — DATE */}
        <div className="hidden md:block w-1/2 text-left pl-4">
            <p className="text-md text-[#5E4634] italic">Aug 2022 - Present</p>
        </div>

        </div>

        {/* CARD 2 */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row items-center md:items-start justify-start gap-8 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#FAF3E0] p-3 rounded-full border border-[#3E2723] shadow-md z-10">
            <Shield className="w-5 h-5 text-[#8B4513]" />
          </div>

          {/* LEFT SIDE — DATE */}
        <div className="hidden md:block w-1/2 text-right pr-4">
            <p className="text-md text-[#5E4634] italic">Jan 2025 - May 2025</p>
        </div>

          {/* RIGHT SIDE — CARD */}
          <div className="gradient-border bg-[#FAF3E0] p-6 rounded-lg shadow-lg card-hover space-y-2 md:w-1/2 md:ml-auto">
            <h4 className="font-semibold text-lg text-[#3E2723]">OT Security Engineer Intern</h4>
            <p className="text-sm text-[#5E4634] mb-1">PSA International, Singapore </p>
            <p className="text-sm text-[#5E4634] leading-relaxed text-left">
                • Carried out 10 OT security risk assessments for Quay Cranes and Yard Cranes.
            </p>
            <p className="text-sm text-[#5E4634] leading-relaxed text-left">
                • Streamlined and automated recurring business reports to reduce manual effort and turnaround time using tools such as Excel Macros.
            </p>
            <p className="text-sm text-[#5E4634] leading-relaxed text-left">
                • Assisted in remote login and password refresh procedures for crane PCs, including the deployment of essential security software, gaining exposure to secure system access protocols in an industrial IT environment.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div data-aos="fade-left" className="flex flex-col md:flex-row items-center md:items-start justify-end gap-8 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#FAF3E0] p-3 rounded-full border border-[#3E2723] shadow-md z-10">
            <Code2 className="w-5 h-5 text-[#8B4513]" />
          </div>

          <div className="gradient-border bg-[#FAF3E0] p-6 rounded-lg shadow-lg card-hover space-y-2 md:w-1/2 md:mr-auto">
            <h4 className="font-semibold text-lg text-[#3E2723]">Temp Staff - Security Administration</h4>
            <p className="text-sm text-[#5E4634] mb-1">CPF Board, Singapore</p>
            <p className="text-sm text-[#5E4634] leading-relaxed  text-left">• Performed Security Administration – Raising requests and Creating accounts</p>
            <p className="text-sm text-[#5E4634] leading-relaxed  text-left">• Monitored and reported Project Status</p>
            <p className="text-sm text-[#5E4634] leading-relaxed  text-left">• Performed Identity and Access Management via Mainframe</p>
            <p className="text-sm text-[#5E4634] leading-relaxed  text-left">• Added/Removeed members to/from Outlook Distribution Groups accordingly.</p>
            <p className="text-sm text-[#5E4634] leading-relaxed  text-left">• Performed any other ad-hoc duties as and when assigned</p>
          </div>

          {/* RIGHT SIDE — DATE */}
        <div className="hidden md:block w-1/2 text-left pl-4">
            <p className="text-md text-[#5E4634] italic">May 2024 - July 2024,</p>
            <p className="text-md text-[#5E4634] italic">May 2023 - July 2023</p>
        </div>

        </div>

        {/* CARD 4 */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row items-center md:items-start justify-start gap-8 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#FAF3E0] p-3 rounded-full border border-[#3E2723] shadow-md z-10">
            <Book className="w-5 h-5 text-[#8B4513]" />
          </div>

          {/* LEFT SIDE — DATE */}
        <div className="hidden md:block w-1/2 text-right pr-4">
            <p className="text-md text-[#5E4634] italic">Jan 2020 - Dec 2021</p>
        </div>

          {/* RIGHT SIDE — CARD */}
          <div className="gradient-border bg-[#FAF3E0] p-6 rounded-lg shadow-lg card-hover space-y-2 md:w-1/2 md:ml-auto">
            <h4 className="font-semibold text-lg text-[#3E2723]">Student</h4>
            <p className="text-sm text-[#5E4634] mb-1">Raffles Institution, Singapore </p>
            <p className="text-sm text-[#5E4634] leading-relaxed text-left">
                • GCE A Level Certificate
            </p>
            <p className="text-sm text-[#5E4634] leading-relaxed text-left">
                • Grade: Junior College
            </p>
          </div>
        </div>


      </div>
    </div>
  </div>
</section>
  );
};
