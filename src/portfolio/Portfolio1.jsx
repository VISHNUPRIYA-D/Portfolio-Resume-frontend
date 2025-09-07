import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Portfolio1 = ({ user, def }) => {
  if (!user) return null;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-gray-300 font-sans  sm:min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-2 sm:px-4 md:px-8 py-2 sm:py-3 md:py-5 border-b border-gray-800">
        <h1 className="text-[13px] capitalize sm:text-xl md:text-2xl font-bold text-white mr-4">
          {user.name ? (
            <span className="text-red-500">
              {user.name ? user.name.split(" ")[0] : def.name.split(" ")[0]}
            </span>
          ) : (
            <span className="text-red-500">
              {user.name ? user.name : def.name}
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
                className="hover:text-red-500 cursor-pointer transition"
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
      <section
        className="flex flex-row items-center justify-between px-2 sm:px-6 md:px-10 py-1 sm:py-8 md:py-12 gap-2 sm:gap-6 md:gap-10"
        id="home"
      >
        <div className="max-w-xl text-left">
          <p className="text-blue-400 text-[9px] sm:text-base">Hi There! I'm</p>
          <h2 className="text-[9px] sm:text-2xl md:text-4xl font-bold text-white sm:mt-2">
            {user.title ? user.title : def.title}
          </h2>
          <p className="text-gray-400 mt-1 sm:mt-4 leading-relaxed text-[6px] sm:text-sm md:text-base">
            {user.about ? user.about : def.about}
          </p>
        </div>
        <div className="">
          {user.image ? (
            <img
              src={`data:image/jpeg;base64,${user.image}`}
              alt="Profile"
              className="rounded-2xl shadow-lg w-14 h-14 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover"
            />
          ) : (
            <img
              src={`${def.image}`}
              alt="Profile"
              className="rounded-2xl shadow-lg w-14 h-14 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover"
            />
          )}
        </div>
      </section>

      {/* Education */}
      <section
        className="px-2 sm:px-6 md:px-10 py-1 sm:py-8 md:py-10 border-t border-gray-800"
        id="education"
      >
        <h2 className="text-[10px] sm:text-xl md:text-2xl text-red-500 font-bold mb-1 sm:mb-4 md:mb-6 flex items-center gap-2">
          <FaGraduationCap /> Education
        </h2>
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {(user.educations?.length ? user.educations : def.educations).map(
            (edu) => (
              <div
                key={edu.id}
                className="bg-gray-900 p-2 sm:p-3 md:p-4 rounded-lg shadow"
              >
              <h3 className="font-semibold text-[8px] sm:text-base">{edu.schoolName }</h3>

                <h3 className="text-[9px] sm:text-lg md:text-xl text-white font-semibold">
                  {edu.collegeName}
                </h3>
                <p className="text-gray-400 text-[8px] sm:text-sm md:text-base">
                  {edu.field}
                </p>
                <p className="text-[8px] sm:text-sm md:text-base text-gray-500">
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {new Date(edu.endDate).getFullYear()}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Experience */}
      <section
        className="px-2 sm:px-6 md:px-10 py-1 sm:py-6 md:py-10 border-t border-gray-800"
        id="experience"
      >
        <h2 className="text-[10px] sm:text-xl md:text-2xl text-red-500 font-bold mb-1 sm:mb-4 md:mb-6 flex items-center gap-2">
          <FaBriefcase /> Experience
        </h2>
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {(user.experiences?.length ? user.experiences : def.experiences).map(
            (exp) => (
              <div
                key={exp.id}
                className="bg-gray-900 p-2 sm:p-3 md:p-4 rounded-lg shadow"
              >
                
                <h3 className="text-[9px] sm:text-lg md:text-xl text-white font-semibold">
                  {exp.companyName}
                </h3>
                <p className="text-gray-400 text-[9px] sm:text-sm md:text-base">
                  {exp.role}
                </p>
                <p className="text-[8px] sm:text-sm md:text-base text-gray-500">
                  {exp.description}
                </p>
                <p className="text-[8px] sm:text-sm md:text-base text-gray-500 ">
                  {new Date(exp.startDate).getFullYear()} -{" "}
                  {new Date(exp.endDate).getFullYear()}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section
        className="px-2 sm:px-6 md:px-10 py-2 sm:py-6 md:py-10 border-t border-gray-800"
        id="projects"
      >
        <h2 className="text-[10px] sm:text-xl md:text-2xl text-red-500 font-bold mb-1 sm:mb-4 md:mb-6">
          Projects
        </h2>
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {(user.projects?.length ? user.projects : def.projects).map((proj) => (
            <div
              key={proj.id}
              className="bg-gray-900 p-2 sm:p-4 rounded-lg shadow"
            >
              <h3 className="text-[9px] sm:text-lg md:text-xl text-white font-semibold">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-[8px] sm:text-sm md:text-base">
                {proj.description}
              </p>
              <p className="text-[8px] sm:text-sm md:text-base text-gray-500">
                Tech: {proj.tech}
              </p>
              <a
                href={proj.link}
                className="text-blue-400 underline text-[8px] sm:text-sm"
                target="_blank"
                rel="noreferrer"
              >
                {proj.link}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        className="px-2 sm:px-6 md:px-10 py-2 sm:py-6 md:py-10 border-t border-gray-800"
        id="skills"
      >
        <h2 className="text-[10px] sm:text-xl md:text-2xl text-red-500 font-bold mb-1 sm:mb-4 md:mb-6">
          Skills
        </h2>
        <ul className="flex gap-1 sm:gap-3 flex-wrap">
          {(user.skills?.length ? user.skills : def.skills).map((s) => (
            <li
              key={s.id}
              className="px-1 sm:px-2 md:px-3 sm:py-1 bg-red-500 text-white rounded-full text-[6px] sm:text-sm"
            >
              {s.skill} ({s.level})
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section
        className="px-2 sm:px-6 md:px-10 py-1 pb-3 sm:py-6 md:py-10 border-t text-white border-gray-800"
        id="contact"
      >
        <h2 className="text-[10px] sm:text-xl md:text-2xl text-red-500 font-bold mb-1 sm:mb-4 md:mb-6">
          Contact
        </h2>
        {(user.contacts?.length ? user.contacts : def.contacts).map((cont) => (
          <div
            key={cont.id}
            className="bg-gray-900 p-2 sm:p-4 rounded-lg shadow space-y-1 sm:space-y-2"
          >
            <p className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-sm md:text-base">
              <FaEnvelope className="text-red-500" /> {cont.email}
            </p>
            <p className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-sm md:text-base">
              <FaPhoneAlt className="text-red-500" /> {cont.phone}
            </p>
            <p className="flex items-center gap-1 sm:gap-2  text-[8px] sm:text-sm md:text-base">
              <FaMapMarkerAlt className="text-red-500" /> {cont.address}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio1;
