import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Template5 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-white text-gray-900 font-serif max-w-5xl mx-auto p-3 py-5 sm:p-10">
      {/* Header */}
      <div className="flex items-center gap-1 sm:gap-6 border-b pb-1 sm:pb-2 md:pb-6">
        {user.image ? (
          <img
            src={`data:image/jpeg;base64,${user.image}`}
            alt="Profile"
            className="rounded-2xl shadow-lg w-14 h-14 sm:w-20 sm:h-20 md:w-40 md:h-40 object-cover"
          />
        ) : (
          <img
            src={`${def.image}`}
            alt="Profile"
            className="rounded-2xl shadow-lg w-14 h-14 sm:w-20 sm:h-20 md:w-40 md:h-40 object-cover"
          />
        )}
        <div className="flex-1">
          <h1 className="text-[13px] capitalize sm:text-xl md:text-4xl font-bold">
            {user.name ? user.name : def.name}
          </h1>
          <p className="text-blue-700 text-[9px] sm:text-sm md:text-lg">
            {user.title ? user.title : def.title}
          </p>
        </div>
        {(user.contacts?.length ? user.contacts : def.contacts).map(
          (contact) => (
            <div
              className="text-[8px] sm:text-sm text-gray-700 space-y-1"
              key={contact.id}
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
      </div>

      {/* About */}
      <section className="mt-2 sm:mt-3 md:mt-6">
        <h2 className="text-[9px] sm:text-lg md:text-xl font-bold border-b sm:pb-1">
          Profile
        </h2>
        <p className="text-[6px] sm:text-sm mt-2 sm:mt-3 leading-relaxed text-gray-800">
          {user.about ? user.about : def.about}
        </p>
      </section>

      {/* Experience */}
      <section className="mt-2 mb-2 sm:mt-8">
        <h2 className="text-[9px] sm:text-lg md:text-xl font-bold border-b pb-1">Experience</h2>
        <div className="divide-y">
          {(user.experiences?.length ? user.experiences : def.experiences).map(
            (exp) => (
              <div key={exp.id} className="sm:py-4 mt-1 text-[8px] sm:text-sm">
                <h3 className="font-semibold">
                  {exp.role} — {exp.companyName}
                </h3>
                <p className="text-[7px] sm:text-sm text-gray-600">
                  {new Date(exp.startDate).getFullYear()} –{" "}
                  {new Date(exp.endDate).getFullYear()}
                </p>
                <p className="text-gray-800 sm:mt-1 text-[6px] sm:text-sm">{exp.description}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Education */}
      <section className="mt-1 sm:mt-8">
        <h2 className="text-[9px] sm:text-lg md:text-xl font-bold border-b pb-1">Education</h2>
        <div className="divide-y">
          {(user.educations?.length ? user.educations : def.educations).map(
            (edu) => (
              <div key={edu.id} className="sm:py-4 py-1 text-[6px] sm:text-sm">
                <h3 className="font-semibold">{edu.collegeName}</h3>
                <p className="text-gray-700">{edu.field}</p>
                <p className=" text-gray-600">
                  {new Date(edu.startDate).getFullYear()} –{" "}
                  {new Date(edu.endDate).getFullYear()}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Projects & Skills */}
      <section className="mt-1 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-6">
        <div>
          <h2 className="text-[9px] sm:text-lg md:text-xl font-bold border-b pb-1">Projects</h2>
          <div className="divide-y">
            {(user.projects?.length ? user.projects : def.projects).map((p) => (
              <div key={p.id} className="sm:py-4 mt-1 text-[6px] sm:text-sm">
                <h3 className="font-semibold text-[7px] sm:text-sm">{p.title}</h3>
                <p className="text-gray-800">{p.description}</p>
                <p className=" text-gray-600">Tech: {p.tech}</p>
                <a
                  className="text-blue-700 underline "
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.link}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-[9px] sm:text-lg md:text-xl font-bold border-b pb-1">Skills</h2>
          <ul className="mt-1 sm:mt-4 flex flex-wrap gap-2">
            {(user.skills?.length ? user.skills : def.skills).map((s) => (
              <li
                key={s.id}
                className="px-1 sm:px-2 md:px-3 sm:py-1 bg-gray-100 rounded-full text-[6px] sm:text-sm"
              >
                {s.skill} ({s.level})
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Template5;
