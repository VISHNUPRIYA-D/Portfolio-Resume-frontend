import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaFolderOpen,
  FaTools,
  FaEnvelope,
  FaShareAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { PortfolioContext } from "../context/PortfolioContext";


const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="text-xl md:text-2xl font-extrabold tracking-tight text-teal-300 mb-4"
  >
    {children}
  </motion.h2>
);

const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className={`rounded-xl border border-white/10 bg-slate-900/60 p-4 shadow-md hover:shadow-teal-500/10 hover:border-teal-400/20 transition ${className}`}
  >
    {children}
  </motion.div>
);

const navItems = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "projects", label: "Projects", icon: FaFolderOpen },
  { id: "skills", label: "Skills", icon: FaTools },
  { id: "contact", label: "Contact", icon: FaEnvelope },
  { id: "socials", label: "Socials", icon: FaShareAlt },
];

export default function Portfolio9({ user, def }) {
  const { menuOpen, setMenuOpen } = useContext(PortfolioContext);
  const u = user || def || {};

  const socialsMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
  };

  const educations = u.educations || [];
  const experiences = u.experiences || [];
  const projects = u.projects || [];
  const skills = (u.skills || []).map((s) => (s.skill ? s : { skill: s, level: "" }));
  const contacts = u.contacts || [];
  const socialMedia = u.socialMedia || [];

  return (
   <div className="flex flex-col lg:flex-row bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 rounded-xl overflow-hidden">
      {/* Mobile / Tablet Topbar */}
      <header className="lg:hidden sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="px-3 py-2 flex items-center justify-between">
          <a href="#home" className="font-black text-teal-300 text-sm capitalize sm:text-base">
            {u.name || "Your Name"}
          </a>
          <button className="text-slate-200 text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {menuOpen && (
          <nav className="bg-slate-950/95 border-t border-white/10">
            <ul className="px-3 py-2 grid grid-cols-2 gap-1 text-sm">
              {navItems.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/5"
                  >
                    <Icon className="text-teal-300" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Sidebar (inline, not fixed) */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="p-4 border-b border-white/10">
          <a href="#home" className="text-[14px] sm:text-lg font-black tracking-tight text-teal-300 capitalize">
            {u.name || "Your Name"}
          </a>
          <p className="text-xs text-slate-400 truncate">{u.title || "Your Role"}</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="px-2 space-y-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-teal-300 hover:bg-white/5"
                >
                  <Icon className="text-teal-300" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Socials */}
        {socialMedia.length > 0 && (
          <div className="p-3 border-t border-white/10 flex items-center gap-3">
            {socialMedia.slice(0, 4).map((s, i) => {
              const Icon = socialsMap[s.platform?.toLowerCase()] || FaGlobe;
              return (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-teal-300"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 ">
        {/* Home */}
        <section id="home" className="px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-10 pb-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h1 className="text-2xl md:text-4xl font-extrabold capitalize leading-tight">
                <span className="text-slate-100">{u.name || "Your Name"}</span>
                <br />
                <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
                  {u.title || "Your Role"}
                </span>
              </h1>
              <p className="mt-3 text-slate-400 text-sm md:text-base max-w-prose">
                {u.about || "Short introduction goes here."}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex justify-center">
              {u.image && (
                <img
                  src={u.image.startsWith("data:") ? u.image : `data:image/jpeg;base64,${u.image}`}
                  alt="Profile"
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-teal-300 shadow-xl"
                />
              )}
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-4 sm:px-6 md:px-8 lg:px-10 py-8">
          <SectionTitle>About</SectionTitle>
          <Card>
            <p className="text-slate-300 text-sm md:text-base">{u.about || "Tell more about your mission, interests and goals."}</p>
          </Card>
        </section>

        {/* Education */}
        <section id="education" className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 bg-slate-950/40">
          <SectionTitle>Education</SectionTitle>
          <div className="grid md:grid-cols-2 gap-4">
            {educations.map((e, i) => (
              <Card key={i}>
                <h3 className="text-teal-300 font-bold text-sm md:text-base">{e.collegeName || e.institution || e.schoolName}</h3>
                <p className="text-slate-300 text-sm">{e.field || e.degree}</p>
                {(e.startDate || e.endDate) && (
                  <p className="text-slate-400 text-xs mt-1">
                    {e.startDate ? new Date(e.startDate).getFullYear() : ""}
                    {e.endDate ? ` - ${new Date(e.endDate).getFullYear()}` : ""}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="px-4 sm:px-6 md:px-8 lg:px-10 py-8">
          <SectionTitle>Experience</SectionTitle>
          <div className="grid md:grid-cols-2 gap-4">
            {experiences.map((x, i) => (
              <Card key={i}>
                <h3 className="text-teal-300 font-bold text-sm md:text-base">{x.role}</h3>
                <p className="text-slate-300 text-sm">{x.companyName || x.company}</p>
                {(x.startDate || x.endDate) && (
                  <p className="text-slate-400 text-xs mt-1">
                    {x.startDate ? new Date(x.startDate).getFullYear() : ""}
                    {x.endDate ? ` - ${new Date(x.endDate).getFullYear()}` : ""}
                  </p>
                )}
                {x.description && <p className="text-slate-300 text-sm mt-2">{x.description}</p>}
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 bg-slate-950/40">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <Card key={i} className="group">
                <h3 className="font-bold text-slate-100 text-sm md:text-base">{p.title || p.name}</h3>
                {p.description && <p className="text-slate-300 text-sm mt-1">{p.description}</p>}
                <div className="mt-2 flex items-center gap-3">
                  {p.tech && (
                    <span className="text-xs text-teal-300/90 border border-teal-300/30 rounded-full px-2 py-0.5">
                      {p.tech}
                    </span>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-teal-300 hover:underline"
                    >
                      View ↗
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-4 sm:px-6 md:px-8 lg:px-10 py-8">
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="px-3 py-1 rounded-full border border-teal-300/30 text-teal-300 text-xs bg-teal-500/10"
              >
                {s.skill} {s.level ? `(${s.level})` : ""}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 bg-slate-950/40">
          <SectionTitle>Contact</SectionTitle>
          <div className="grid md:grid-cols-3 gap-4">
            {contacts.map((cont, i) => (
             <div key={i}>
                                     <p className="flex items-left justify-left gap-2 text-gray-400 text-[8px] sm:text-base"><FaEnvelope className="text-teal-300" /> {cont.email}</p>
                                     <p className="flex items-left justify-left gap-2 text-gray-400 text-[8px] sm:text-base"><FaPhoneAlt className="text-teal-300" /> {cont.phone}</p>
                                     <p className="flex items-left justify-left gap-2 text-gray-400 text-[8px] sm:text-base"><FaMapMarkerAlt className="text-teal-300" /> {cont.address}</p>
             
                                 </div>
            ))}
          </div>
        </section>

        {/* Socials */}
        <section id="socials" className="px-4 sm:px-6 md:px-8 lg:px-10 py-8">
          <SectionTitle>Socials</SectionTitle>
          <div className="flex flex-wrap items-center gap-4">
            {socialMedia.map((s, i) => {
              const Icon = socialsMap[s.platform?.toLowerCase()] || FaGlobe;
              return (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-teal-300 text-sm"
                >
                  <Icon />
                  <span>{s.platform}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-8" />
      </main>
    </div>
  );
}
