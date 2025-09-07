import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { PortfolioContext } from "../context/PortfolioContext";

/**
 * Portfolio7.jsx — Neon Night (Dark, Animated)
 * - Plain JavaScript React component
 * - TailwindCSS + Framer Motion + React Icons
 * - Navbar + animated sections
 * - Sections: Home, About, Education, Experience, Projects, Skills, Contact, Socials
 */

const Title = ({ children }) => (
  <motion.h2
    className="text-[13px] sm:text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-6"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h2>
);

const GlowCard = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900/60 to-black/60 p-2 sm:p-6 shadow-lg hover:shadow-cyan-400/10 hover:border-cyan-300/30 transition ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-300/10 [mask-image:linear-gradient(black,transparent)]" />
    {children}
  </motion.div>
);



const Portfolio7 = ({ user, def}) => {
   const {menuOpen,setMenuOpen} = useContext(PortfolioContext);

  const navItems = [
    "home",
    "about",
    "education",
    "experience",
    "projects",
    "skills",
    "contact",
  ];

  return (
    <div className="scroll-smooth bg-gradient-to-br from-black via-gray-900 to-gray-800 text-zinc-200 min-h-screen">
      {/* Navbar */}
       <header className="flex justify-between items-center px-2 sm:px-4 md:px-8 py-2 sm:py-3 md:py-5 border-b border-gray-800">
             <h1 className="text-[13px] capitalize sm:text-xl md:text-2xl font-bold mr-4">
               {user?.name ? (
                 <span className="text-cyan-300">
                   {user?.name ? user.name.split(" ")[0] : def.name.split(" ")[0]}
                 </span>
               ) : (
                 <span className="text-cyan-300">
                   {user?.name ? user.name : def.name}
                 </span>
               )}
             </h1>
     
             {/* Desktop Nav */}
             <nav className="hidden md:block">
               <ul className="flex gap-4 text-xs sm:text-sm md:text-base font-semibold uppercase text-zinc-300">
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
                     className="hover:text-cyan-300 cursor-pointer transition"
                   >
                     <a href={`#${item.toLowerCase()}`}>{item}</a>
                   </li>
                 ))}
               </ul>
             </nav>
     
             {/* Mobile Menu Button */}
             <button
               className="md:hidden text-zinc-300 text-[10px] sm:text-2xl"
               onClick={() => setMenuOpen(!menuOpen)}
             >
               {menuOpen ? <FaTimes /> : <FaBars />}
             </button>
           </header>
     
           {/* Mobile Menu */}
           {menuOpen && (
             <nav className="md:hidden bg-gray-900 border-b border-gray-800">
               <ul className="flex flex-col gap-3 px-4 py-2 text-sm font-semibold uppercase text-zinc-400">
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
                     className="hover:text-cyan-300 cursor-pointer transition"
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
      <section id="home" className="pt-6 sm:pt-12 md:pt-20 pb-6 sm:pb-12 px-3 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[14px] sm:text-2xl md:text-4xl font-extrabold leading-snug">
              <span className="text-zinc-200 capitalize">{user?.name || def?.name}</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                {user?.title || def?.title}
              </span>
            </h1>
            <p className="mt-2 sm:mt-4 text-[10px] sm:text-sm md:text-base text-zinc-400 max-w-md">
              {user?.about || def?.about}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}
              alt="profile"
              className="w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full border-2 sm:border-4 border-cyan-300 shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-3 sm:px-6 md:px-10 py-4 sm:py-8 md:py-12 bg-black/40">
<Title> About Me</Title>         
        
        <GlowCard className="max-w-4xl mx-auto text-zinc-300 leading-relaxed text-[9px] sm:text-sm md:text-base text-center">
          {user?.about || def?.about}
        </GlowCard>
      </section>

      {/* Education */}
      <section id="education" className="px-3 sm:px-6 md:px-10 py-4 sm:py-8 md:py-12">
        <Title>Education</Title>
          
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {(user?.educations?.length ? user.educations : def.educations).map((edu, i) => (
            <GlowCard
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-800 rounded-xl p-3 sm:p-6 shadow hover:shadow-lg"
            >
              <h3 className="text-[10px] sm:text-base md:text-lg font-bold text-cyan-300">
                {edu.schoolName}
              </h3>
              <p className="text-[8px] sm:text-sm text-zinc-400">{edu.collegeName}</p>
              <p className="text-[8px] sm:text-sm text-zinc-400">{edu.field}</p>
              <p className="text-[8px] sm:text-sm text-zinc-500">
                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
              </p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-3 sm:px-6 md:px-10 py-4 sm:py-8 md:py-12 bg-black/40">
       
        <Title>Experience</Title>  
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {(user?.experiences?.length ? user.experiences : def.experiences).map((exp, i) => (
            <GlowCard
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-800 rounded-xl p-3 sm:p-6 shadow hover:shadow-lg"
            >
              <h3 className="text-[10px] sm:text-base md:text-lg font-bold text-purple-300 capitalize" >
                {exp.companyName}
              </h3>
              <p className="text-[8px] sm:text-sm text-zinc-400 capitalize">{exp.role}</p>
              <p className="text-[8px] sm:text-sm text-zinc-500 mt-1">
                {exp.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-3 sm:px-6 md:px-10 py-4 sm:py-8 md:py-12">
       <Title>Projects</Title>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {(user?.projects?.length ? user.projects : def.projects).map((proj, i) => (
            <GlowCard
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-800 rounded-xl p-3 sm:p-6 shadow hover:shadow-lg"
            >
              <h3 className="text-[10px] sm:text-base md:text-lg font-bold text-fuchsia-300">
                {proj.title}
              </h3>
              <p className="text-[8px] sm:text-sm text-zinc-400">{proj.description}</p>
              <p className="text-[8px] sm:text-sm text-cyan-400 mt-1">{proj.tech}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[8px] sm:text-sm text-cyan-300 underline mt-1 inline-block"
                >
                  View Project
                </a>
              )}
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-3 sm:px-6 md:px-10 py-4 sm:py-8 md:py-12 bg-black/40">
<Title>  Skills</Title>        
       
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {(user?.skills?.length ? user.skills : def.skills).map((skill, i) => (
            <GlowCard
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="px-2 sm:px-4 py-1 bg-cyan-300/20 text-cyan-300 rounded-full shadow text-[8px] sm:text-sm md:text-base"
            >
              {skill.skill}
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-3 sm:px-6 md:px-10 py-4 sm:py-8 md:py-12 text-center">
        <Title>
          Contact
        </Title>
        <div className="space-y-1 sm:space-y-3 text-[8px] sm:text-sm md:text-base text-zinc-300 rounded-2xl bg-black/40">
          {(user?.contacts?.length ? user.contacts : def.contacts).map((cont, i) => (
            <GlowCard key={i}>
              <p className="flex justify-center items-center gap-2">
                <FaEnvelope className="text-cyan-300" /> {cont.email}
              </p>
              <p className="flex justify-center items-center gap-2">
                <FaPhoneAlt className="text-cyan-300" /> {cont.phone}
              </p>
              <p className="flex justify-center items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-300" /> {cont.address}
              </p>
            </GlowCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio7;
