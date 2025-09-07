import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTools } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

const Template11 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gradient-to-tr from-indigo-700 via-purple-600 to-cyan-500 text-white font-sans sm:min-h-screen px-3 sm:px-8 py-3 sm:py-12">
      
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-8 mb-2 sm:mb-12">
        <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img
            src={user.image ? `data:image/jpeg;base64,${user.image}` : def.image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center sm:text-left mt-0">
          <h1 className="text-lg capitalize sm:text-2xl md:text-4xl font-bold">
            {user.name || def.name}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl opacity-90">
            {user.title || def.title}
          </p>
          <p className="max-w-2xl text-[10px] sm:text-sm md:text-base leading-relaxed opacity-80">
            {user.about || def.about}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid gap-4 sm:gap-6">
        {/* Education */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-6 shadow border border-white/30">
          <h2 className="text-xs sm:text-lg font-semibold mb-1 sm:mb-3 flex gap-2 items-center">
            <FaGraduationCap className="text-yellow-300" /> Education
          </h2>
          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div key={edu.id} className="mb-1 sm:mb-3">
              <h3 className="font-semibold text-[10px] sm:text-base">{edu.collegeName}</h3>
              <p className="text-[9px] sm:text-sm opacity-90">{edu.field}</p>
              <p className="text-[8px] sm:text-xs opacity-70">
                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 sm:p-6 shadow border border-white/30">
          <h2 className="text-xs sm:text-lg font-semibold mb-1 sm:mb-3 flex gap-2 items-center">
            <FaBriefcase className="text-green-300" /> Experience
          </h2>
          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div key={exp.id} className="mb-1 sm:mb-3">
              <h3 className="font-semibold text-[10px] sm:text-base">{exp.companyName}</h3>
              <p className="text-[9px] sm:text-sm opacity-90">{exp.role}</p>
              <p className="text-[8px] sm:text-xs opacity-70">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-6 shadow border border-white/30">
          <h2 className="text-xs sm:text-lg font-semibold mb-1 sm:mb-3 flex gap-2 items-center">
            <FaProjectDiagram className="text-pink-300" /> Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
            {(user.projects?.length ? user.projects : def.projects).map((proj) => (
              <div key={proj.id} className="bg-white/10 rounded-lg p-2 sm:p-4">
                <h3 className="font-semibold text-[10px] sm:text-base">{proj.title}</h3>
                <p className="text-[9px] sm:text-sm opacity-90">{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-200 underline text-[8px] sm:text-sm mt-1 inline-block"
                >
                  {proj.link}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-6 shadow border border-white/30">
          <h2 className="text-xs sm:text-lg font-semibold mb-1 sm:mb-3 flex gap-2 items-center">
            <FaTools className="text-purple-300" /> Skills
          </h2>
          <div className="flex flex-wrap gap-1 sm:gap-3">
            {(user.skills?.length ? user.skills : def.skills).map((s) => (
              <span
                key={s.id}
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-indigo-500 rounded-full text-[8px] sm:text-sm"
              >
                {s.skill} ({s.level})
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-6 shadow border border-white/30">
          <h2 className="text-xs sm:text-lg font-semibold mb-1 sm:mb-3 flex gap-2 items-center">
            <BsFillPersonLinesFill className="text-orange-300" /> Contact
          </h2>
          {(user.contacts?.length ? user.contacts : def.contacts).map((contact) => (
            <div key={contact.id} className="space-y-1 sm:space-y-2 text-[9px] sm:text-sm">
              <p className="flex items-center gap-2"><FaEnvelope /> {contact.email}</p>
              <p className="flex items-center gap-2"><FaPhoneAlt /> {contact.phone}</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> {contact.address}</p>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-6 shadow border border-white/30">
          <h2 className="text-xs sm:text-lg font-semibold mb-1 sm:mb-3 flex gap-2 items-center">
            <GiNetworkBars className="text-teal-300" /> Social Media
          </h2>
          <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
            {(user.socialMedia?.length ? user.socialMedia : def.socialMedia).map((sm) => (
              <div key={sm.id} className="flex flex-col">
                <span className="capitalize text-[9px] sm:text-sm">{sm.platform}</span>
                <a
                  href={sm.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-200 underline text-[8px] sm:text-sm break-all"
                >
                  {sm.url}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template11;
