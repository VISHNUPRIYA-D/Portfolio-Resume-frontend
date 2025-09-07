import React, { useContext } from "react";
import { FaGraduationCap, FaBriefcase, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTimes, FaBars, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe, } from "react-icons/fa";
import { PortfolioContext } from "../context/PortfolioContext";
import { BsInstagram } from "react-icons/bs";

const Portfolio2 = ({ user, def }) => {
    const {menuOpen,setMenuOpen} = useContext(PortfolioContext);

    const portfolioIcons = {
      github:FaGithub,
      linkedin:FaLinkedin,
      twitter:FaTwitter,
      instagram:FaInstagram,
    }
  return (
    <div className="bg-gray-950 text-gray-200 sm:min-h-screen font-sans">

        {/* Navbar */}
        <section>
            <nav className="hidden md:block p-4">
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
                className="hover:text-cyan-500 cursor-pointer transition"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
          <button
                  className="md:hidden mx-3 mt-3 text-gray-300 text-[10px] sm:text-2xl"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
        </section>

 {menuOpen && (
        <nav className="md:hidden absolute bg-gray-900 border-b border-gray-800">
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
                className="hover:text-red-500 cursor-pointer transition"
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
      <section id="home" className="flex flex-col items-center text-center sm:py-12 px-3 sm:px-6">
        <img
          src={user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}
          alt="Profile"
          className="w-12 h-12 sm:w-40 sm:h-40 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
        />
        <h1 className="sm:mt-4 capitalize text-[13px] sm:text-2xl md:text-4xl font-bold">
          {user?.name || def.name}
        </h1>
        <p className="text-cyan-400 text-[10px]  sm:text-lg md:text-xl sm:mt-2">
          {user?.title || def.title}
        </p>
        <p className="text-gray-400 max-w-xl text-[6px] sm:text-base sm:mt-3">{user?.about || def.about}</p>
      </section>

      {/* Education */}
      <section id="education" className="px-3 sm:px-6 py-1 sm:py-8">
        <h2 className="text-cyan-400 text-[10px] sm:text-lg md:text-2xl font-bold mb-1 sm:mb-4 flex items-center gap-2">
          <FaGraduationCap /> Education
        </h2>
        <div className="space-y-2 sm:space-y-4">
          {(user?.educations?.length ? user.educations : def.educations).map((edu, i) => (
            <div key={i} className="bg-gray-900 p-2 sm:p-4 rounded-lg shadow">
              <h3 className="text-[9px] sm:text-xl font-semibold">{edu.collegeName}</h3>
              <p className="text-gray-400 text-[8px] sm:text-sm">{edu.field}</p>
              <p className="text-gray-500 text-[8px] sm:text-sm">
                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-3 sm:px-6 sm:py-8 border-t border-gray-800">
        <h2 className="text-cyan-400  text-[10px] sm:text-lg md:text-2xl font-bold  mb-1 sm:mb-4 flex items-center gap-2">
          <FaBriefcase /> Experience
        </h2>
        <div className="">
          {(user?.experiences?.length ? user.experiences : def.experiences).map((exp, i) => (
            <div key={i} className="bg-gray-900 p-2 sm:p-4 rounded-lg shadow">
              <h3 className="text-[9px] sm:text-xl font-semibold">{exp.companyName}</h3>
              <p className="text-gray-400 text-[8px] sm:text-sm">{exp.role}</p>
              <p className="text-gray-500 text-[8px] sm:text-sm">
                {new Date(exp.startDate).getFullYear()} - {new Date(exp.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </div>
      </section>
          {/* Projects */}
      <section id="projects" className="px-3 sm:px-6 sm:py-8 ">
        <h2 className="text-cyan-400 text-[10px] sm:text-lg md:text-2xl font-bold  mb-1 sm:mb-4  flex items-center gap-2">
          <FaGraduationCap /> Projects
        </h2>
        <div className="space-y-2 sm:space-y-4">
          {(user?.projects?.length ? user.projects : def.projects).map((project, i) => (
            <div key={i} className="bg-gray-900 p-2 sm:p-4 rounded-lg shadow">
              <h3 className="text-[9px] sm:text-xl text-white font-semibold">{project.tech}</h3>
              <p className="text-gray-400 text-[9px] sm:text-sm">{project.title}</p>
              <p className="text-gray-400 text-[6px] sm:text-sm">{project.description}</p>
              <p className="text-gray-400 text-[7px] sm:text-sm">{project.link}</p>

             
            </div>
          ))}
        </div>
      </section>

      {/* skills */}
       <section id="skills" className="px-3 sm:px-6 py-1 sm:py-8">
        <h2 className="text-cyan-400 text-[10px] sm:text-lg md:text-2xl font-bold  mb-1 sm:mb-4  flex items-center gap-2">
          <FaGraduationCap /> Skills
        </h2>
        <div className="space-y-1 sm:space-y-4">
          {(user?.skills?.length ? user.skills : def.skills).map((skill, i) => (
            <div key={i} className="bg-gray-900 p-2 sm:p-4 rounded-lg shadow">
              <h3 className="text-[9px] sm:text-xl text-white font-semibold">{skill.skill}</h3>
              <p className="text-gray-400 text-[8px] sm:text-sm">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-3 sm:px-6 sm:py-8 border-t border-gray-800">
        <h2 className="text-cyan-400 text-[10px] sm:text-lg md:text-2xl font-bold  mb-1 sm:mb-4">Contact</h2>
        {(user?.contacts?.length ? user.contacts : def.contacts).map((cont, i) => (
          <div key={i} className="bg-gray-900 p-2 sm:p-4 rounded-lg shadow space-y-2">
            <p className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-sm"><FaEnvelope className="text-cyan-400" /> {cont.email}</p>
            <p className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-sm"><FaPhoneAlt className="text-cyan-400" /> {cont.phone}</p>
            <p className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-sm"><FaMapMarkerAlt className="text-cyan-400" /> {cont.address}</p>
          </div>
        ))}
      </section>

      <section className="flex gap-3 p-4 sm:p-3">
        {(user?.socialMedia?.length ? user.socialMedia : def.socialMedia).map((social, i) => {
    const Icon = portfolioIcons[social.platform.toLowerCase()] || FaGlobe;
    return (
      <a
        key={i}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition text-[8px] sm:text-lg"
      >
        <Icon className="text-[10px] sm:text-xl md:text-2xl" />
       
      </a>
    );
  })}

      </section>
    </div>
  );
};

export default Portfolio2;
