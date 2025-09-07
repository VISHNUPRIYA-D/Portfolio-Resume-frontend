import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaBars, FaTimes, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Portfolio3 = ({ user, def }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white sm:min-h-screen font-sans">
      {/* Navbar */}
       <header className="flex justify-between items-center px-2 sm:px-4 md:px-8 py-2 sm:py-3 md:py-5 border-b border-gray-800">
             <h1 className="text-[13px] capitalize sm:text-xl md:text-2xl font-bold text-white mr-4">
               {user?.name ? (
                 <span className="text-pink-400">
                   {user?.name ? user.name.split(" ")[0] : def.name.split(" ")[0]}
                 </span>
               ) : (
                 <span className="text-pink-400">
                   {user?.name ? user.name : def.name}
                 </span>
               )}
             </h1>
     
             {/* Desktop Nav */}
             <nav className="hidden md:block">
               <ul className="flex gap-4 text-xs sm:text-sm md:text-base font-semibold uppercase text-gray-400">
                 {[
                   "Home",
                   "About",
                   "Education",
                   "Experience",
                   "Projects",
                   "Skills",
                   "Contact",
                 ].map((item) => (
                   <li
                     key={item}
                     className="hover:text-pink-400 cursor-pointer transition"
                   >
                     <a href={`#${item.toLowerCase()}`}>{item}</a>
                   </li>
                 ))}
               </ul>
             </nav>
     
             {/* Mobile Menu Button */}
             <button
               className="md:hidden text-gray-300 text-[10px] sm:text-2xl"
               onClick={() => setMenuOpen(!menuOpen)}
             >
               {menuOpen ? <FaTimes /> : <FaBars />}
             </button>
           </header>
     
           {/* Mobile Menu */}
           {menuOpen && (
             <nav className="md:hidden bg-gray-900 border-b border-gray-800">
               <ul className="flex flex-col gap-3 px-4 py-2 text-sm font-semibold uppercase text-gray-400">
                 {[
                   "Home",
                   "About",
                   "Education",
                   "Experience",
                   "Projects",
                   "Skills",
                   "Contact",
                 ].map((item) => (
                   <li
                     key={item}
                     className="hover:text-pink-600 cursor-pointer transition"
                   >
                     <a
                       href={`#${item.toLowerCase()}`}
                       onClick={() => setMenuOpen(false)}
                     >
                       {item}
                     </a>
                   </li>
                 ))}
               </ul>
             </nav>
           )}
     

      {/* Hero */}
      <section id="home" className="text-center py-3 sm:py-16 px-2 sm:px-6">
        <img src={user?.image ? `data:image/jpeg;base64,${user.image}` : def.image} alt="Profile"
          className="w-14 h-14 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto rounded-full border-2 sm:border-4 border-pink-400 shadow-lg object-cover"/>
        <h2 className="sm:mt-4 text-sm sm:text-xl md:text-3xl font-bold">{user?.title || def.title}</h2>
        <p className="text-gray-200 sm:mt-2 max-w-2xl mx-auto text-[6px] sm:text-base">{user?.about || def.about}</p>
      </section>

      {/* Education */}
      <section id="education" className=" sm:py-16 px-2 sm:px-6 mb-1">
        <h2 className="text-[9px] sm:text-2xl text-pink-400 font-bold mb-1 sm:mb-6 flex items-center gap-1 sm:gap-2"><FaGraduationCap/> Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {(user?.educations?.length ? user.educations : def.educations).map((edu, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl px-2 py-1 sm:p-6 shadow-lg border border-white/20">
              <h3 className="font-bold text-white text-[9px] sm:text-sm">{edu.collegeName}</h3>
              <p className="text-gray-200 text-[8px] sm:text-sm">{edu.field}</p>
              <p className="text-[8px] sm:text-sm text-gray-300">{new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-2 sm:py-16 px-2 sm:px-6 bg-black/20">
        <h2 className="text-[9px] sm:text-2xl text-pink-400 font-bold mb-1 sm:mb-6 flex items-center gap-1 sm:gap-2"><FaBriefcase/> Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {(user?.experiences?.length ? user.experiences : def.experiences).map((exp, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl px-2 py-1 sm:p-6 shadow-lg border border-white/20">
              <h3 className="font-bold text-white  text-[9px] sm:text-sm capitalize">{exp.companyName}</h3>
              <p className="text-gray-200  text-[8px] sm:text-sm capitalize">{exp.role}</p>
              <p className=" text-gray-300  text-[8px] sm:text-sm">{new Date(exp.startDate).getFullYear()} - {new Date(exp.endDate).getFullYear()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-2 sm:py-16 px-2 sm:px-6">
        <h2 className="text-[9px] sm:text-2xl text-pink-400 font-bold mb-1 sm:mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(user?.projects?.length ? user.projects : def.projects).map((proj, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl px-3 py-1 sm:p-6 hover:scale-105 transition">
              <h3 className="text-[9px] sm:text-sm capitalize font-bold ">{proj.title}</h3>
              <p className="text-gray-200 text-[8px] sm:text-sm capitalize">{proj.description}</p>
              <p className="text-[8px] sm:text-sm capitalize text-pink-400 mt-2">Tech: {proj.tech}</p>
              <a href={proj.link} target="_blank" rel="noreferrer" className="text-pink-400 underline text-[8px] sm:text-sm capitalize">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-2 sm:py-16 px-2 sm:px-6 bg-black/20">
        <h2 className="text-[9px] sm:text-2xl text-pink-400 font-bold mb-1 sm:mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {(user?.skills?.length ? user.skills : def.skills).map((s, i) => (
            <span key={i} className="bg-pink-500/30 border border-pink-300 text-pink-100 px-2 sm:px-4 sm:py-1 rounded-full text-[9px] sm:text-sm shadow-md hover:bg-pink-500/50">{s.skill}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-2 sm:py-16 px-2 sm:px-6">
        <h2 className="text-[9px] sm:text-2xl text-pink-400 font-bold mb-1 sm:mb-6">Contact</h2>
        {(user?.contacts?.length ? user.contacts : def.contacts).map((cont, i) => (
          <div key={i} className="space-y-1 sm:space-y-2">
            <p className="flex items-center gap-2 text-[8px] sm:text-sm"><FaEnvelope className="text-pink-400 "/> {cont.email}</p>
            <p className="flex items-center gap-2 text-[8px] sm:text-sm"><FaPhoneAlt className="text-pink-400"/> {cont.phone}</p>
            <p className="flex items-center gap-2 text-[8px] sm:text-sm"><FaMapMarkerAlt className="text-pink-400"/> {cont.address}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio3;
