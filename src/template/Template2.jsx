import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Template2 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gray-50 text-gray-800 font-sans sm:min-h-screen px-2 sm:px-10 py-2 sm:py-5 md:py-10">
      {/* Header */}
      <header className="flex flex-col items-center text-center mb-1 sm:mb-6 md:mb-12">
        <img
          src={user.image ? `data:image/jpeg;base64,${user.image}` : def.image}
          alt="Profile"
          className="w-14 md:w-32 md:h-32 sm:w-24 h-14 sm:h-24 rounded-full shadow-lg object-cover"
        />
        <h1 className="text-[13px] capitalize md:text-3xl sm:text-xl font-bold sm:mt-2 md:mt-4">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-[9px] sm:text-sm md:text-lg text-gray-600">
          {user.title ? user.title : def.title}
        </p>
      </header>

      {/* About */}
      <section className="max-w-4xl mx-auto text-center mb-4 sm:mb-12">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-indigo-600">
          About Me
        </h2>
        <p className="text-[7px] sm:text-base text-gray-700 leading-snug sm:leading-relaxed">
          {user.about ? user.about : def.about}
        </p>
      </section>

      {/* Education & Experience */}
      <div className="flex flex-2 justify-center gap-1 sm:gap-8 max-w-5xl mx-auto">
        <section className="flex-1 min-w-[100px] sm:min-w-[220px]">
          <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-2 text-indigo-600">
            Education
          </h2>
          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div key={edu.id} className="bg-white rounded-lg shadow p-1 sm:p-4 mb-2 sm:mb-3">
              <h3 className="font-semibold text-[8px] sm:text-base">{edu.collegeName}</h3>
              <p className="text-gray-600 text-[7px] sm:text-sm">{edu.field}</p>
              <p className="text-gray-500 text-[7px] sm:text-sm">
                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </section>

        <section className="flex-1 min-w-[100px] sm:min-w-[220px]">
          <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-2 text-indigo-600">
            Experience
          </h2>
          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div key={exp.id} className="bg-white rounded-lg shadow p-1 sm:p-4 mb-2 sm:mb-3">
              <h3 className="font-semibold text-[8px] sm:text-base">{exp.companyName}</h3>
              <p className="text-gray-600 text-[7px] sm:text-sm">{exp.role}</p>
              <p className="text-gray-500 text-[7px] sm:text-sm">{exp.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Projects */}
      <section className="max-w-5xl mx-auto  sm:mt-4 md:mt-10">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-4 text-indigo-600">Projects</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
          {(user.projects?.length ? user.projects : def.projects).map((proj) => (
            <div key={proj.id} className="bg-white rounded-lg shadow p-1 sm:p-4 flex-1 min-w-[220px]">
              <h3 className="font-semibold text-[8px] sm:text-base">{proj.title}</h3>
              <p className="text-gray-600 text-[6px] sm:text-sm">{proj.description}</p>
              <p className="text-gray-500 text-[6px] sm:text-sm sm:mb-1">Tech: {proj.tech}</p>
              <a href={proj.link} target="_blank" rel="noreferrer" className="text-indigo-600 underline text-[7px] sm:text-sm">
                {proj.link}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto mt-1 sm:mt-4 md:mt-10 text-center">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-4 text-indigo-600">Skills</h2>
        <div className="flex flex-2 justify-center gap-1 sm:gap-3">
          {(user.skills?.length ? user.skills : def.skills).map((s) => (
            <span key={s.id} className="px-1 md:px-4 sm:px-2 sm:py-1 md:py-2 bg-indigo-600 text-white rounded-full text-[7px] sm:text-sm">
              {s.skill} ({s.level})
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto mt-1 sm:mt-4 md:mt-10 text-center">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-4 text-indigo-600">Contact</h2>
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
    </div>
  );
};

export default Template2;
