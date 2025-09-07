import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Template8 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-sans sm:min-h-screen px-3 sm:px-6 py-4 sm:py-10">
      {/* Header */}
      <header className="flex flex-col items-center text-center mb-6 sm:mb-10">
        <img
          src={user.image ? `data:image/jpeg;base64,${user.image}` : def.image}
          alt="Profile"
          className="w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 sm:border-4 border-purple-500 shadow object-cover"
        />
        <h1 className="text-[13px] capitalize sm:text-xl md:text-3xl font-bold mt-2 sm:mt-4">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-purple-400 text-[9px] sm:text-sm md:text-lg">
          {user.title ? user.title : def.title}
        </p>
        <p className="max-w-2xl text-[7px] sm:text-base mt-2 text-gray-300 leading-snug sm:leading-relaxed">
          {user.about ? user.about : def.about}
        </p>
      </header>

      {/* Skills */}
      <section className="max-w-3xl mx-auto text-center mb-3 sm:mb-8">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-purple-400">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-3">
          {(user.skills?.length ? user.skills : def.skills).map((s) => (
            <span
              key={s.id}
              className="px-1 sm:px-2 md:px-4 py-0.5 sm:py-1 md:py-2 bg-purple-600 text-white rounded-full text-[7px] sm:text-sm"
            >
              {s.skill} ({s.level})
            </span>
          ))}
        </div>
      </section>

      {/* Education & Experience */}
      <div className="flex px-4 sm:px-2 justify-center gap-2 sm:gap-6 max-w-5xl ">
        {/* Education */}
        <section className="flex-1 min-w-[120px] sm:min-w-[220px]">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-2 text-purple-400">
            Education
          </h2>
          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-800 rounded-lg shadow p-1 sm:p-3 mb-2"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">{edu.collegeName}</h3>
              <p className="text-gray-400 text-[7px] sm:text-sm">{edu.field}</p>
              <p className="text-gray-500 text-[7px] sm:text-sm">
                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="flex-1 min-w-[120px] sm:min-w-[220px]">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-2 text-purple-400">
            Experience
          </h2>
          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800 rounded-lg shadow p-1 sm:p-3 mb-2"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">
                {exp.role} @ {exp.companyName}
              </h3>
              <p className="text-gray-500 text-[7px] sm:text-sm">
                {new Date(exp.startDate).getFullYear()} - {new Date(exp.endDate).getFullYear()}
              </p>
              <p className="text-gray-300 text-[7px] sm:text-sm">{exp.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mt-2 sm:mt-10">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-2 text-purple-400">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
          {(user.projects?.length ? user.projects : def.projects).map((proj) => (
            <div
              key={proj.id}
              className="bg-gray-800 rounded-lg shadow p-1 sm:p-4 flex-1 min-w-[200px]"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">{proj.title}</h3>
              <p className="text-gray-300 text-[7px] sm:text-sm">{proj.description}</p>
              <p className="text-gray-500 text-[7px] sm:text-sm mb-1">Tech: {proj.tech}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-purple-300 underline text-[7px] sm:text-sm"
              >
                {proj.link}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto mt-2 sm:mt-10 text-center">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-2 text-purple-400">
          Contact
        </h2>
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
      </section>

      {/* Social Media */}
      <section className="max-w-4xl mx-auto mt-2 sm:mt-10 text-center">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-2 text-purple-400">
          Social Media
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {(user.socialMedia?.length ? user.socialMedia : def.socialMedia).map((sm) => (
            <div
              key={sm.id}
              className="bg-gray-800 rounded-lg shadow p-1 sm:p-3 flex flex-col sm:flex-row items-center gap-1 sm:gap-3 min-w-[140px]"
            >
              <h3 className="font-semibold text-[8px] sm:text-sm capitalize">{sm.platform}</h3>
              <a
                className="text-emerald-400 underline text-[7px] sm:text-sm"
                target="_blank"
                rel="noreferrer"
                href={sm.link}
              >
                {sm.url}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Template8;
