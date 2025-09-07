import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Template12 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 sm:min-h-screen py-4 pb-6 sm:py-12 px-2 sm:px-6 text-white font-sans">
      {/* Hero */}
      <div className="text-center mb-6 sm:mb-12">
        {user.image ? (
          <img
            src={`data:image/jpeg;base64,${user.image}`}
            alt="Profile"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mx-auto border-2 sm:border-4 border-white shadow-lg"
          />
        ) : (
          <img
            src={`${def.image}`}
            alt="Profile"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mx-auto border-2 sm:border-4 border-white shadow-lg"
          />
        )}

        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold mt-2 sm:mt-4">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-[10px] sm:text-lg md:text-xl">
          {user.title ? user.title : def.title}
        </p>
        <p className="max-w-xl mx-auto mt-2 sm:mt-4 text-[9px] sm:text-base">
          {user.about ? user.about : def.about}
        </p>
      </div>

      {/* Grid Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-1 sm:gap-6">
        {/* Education */}
        <div className="bg-white/20 p-2 sm:p-6 rounded-lg sm:rounded-xl shadow">
          <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold mb-1 sm:mb-3">🎓 Education</h2>
          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div key={edu.id} className="mb-1 sm:mb-3">
              <h3 className="font-semibold text-[8px] sm:text-sm md:text-lg">{edu.collegeName}</h3>
              <p className="text-[7px] sm:text-sm md:text-base">{edu.field}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-white/20 p-2 sm:p-6 rounded-lg sm:rounded-xl shadow">
          <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold mb-1 sm:mb-3">💼 Experience</h2>
          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div key={exp.id} className="mb-1 sm:mb-3">
              <h3 className="font-semibold capitalize text-[8px] sm:text-sm md:text-lg">{exp.companyName}</h3>
              <p className="text-[7px] sm:text-sm md:text-base capitalize">{exp.role}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-white/20 p-2 sm:p-6 rounded-lg sm:rounded-xl shadow">
          <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold mb-1 sm:mb-3">🛠 Skills</h2>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {(user.skills?.length ? user.skills : def.skills).map((s) => (
              <span
                key={s.id}
                className="bg-yellow-400 text-black px-1 sm:px-3 py-[1px] sm:py-1 rounded-full text-[6px] sm:text-sm"
              >
                {s.skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto mt-6 sm:mt-12">
        <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold mb-1 sm:mb-3">🚀 Projects</h2>
        <div className="grid grid-cols-2 gap-1 sm:gap-6">
          {(user.projects?.length ? user.projects : def.projects).map((proj) => (
            <div key={proj.id} className="bg-white/20 p-2 sm:p-6 rounded-lg sm:rounded-xl shadow">
              <h3 className="font-semibold capitalize text-[8px] sm:text-sm md:text-lg">{proj.title}</h3>
              <p className="text-[7px] sm:text-sm md:text-base">{proj.description}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  className="underline text-yellow-300 text-[8px] sm:text-sm"
                >
                  {proj.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      {(user.contacts?.length ? user.contacts : def.contacts).map((contact) => (
        <div
          className="max-w-3xl mx-auto mt-6 sm:mt-12 text-center bg-white/20 p-2 sm:p-6 rounded-lg sm:rounded-xl shadow"
          key={contact.id}
        >
          
          <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold mb-1 sm:mb-3">📩 Contact</h2>
          {contact.email && (
            <p className="flex justify-center gap-1 sm:gap-2 text-[7px] sm:text-sm md:text-base">
              <FaEnvelope /> {contact.email}
            </p>
          )}
          {contact.phone && (
            <p className="flex justify-center gap-1 sm:gap-2 text-[7px] sm:text-sm md:text-base">
              <FaPhoneAlt /> {contact.phone}
            </p>
          )}
          {contact.address && (
            <p className="flex justify-center gap-1 sm:gap-2 text-[8px] sm:text-sm md:text-base">
              <FaMapMarkerAlt /> {contact.address}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Template12;
