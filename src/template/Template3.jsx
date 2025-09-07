import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Template3 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-sans sm:min-h-screen px-2 sm:px-10 py-3 sm:py-5 md:py-10">
      {/* Hero */}
      <div className="flex flex-col items-center text-center mb-1 sm:mb-6 md:mb-12">
        {user.image ? (
          <img
            src={`data:image/jpeg;base64,${user.image}`}
            alt="Profile"
            className="w-14 md:w-32 md:h-32 sm:w-24 h-14 sm:h-24 rounded-full mx-auto border-4 border-purple-500 shadow object-cover"
          />
        ) : (
          <img
            src={`${def.image}`}
            alt="Profile"
            className="w-14 md:w-32 md:h-32 sm:w-24 h-14 sm:h-24 rounded-full mx-auto border-4 border-purple-500 shadow object-cover"
          />
        )}
        <h1 className="text-[13px] capitalize sm:text-2xl md:text-4xl font-bold sm:mt-2 md:mt-4">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-[9px] sm:text-sm md:text-lg text-purple-400">
          {user.title ? user.title : def.title}
        </p>
        <p className="max-w-2xl mx-auto mt-1 sm:mt-3 text-gray-300 text-[6px] sm:text-base leading-relaxed px-2">
          {user.about ? user.about : def.about}
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto grid gap-1 sm:gap-8 grid-cols-2 md:gap-10">
        {/* Education */}
        <div>
          <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-2 md:mb-3 text-purple-400">Education</h2>
          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-800 p-1 sm:p-3 md:p-4 rounded-lg mb-1 sm:mb-2 md:mb-3 shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">{edu.collegeName}</h3>
              <p className="text-gray-400 text-[7px] sm:text-sm">{edu.field}</p>
              <p className="text-[6px] sm:text-sm text-gray-500">
                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-2 md:mb-3 text-purple-400">Experience</h2>
          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800 p-1 sm:p-3 md:p-4 rounded-lg mb-3 shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold  text-[8px] sm:text-base capitalize">{exp.companyName}</h3>
              <p className="text-gray-400 text-[7px] sm:text-sm">{exp.role}</p>
              <p className="text-[6px] sm:text-sm text-gray-500">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-5xl mx-autosm:mt-4 md:mt-10">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-4 text-purple-400">Projects</h2>
        <div className="grid gap-6 grid-cols-2">
          {(user.projects?.length ? user.projects : def.projects).map((proj) => (
            <div
              key={proj.id}
              className="bg-gray-800 rounded-lg p-1 sm:p-4  shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold capitalize text-[8px] sm:text-base">{proj.title}</h3>
              <p className="text-gray-400 text-[6px] sm:text-sm">{proj.description}</p>
              <p className="text-gray-400 text-[6px] sm:text-sm sm:mb-1">Tech: {proj.tech}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 underline text-[7px]  sm:text-sm block mt-2 break-words"
              >
                {proj.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-3xl mx-auto mt-1 sm:mt-4 md:mt-10 text-center px-2">
        <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-4 text-purple-400">Skills</h2>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-3">
          {(user.skills?.length ? user.skills : def.skills).map((s) => (
            <span
              key={s.id}
              className="px-1 sm:px-4  sm:py-2 bg-purple-500 text-white rounded-full text-[7px] sm:text-sm"
            >
              {s.skill} ({s.level})
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-3xl mx-auto mt-1 sm:mt-4 md:mt-10 text-center px-2">
        <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-4 text-purple-400">Contact</h2>
        {(user.contacts?.length ? user.contacts : def.contacts).map((contact) => (
          <div className="space-y-1 sm:space-y-2 text-[8px] sm:text-sm" key={contact.id}>
            <p className="flex items-center justify-center gap-1 sm:gap-2">
              <FaEnvelope /> {contact.email}
            </p>
            <p className="flex items-center justify-center gap-1 sm:gap-2">
              <FaPhoneAlt /> {contact.phone}
            </p>
            <p className="flex items-center justify-center gap-1 sm:gap-2">
              <FaMapMarkerAlt /> {contact.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template3;
