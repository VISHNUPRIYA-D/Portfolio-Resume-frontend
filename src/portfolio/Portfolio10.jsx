// Portfolio10.jsx
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import { PortfolioContext } from "../context/PortfolioContext";

/**
 * Portfolio10.jsx — Futuristic Glass (Glassmorphism + Gradient)
 * - Fully responsive: mobile, tablet, desktop
 */

const SectionTitle = ({ children, accent = "text-slate-900" }) => (
  <motion.h2
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${accent}`}
  >
    {children}
  </motion.h2>
);

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`backdrop-blur-sm bg-white/6 border border-white/8 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md ${className}`}
  >
    {children}
  </motion.div>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="hover:opacity-90 transition text-sm sm:text-base">
    {children}
  </a>
);

export default function Portfolio10({ user, def }) {
  // Use context if available
  let ctx = null;
  try {
    ctx = useContext(PortfolioContext);
  } catch (e) {
    ctx = null;
  }
  const [localOpen, setLocalOpen] = useState(false);
  const menuOpen = ctx ? ctx.menuOpen : localOpen;
  const setMenuOpen = ctx ? ctx.setMenuOpen : setLocalOpen;

  const u = user || def || {};
  const socials = u.socialMedia || u.socials || [];
  const education = u.educations || u.education || [];
  const experiences = u.experiences || u.experience || [];
  const projects = u.projects || [];
  const skills = u.skills || [];

  const socialIcon = (platform) => {
    if (!platform) return FaGlobe;
    const p = platform.toLowerCase();
    if (p.includes("github")) return FaGithub;
    if (p.includes("linkedin")) return FaLinkedin;
    if (p.includes("twitter")) return FaTwitter;
    if (p.includes("instagram")) return FaInstagram;
    return FaGlobe;
  };

  const navItems = [
    "home",
    "about",
    "education",
    "experience",
    "projects",
    "skills",
    "contact",
    "socials",
  ];

  return (
    <div className="scroll-smooth min-h-screen bg-gradient-to-br from-[#f6f7ff] to-[#eaf7ff] text-slate-900">
      {/* Top navbar */}
      <header className="flex justify-between items-center px-2 sm:px-4 md:px-8 py-2 sm:py-3 md:py-5 ">
        <div className="flex gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-300 shadow-md flex items-center justify-center text-white font-bold">
            {user?.name ? user.name.charAt(0).toUpperCase() : def?.name}
          </div>
          <div>
            <a
              href="#home"
              className="font-extrabold text-base sm:text-lg md:text-xl"
            >
              {user?.name || def?.name}
            </a>
            <div className="text-xs text-slate-500">
              {user?.title || def?.title}
            </div>
          </div>
        </div>

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

      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section
          id="home"
          className="px-3 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug sm:leading-tight"
              >
                <span className="block capitalize text-slate-900">
                  {user?.name || def?.name}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
                  {user?.title || def?.title}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base max-w-prose"
              >
                {user?.about || def.about}
              </motion.p>

              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                {(user?.socialMedia?.length
                  ? user.socialMedia
                  : def.socialMedia
                )
                  .slice(0, 4)
                  .map((s, i) => {
                    const Icon = socialIcon(s.platform);
                    return (
                      <motion.a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 * i }}
                        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-white/10 border border-white/8 flex items-center gap-1.5 sm:gap-2 text-slate-900 hover:scale-105 text-xs sm:text-sm"
                      >
                        <Icon />
                        <span>{s.platform}</span>
                      </motion.a>
                    );
                  })}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <GlassCard className="w-full max-w-xs sm:max-w-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 sm:border-4 border-white/12 shadow-md mb-2 sm:mb-3">
                    {user?.image ? (
                      <img
                        src={
                          user.image.startsWith("data:")
                            ? user.image
                            : `data:image/jpeg;base64,${user.image}`
                        }
                        alt="profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-cyan-300 flex items-center justify-center text-white font-bold text-lg sm:text-2xl">
                        {user?.name
                          ? user.name.charAt(0).toUpperCase()
                          : def.name}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    {user?.name || def?.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {user?.title || def?.title}
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle>About</SectionTitle>
            <GlassCard>
              <p className="text-slate-700 text-sm sm:text-base">
                {user?.about || def.about}
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Education</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {(user?.educations?.length
                ? user.educations
                : def.educations
              ).map((edu, i) => (
                <GlassCard key={i}>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {edu.schoolName}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {edu.collegeName}
                  </p>
                  <p className="text-[8px] sm:text-sm md:text-base text-slate-400">
                    {new Date(edu.startDate).getFullYear()} -{" "}
                    {new Date(edu.endDate).getFullYear()}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-3 sm:space-y-4">
              {(user?.experiences?.length
                ? user.experiences
                : def.experiences
              ).map((exp, i) => (
                <GlassCard key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">
                        {exp.role}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {exp.companyName}
                      </p>
                    </div>
                    <div className="text-xs text-slate-400">
                      <p className="text-[8px] sm:text-sm md:text-bas text-gray-500">
                        {new Date(exp.startDate).getFullYear()} -{" "}
                        {new Date(exp.endDate).getFullYear()}
                      </p>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                      {exp.description}
                    </p>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Projects</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {(user?.projects?.length ? user.projects : def.projects).map(
                (p, i) => (
                  <GlassCard key={i}>
                    <h4 className="font-semibold text-sm sm:text-base">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {p.description}
                    </p>
                    <div className="mt-2 sm:mt-3 flex items-center gap-2">
                      <p className="text-[10px] sm:text-xs text-slate-600 bg-white/6 px-2 py-0.5 rounded">
                        {p.tech}
                      </p>

                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] sm:text-xs text-slate-700 hover:underline ml-auto"
                      >
                        View ↗
                      </a>
                    </div>
                  </GlassCard>
                )
              )}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Skills</SectionTitle>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {(user?.skills?.length ? user.skills : def.skills).map((s, i) => {
                const label = s.skill;
                return (
                  <motion.span
                    key={i}
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25 + i * 0.02 }}
                    className="text-[10px] sm:text-xs bg-white/6 border border-white/8 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-slate-700"
                  >
                    {label} {s.level ? `• ${s.level}` : ""}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Contact</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {(user?.contacts?.length ? user.contacts : def.contacts).map(
                (cont, i) => (
                  <GlassCard
                    key={i}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div key={i}>
                      <p className="flex items-left justify-left gap-2 text-gray-400 text-[8px] sm:text-base">
                        <FaEnvelope className="text-slate-600" /> {cont.email}
                      </p>
                      <p className="flex items-left justify-left gap-2 text-gray-400 text-[8px] sm:text-base">
                        <FaPhoneAlt className="text-slate-600" /> {cont.phone}
                      </p>
                      <p className="flex items-left justify-left gap-2 text-gray-400 text-[8px] sm:text-base">
                        <FaMapMarkerAlt className="text-slate-600" />{" "}
                        {cont.address}
                      </p>
                    </div>
                  </GlassCard>
                )
              )}
            </div>
          </div>
        </section>

        {/* Socials */}
        <section
          id="socials"
          className="px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Socials</SectionTitle>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {(user?.socialMedia?.length? user.socialMedia : def.socialMedia).map((s, i) => {
                const Icon = socialIcon(s.platform );
                return (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-white/8 border border-white/8 flex items-center gap-1.5 sm:gap-2 hover:scale-105 text-xs sm:text-sm"
                  >
                    <Icon /> {s.platform }
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 sm:py-6 text-center text-xs sm:text-sm text-slate-500">
        © {new Date().getFullYear()} {u.name || "Your Name"}. All rights
        reserved.
      </footer>
    </div>
  );
}
