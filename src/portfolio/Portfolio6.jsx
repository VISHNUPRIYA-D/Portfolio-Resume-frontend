import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,FaBars,FaTimes } from "react-icons/fa";


const Portfolio6 = ({ user, def }) => {

  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="scroll-smooth bg-gradient-to-br  from-pink-50 via-white to-purple-50 sm:min-h-screen  text-gray-800">
      {/* Navbar */}
       <header className="flex justify-between items-center px-2 sm:px-4 md:px-8 py-2 sm:py-3 md:py-5 ">
             <h1 className="text-[13px] capitalize sm:text-xl md:text-2xl font-bold text-white mr-4">
               {user?.name ? (
                 <span className="text-pink-600">
                   {user.name ? user.name.split(" ")[0] : def.name.split(" ")[0]}
                 </span>
               ) : (
                 <span className="text-pink-600">
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
                     className="hover:text-pink-600 cursor-pointer transition"
                   >
                     <a href={`#${item.toLowerCase()}`}>{item}</a>
                   </li>
                 ))}
               </ul>
             </nav>
     
             {/* Mobile Menu Button */}
             <button
               className="md:hidden text-gray-700 text-[10px] sm:text-2xl"
               onClick={() => setMenuOpen(!menuOpen)}
             >
               {menuOpen ? <FaTimes /> : <FaBars />}
             </button>
           </header>
     
           {/* Mobile Menu */}
           {menuOpen && (
             <nav className="md:hidden ">
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
     

      {/* Hero Section */}
      <section
        id="home"
        className="pt-3 sm:pt-10 md:pt-28 text-center px-4 sm:px-6 max-w-3xl mx-auto"
      >
        <motion.img
           src={user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}
          alt="profile"
          className="w-20 h-20 sm:w-36 sm:h-36 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.h2
          className="text-sm sm:text-3xl md:text-4xl capitalize font-extrabold mt-4 text-gray-900"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
       {user?.name || def?.name}
        </motion.h2>
        <p className="text-pink-600 text-[10px] sm:text-lg mt-2">{user?.title || def?.title}</p>
        <p className="mt-4 text-gray-600 text-[7px] sm:text-base">{user?.about || def?.about}</p>
      </section>

      {/* About */}
      <section id="about" className="px-4 sm:px-6 py-3 sm:py-16 bg-white/50">
        <h2 className="text-[13px] sm:text-2xl font-bold text-pink-600 mb-1 sm:mb-6 text-center">
          About Me
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-[7px] sm:text-base">
          {user?.about || def?.about}
        </p>
      </section>

      {/* Education */}
      <section id="education" className="x-4 sm:px-6 py-3  sm:py-16">
        <h2 className="text-[13px] sm:text-2xl font-bold text-pink-600 mb-1 sm:mb-6 text-center">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-1 sm:space-y-6">
          {(user?.educations?.length? user.educations : def.educations).map((edu, i) => (
            <motion.div
              key={i}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow hover:shadow-lg"
            >
              
              <p className="text-gray-600 text-[9px] sm:text-base">{edu.schoolName}</p>
              <p className="text-[9px] sm:text-sm text-gray-500">{edu.collegeName}</p>
               <p className="text-[8px] sm:text-lg">{edu.field}</p>
                <p className="text-gray-500 text-[8px] sm:text-lg">
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {new Date(edu.endDate).getFullYear()}
                </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-4 sm:px-6 py-3 sm:py-16 bg-white/50">
        <h2 className="text-[13px] sm:text-2xl font-bold text-pink-600 mb-1 sm:mb-6 text-center">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-1 sm:space-y-6">
          {(user?.experiences?.length? user.experiences : def.experiences).map((exp, i) => (
            <motion.div
              key={i}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow hover:shadow-lg"
            >
             
              <p className="text-gray-600 text-[10px] sm:text-base">{exp.companyName}</p>
              <p className="text-[9px] sm:text-sm text-gray-500">{exp.role}</p>
              <p className="sm:mt-2 text-gray-700 text-[7px] sm:text-base">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 sm:px-6 py-3 sm:py-16">
        <h2 className="text-[13px] sm:text-2xl font-bold text-pink-600 mb-6 text-center">
          Projects
        </h2>
        <div className="grid gap-2 sm:gap-6 max-w-5xl mx-auto sm:grid-cols-2">
          {(user?.projects?.length? user.projects : def.projects).map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow hover:shadow-lg"
            >
              <h3 className="font-semibold text-[10px] sm:text-lg text-gray-900">
                {proj.title}
              </h3>
              <p className="text-gray-600 text-[7px] sm:text-base">
                {proj.description}
              </p>
              <p className="mt-2 text-[8px] sm:text-sm text-pink-600">{proj.tech}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-pink-600 underline text-[8px] sm:text-sm"
                >
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-4 sm:px-6 py-3 sm:py-16 bg-white/50">
        <h2 className="text-[13px] sm:text-2xl font-bold text-pink-600 mb-6 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {(user?.skills?.length? user.skills : def.skills).map((skill, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="px-2 sm:px-4 py-1 sm:py-2 bg-pink-100 text-pink-700 rounded-full shadow text-[8px] sm:text-base"
            >
              {skill.skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 sm:px-6 py-3 sm:py-16 text-center">
        <h2 className="text-[13px] sm:text-2xl font-bold text-pink-600 mb-6">
          Contact
        </h2>
        <div className="space-y-1 sm:space-y-3 text-gray-700 text-[8px] sm:text-base">
          {(user?.contacts?.length? user.contacts : def.contacts).map((cont,i)=>(
<div key={i}>
  <p className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-pink-600" /> {cont.email}
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-pink-600" /> {cont.phone}
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-pink-600" />{" "}
            {cont.address}
          </p>
</div>

          ))}
          
        </div>
      </section>
    </div>
  );
};

export default Portfolio6;
