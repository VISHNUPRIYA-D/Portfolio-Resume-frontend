import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const Template4 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="sm:min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900 p-2">
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6  sm:pt-7 md:pt-14 pb-4 sm:pb-10 text-center">
        {user.image ? (
          <img
            src={`data:image/jpeg;base64,${user.image}`}
            alt="Profile"
            className="mx-auto rounded-2xl shadow-lg w-12 h-12 sm:w-40 sm:h-40 md:w-64 md:h-64 object-cover"
          />
        ) : (
          <img
            src={def.image}
            alt="Profile"
            className="mx-auto rounded-2xl shadow-lg w-20 h-14 sm:w-40 sm:h-40 md:w-64 md:h-64  object-cover"
          />
        )}
        <h1 className="text-[13px] capitalize md:text-4xl sm:text-2xl font-bold mt-2 sm:mt-4">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-indigo-600 text-[9px] sm:text-sm md:text-lg">
          {user.title ? user.title : def.title}
        </p>
        <p className="max-w-2xl mx-auto mt-1 sm:mt-4 text-gray-600 text-[6px] sm:text-sm md:text-lg leading-relaxed px-2">
          {user.about ? user.about : def.about}
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-1 sm:px-4 md:px-6 pb-1 sm:pb-5 md:pb-16 grid gap-1 sm:gap-4 md:gap-10 grid-cols-2">
        {/* Education */}
        <section>
          <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-4 flex items-center gap-1 sm:gap-2 text-indigo-700">
            <FaGraduationCap /> Education
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {(user.educations?.length ? user.educations : def.educations).map(
              (edu) => (
                <div
                  key={edu.id}
                  className="bg-white border border-indigo-100 rounded-xl p-1 sm:p-4 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-[8px] sm:text-base">{edu.collegeName}</h3>
                  <p className="text-gray-600 text-[7px] sm:text-sm">{edu.field}</p>
                  <p className="text-[7px] sm:text-sm text-gray-500">
                    {new Date(edu.startDate).getFullYear()} –{" "}
                    {new Date(edu.endDate).getFullYear()}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-4 flex items-center gap-2 text-indigo-700">
            <FaBriefcase /> Experience
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {(user.experiences?.length
              ? user.experiences
              : def.experiences
            ).map((exp) => (
              <div
                key={exp.id}
                className="bg-white border border-indigo-100 rounded-xl p-1 sm:p-4 mb-2 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold capitalize text-[8px] sm:text-base">
                  {exp.role} @ {exp.companyName}
                </h3>
                <p className="text-[7px] sm:text-sm text-gray-500">
                  {new Date(exp.startDate).getFullYear()} –{" "}
                  {new Date(exp.endDate).getFullYear()}
                </p>
                <p className="text-gray-700 text-[6px] sm:text-sm mt-1">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="md:col-span-2 ">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-4 text-indigo-700">
            Projects
          </h2>
          <div className="grid gap-2 sm:gap-3 md:gap-6 grid-cols-2">
            {(user.projects?.length ? user.projects : def.projects).map(
              (proj) => (
                <article
                  key={proj.id}
                  className="bg-white border border-indigo-100 rounded-xl p-1 sm:p-4 shadow-sm hover:shadow-md transition min-w-[220px]"
                >
                  <h3 className="font-semibold text-[8px] sm:text-base">{proj.title}</h3>
                  <p className="text-gray-700 text-[6px] sm:text-sm">
                    {proj.description}
                  </p>
                  <p className="text-[6px] sm:text-sm text-gray-500 sm:mt-1">
                    Tech: {proj.tech}
                  </p>
                  <a
                    className="text-indigo-600 underline text-[7px] sm:text-sm break-words"
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {proj.link}
                  </a>
                </article>
              )
            )}
          </div>
        </section>

        {/* Skills */}
        <section className="col-span-2">
          <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-4 text-indigo-700">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {(user.skills?.length ? user.skills : def.skills).map((s) => (
              <span
                key={s.id}
                className="px-1 sm:px-3 sm:py-1 rounded-full bg-indigo-100 text-indigo-700 text-[7px] sm:text-sm"
              >
                {s.skill} ({s.level})
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="col-span-2">
          <h2 className="text-[10px] sm:text-lg md:text-xl  font-semibold mb-1 sm:mb-4 text-indigo-700">
            Contact
          </h2>
          {(user.contacts?.length ? user.contacts : def.contacts).map(
            (contact) => (
              <div
                key={contact.id}
                className="grid gap-1 sm:gap-3 grid-cols-3 text-[7px] sm:text-base"
              >
                <p className="flex items-center gap-1 sm:gap-2">
                  <FaEnvelope /> {contact.email}
                </p>
                <p className="flex items-center gap-1 sm:gap-2">
                  <FaPhoneAlt /> {contact.phone}
                </p>
                <p className="flex items-center gap-1 sm:gap-2">
                  <FaMapMarkerAlt /> {contact.address}
                </p>
              </div>
            )
          )}
        </section>
      </main>
    </div>
  );
};

export default Template4;
