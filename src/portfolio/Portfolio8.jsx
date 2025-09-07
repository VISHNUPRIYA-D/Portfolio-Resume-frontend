import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import { PortfolioContext } from "../context/PortfolioContext";
import { div } from "framer-motion/client";

const Portfolio8 = ({ user, def }) => {
  const { menuOpen, setMenuOpen } = useContext(PortfolioContext);


  const socials = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
  };

  const sections = ["home", "about", "education", "experience", "projects", "skills", "contact", "socials"];

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-green-50 text-gray-800 min-h-screen font-sans">
      {/* Navbar */}
       <header className="flex justify-between items-center px-2 sm:px-4 md:px-8 py-2 sm:py-3 md:py-5 border-b border-gray-300">
             <h1 className="text-[13px] capitalize sm:text-xl md:text-2xl font-bold text-white mr-4">
               {user?.name ? (
                 <span className="text-purple-700">
                   {user?.name ? user.name.split(" ")[0] : def.name.split(" ")[0]}
                 </span>
               ) : (
                 <span className="text-purple-700">
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
                     className="hover:text-purple-700 cursor-pointer transition"
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
             <nav className="md:hidden">
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
                     className="hover:text-purple-700 cursor-pointer transition"
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
      <section id="home" className="flex flex-col items-center text-center py-5 sm:py-24">
        <motion.img
          src={user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}
          alt="Profile"
          className="w-20 h-20 sm:w-40 sm:h-40 rounded-full shadow-xl object-cover border-2  sm:border-4 border-purple-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1 className="mt-2 sm:mt-4 text-xl sm:text-4xl font-bold text-purple-700 capitalize" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {user?.name || def?.name}
        </motion.h1>
        <p className="text-purple-500 text-sm sm:text-xl mt-2">{user?.title || def?.title}</p>
        <p className="max-w-2xl text-gray-600 mt-2 sm:mt-4 px-2 sm:px-4 text-[8px] sm:text-sm">{user?.about || def?.about}</p>
      </section>

      {/* About */}
      <section id="about" className="px-4 sm:px-12 py-2 sm:py-12">
        <motion.div className="bg-white rounded-2xl shadow-lg p-3 sm:p-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-[13px] sm:text-2xl font-bold text-purple-600 mb-2 sm:mb-4">About Me</h2>
          <p className="text-gray-700 text-[8px] sm:text-sm">{user?.about || def?.about}</p>
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="px-4 sm:px-12 py-2 sm:py-12">
        <motion.h2 className="text-[13px] sm:text-2xl font-bold text-purple-600 mb-2 sm:mb-6" initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>Education</motion.h2>
        <div className="grid md:grid-cols-2 gap-2 sm:gap-6">
          {(user?.educations?.length? user.educations : def.educations ).map((edu, i) => (
            <motion.div key={i} className="bg-white p-3 sm:p-6 rounded-xl shadow-md border-l-4 border-pink-300"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 + i * 0.2 }}>
              <h3 className="font-bold text-[10px] sm:text-lg">{edu.collegeName}</h3>
              <p className="text-gray-600 text-[9px] sm:text-base">{edu.field}</p>
              <p className="text-gray-500 text-[9px] sm:text-base">{new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-4 sm:px-12 py-2 sm:py-12 bg-purple-50">
        <motion.h2 className="text-[13px] sm:text-2xl font-bold text-purple-600 mb-2 sm:mb-6" initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>Experience</motion.h2>
        <div className="space-y-2 sm:space-y-6">
          {(user?.experiences?.length? user.experiences : def.experiences).map((exp, i) => (
            <motion.div key={i} className="bg-white p-3 sm:p-6 rounded-xl shadow-md border-l-4 border-purple-300"
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 + i * 0.2 }}>
              <h3 className="font-bold text-[10px] sm:text-lg capitalize">{exp.role}</h3>
              <p className="text-purple-600 text-[9px] sm:text-base capitalize">{exp.companyName}</p>
              <p className="text-gray-500 text-[8px] sm:text-base">{new Date(exp.startDate).getFullYear()} - {new Date(exp.endDate).getFullYear()}</p>
              <p className="mt-2 text-gray-700 text-[8px] sm:text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 sm:px-12 py-2 sm:py-12">
        <motion.h2 className="text-[13px] sm:text-2xl font-bold text-purple-600 mb-2 sm:mb-6" initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>Projects</motion.h2>
        <div className="grid md:grid-cols-3 gap-2 sm:gap-6">
          {(user?.projects?.length? user.projects : def.projects ).map((proj, i) => (
            <motion.div key={i} className="bg-white p-3 sm:p-6 rounded-xl shadow-md hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 + i * 0.2 }}>
              <h3 className="font-bold text-[10px] sm:text-lg">{proj.title}</h3>
              <p className="text-gray-600 text-[8px] sm:text-sm">{proj.description}</p>
              {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline text-[8px] sm:text-sm mt-2 inline-block">View Project</a>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-4 sm:px-12 py-2 sm:py-12 bg-purple-50">
        <motion.h2 className="text-[13px] sm:text-2xl font-bold text-purple-600 mb-2 sm:mb-6" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>Skills</motion.h2>
        <div className="flex flex-wrap gap-3">
          {(user?.skills?.length? user.skills : def.skills ).map((s, i) => (
            <motion.span key={i} className="px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 rounded-full shadow-sm text-[8px] sm:text-sm"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4 + i * 0.1 }}>
              {s.skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 sm:px-12 py-2 sm:py-12 text-center">
        <motion.h2 className="text-[13px] sm:text-2xl font-bold text-purple-600 mb-2 sm:mb-6" initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>Contact</motion.h2>
        {(user?.contacts?.length? user.contacts : def.contacts).map((cont, i) => (
          <motion.div key={i} className="bg-white p-3 sm:p-6 rounded-xl shadow-md inline-block"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                {(user?.contacts?.length? user.contacts : def.contacts).map((cont,i)=>(
                    <div key={i}>
                        <p className="flex items-center justify-center gap-2 text-gray-600 text-[8px] sm:text-base"><FaEnvelope className="text-purple-500" /> {cont.email}</p>
                        <p className="flex items-center justify-center gap-2 text-gray-600 text-[8px] sm:text-base"><FaPhoneAlt className="text-purple-500" /> {cont.phone}</p>
                        <p className="flex items-center justify-center gap-2 text-gray-600 text-[8px] sm:text-base"><FaMapMarkerAlt className="text-purple-500" /> {cont.address}</p>

                    </div>
                ))}
            
          </motion.div>
        ))}
      </section>

      {/* Socials */}
      <section id="socials" className="px-4 sm:px-12 py-2 sm:py-12 text-center">
        <h2 className="text-[13px] sm:text-2xl font-bold text-purple-600 mb-2 sm:mb-6">Find Me On</h2>
        <div className="flex justify-center gap-6">
          {(user?.socialMedia?.length? user.socialMedia : def.socialMedia ).map((social, i) => {
            const Icon = socials[social.platform.toLowerCase()] || FaGlobe;
            return (
              <motion.a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 text-[13px] sm:text-2xl"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 + i * 0.1 }}>
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portfolio8;
