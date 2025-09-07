import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { PortfolioContext } from "../context/PortfolioContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Portfolio5 = ({ user, def }) => {

  const {menuOpen,setMenuOpen} = useContext(PortfolioContext);
  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-pink-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="  bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-1 sm:px-3  md:px-6 py-1 sm:py-4">
          <h1 className=" text-[10px] sm:text-xl font-bold text-purple-600">
            {user.name || def.name}
          </h1>
          <div className="hidden md:block p-3">
            <ul className="flex gap-3 md:gap-6 text-gray-700 font-medium ">
              {[
                "about",
                "education",
                "experience",
                "projects",
                "skills",
                "contact",
              ].map((sec) => (
                <li key={sec} className="text-[10px] sm:text-sm">
                  <Link
                    to={sec}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-purple-600 transition"
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="md:hidden mx-3 mt-3 text-gray-500 text-[10px] sm:text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && 
        <ul className="md:hidden absolute bg-slate-300 px-4  text-gray-700 font-medium ">
              {[
                "about",
                "education",
                "experience",
                "projects",
                "skills",
                "contact",
              ].map((sec) => (
                <li key={sec} className="text-[10px] sm:text-sm py-2">
                  <Link
                    to={sec}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-purple-600 transition"
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>}

      </nav>

      {/* Hero */}
      <section
        id="about"
        className="sm:min-h-screen flex flex-col justify-center items-center text-center sm:px-6 py-3"
      >
        <motion.img
           src={user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}
          className="w-14 h-14 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-xl mb-1 sm:mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-[13px] sm:text-xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {user.name || def.name}
        </motion.h1>
        <p className="text-[9px] sm:text-xl text-purple-600 sm:mt-2">
          {user.title || def.title}
        </p>
      </section>

      {/* Education */}
      <section
        id="education"
        className="p-3 sm:px-6 md:px-20 py-3 sm:py-20 bg-white"
      >
        <motion.h2
          className="text-[10px] sm:text-xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
          {(user?.educations?.length ? user.educations : def.educations).map(
            (edu, i) => (
              <motion.div
                key={i}
                className="p-3 sm:p-6 bg-gradient-to-r from-blue-100 to-pink-100 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + i * 0.1 }}
              >
                <h3 className="font-bold text-[8px] sm:text-lg">
                  {edu.collegeName}
                </h3>
                <p className="text-[8px] sm:text-lg">{edu.field}</p>
                <p className="text-gray-500 text-[8px] sm:text-lg">
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {new Date(edu.endDate).getFullYear()}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="p-3 sm:p-6 md:px-20 py-3 sm:py-20 bg-gray-50"
      >
        <motion.h2
          className="text-[10px] sm:text-xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-8"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-1 sm:space-y-6">
          {(user?.experiences?.length ? user.experiences : def.experiences).map(
            (exp, i) => (
              <motion.div
                key={i}
                className="p-3 sm:p-6 bg-white rounded-xl shadow-md border-l-4 border-purple-400"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 + i * 0.1 }}
              >
                <h3 className="font-bold text-[8px] sm:text-lg">{exp.role}</h3>
                <p className="text-purple-600 text-[8px] sm:text-sm">
                  {exp.companyName}
                </p>
                <p className="text-gray-500 text-[8px] sm:text-sm">
                  {new Date(exp.startDate).getFullYear()} -{" "}
                  {new Date(exp.endDate).getFullYear()}
                </p>
                <p className="mt-2 text-gray-600 text-[6px] sm:text-sm">
                  {exp.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-3 sm:p-6 md:px-20 py-3 sm:py-20 bg-white">
        <h2 className="text-[10px] sm:text-xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-8">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-2 sm:gap-6">
          {(user?.projects?.length ? user.projects : def.projects).map(
            (proj, i) => (
              <motion.div
                key={i}
                className="p-3 sm:p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl shadow-md hover:scale-105 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + i * 0.1 }}
              >
                <h3 className="font-bold text-[8px] sm:text-lg">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-[6px] sm:text-sm">
                  {proj.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-3 sm:p-6 md:px-20 py-3 sm:py-20 bg-gray-50">
        <h2 className="text-[10px] sm:text-xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap gap-1 sm:gap-3">
          {(user?.skills?.length ? user.skills : def.skills).map((s, i) => (
            <motion.span
              key={i}
              className="px-1 sm:px-4 text-[6px] sm:text-sm sm:py-2 bg-purple-100 text-purple-800 rounded-full shadow-sm"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 + i * 0.05 }}
            >
              {s.skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="p-3 sm:p-6 md:px-20 py-3 sm:py-20 bg-white text-center"
      >
        <h2 className="text-[9px] sm:text-xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-6">
          Contact
        </h2>
        {(user?.contacts?.length ? user.contacts : def.contacts).map(
          (cont, i) => (
            <div key={i}>
              <p className="text-gray-600 text-[7px] sm:text-sm">
                {cont.email}
              </p>
              <p className="text-gray-600 text-[7px] sm:text-sm">
                {cont.phone}
              </p>
              <p className="text-gray-600 text-[7px] sm:text-sm">
                {cont.address}
              </p>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Portfolio5;
