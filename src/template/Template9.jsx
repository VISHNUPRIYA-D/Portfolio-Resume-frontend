import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Template9 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-black text-gray-100 font-sans sm:min-h-screen px-2 sm:px-6 py-2 sm:py-10">
      {/* Profile */}
      <div className="text-center  sm:mb-10">
        <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-full border-2 sm:border-4 border-purple-400 shadow-lg overflow-hidden">
          <img
            src={user.image ? `data:image/jpeg;base64,${user.image}` : def.image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-[13px] sm:text-xl md:text-3xl font-bold mt-1 sm:mt-4">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-purple-400 text-[9px] sm:text-sm md:text-lg">
          {user.title ? user.title : def.title}
        </p>
        <p className="max-w-2xl mx-auto text-[7px] sm:text-base mt-1 text-gray-300 leading-snug sm:leading-relaxed">
          {user.about ? user.about : def.about}
        </p>
         {(user.socialMedia?.length ? user.socialMedia : def.socialMedia).map((sm) => (
            <div
              key={sm.id}
              className=" p-1 sm:p-3 flex flex-wrap items-center gap-1 sm:gap-3 min-w-[140px]"
            >
              <div className="flex">
                 <TbWorld className="text-[10px] sm:text-sm mx-1 mt-[1px] sm:mt-1"/>
              <a
                className="text-emerald-400 underline text-[7px] sm:text-sm"
                target="_blank"
                rel="noreferrer"
                href={sm.link}
              >
                {sm.url}
              </a>

              </div>
            
            </div>
          ))}
      </div>

      {/* Education / Experience / Skills */}
      <div className="max-w-6xl mx-auto grid gap-2  sm:gap-6">
        {/* Education */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-1 px-2 sm:p-4 shadow border border-purple-400/30">
          <h2 className="text-[10px] sm:text-lg font-semibold mb-1 sm:mb-2 text-purple-300">Education</h2>
          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div key={edu.id} className="mb-1">
              <h3 className="font-semibold text-[8px] sm:text-base">{edu.schoolName || ''}</h3>
              <h3 className="font-semibold text-[8px] sm:text-base">{edu.collegeName || ''}</h3>
              <p className="text-gray-400 text-[7px] sm:text-sm">{edu.field || ''}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-1 px-2 sm:p-4 shadow border border-purple-400/30">
          <h2 className="text-[10px] sm:text-lg font-semibold mb-1 sm:mb-2 text-purple-300">Experience</h2>
          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div key={exp.id} className="mb-1">
              <h3 className="font-semibold text-[8px] sm:text-base">{exp.companyName}</h3>
              <p className="text-gray-400 text-[7px] sm:text-sm">{exp.role}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-1 px-2 sm:p-4 shadow border border-purple-400/30">
          <h2 className="text-[10px] sm:text-lg font-semibold mb-1 sm:mb-2 text-purple-300">Skills</h2>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {(user.skills?.length ? user.skills : def.skills).map((s) => (
              <span
                key={s.id}
                className="px-1 sm:px-3 sm:py-1 bg-purple-500/50 rounded-full text-[7px] sm:text-sm"
              >
                {s.skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-5xl mx-auto mt-2 sm:mt-10">
        <h2 className="text-[10px] sm:text-lg font-semibold mb-1 text-purple-300">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-2 sm:gap-6">
          {(user.projects?.length ? user.projects : def.projects).map((proj) => (
            <div
              key={proj.id}
              className="bg-white/10 backdrop-blur-md rounded-lg p-1 px-2 sm:p-4 shadow border border-purple-400/30"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">{proj.title}</h3>
              <p className="text-gray-400 text-[7px] sm:text-sm">{proj.description}</p>
              <a href={proj.link} className="text-purple-400 underline text-[7px] sm:text-sm">
                {proj.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="text-center mt-2 sm:mt-10">
        <h2 className="text-[10px] sm:text-lg font-semibold mb-1 text-purple-300">Contact</h2>
        {(user.contacts?.length ? user.contacts : def.contacts).map((contact) => (
          <div className="sm:space-y-2 text-[8px] sm:text-sm" key={contact.id}>
            <p className="flex items-center justify-center gap-1 sm:gap-2"><FaEnvelope /> {contact.email}</p>
            <p className="flex items-center justify-center gap-1 sm:gap-2"><FaPhoneAlt /> {contact.phone}</p>
            <p className="flex items-center justify-center gap-1 sm:gap-2"><FaMapMarkerAlt /> {contact.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template9;
