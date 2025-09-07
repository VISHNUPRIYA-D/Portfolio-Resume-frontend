import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Template13 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="sm:min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-28 sm:w-48 md:w-1/3 bg-indigo-700 text-white p-4 sm:p-6 md:p-10 flex flex-col items-center">
        {/* Profile Image */}
        {user.image ? (
          <img
            src={`data:image/jpeg;base64,${user.image}`}
            alt="Profile"
            className="w-16 h-16 sm:w-28 sm:h-28 rounded-full border-4 border-white object-cover"
          />
        ) : (
          <img
            src={`${def.image}`}
            alt="Profile"
            className="w-16 h-16 sm:w-28 sm:h-28 rounded-full border-4 border-white object-cover"
          />
        )}

        {/* Name + Title */}
        <h1 className="text-[14px] sm:text-2xl font-bold mt-3 sm:mt-4 capitalize">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-indigo-200 text-[10px] sm:text-base">
          {user.title ? user.title : def.title}
        </p>

        {/* Contact Section */}
        <div className="mt-3 sm:mt-8 w-full">
          <h2 className="text-[13px] sm:text-lg font-semibold">Contact</h2>
          <hr className="bg-white" />
          {(user.contacts?.length ? user.contacts : def.contacts).map(
            (contact) => (
              <div
                className="text-[7px] sm:text-sm mt-1 space-y-1"
                key={contact.id}
              >
                <p className="flex gap-1">
                  <FaEnvelope /> {contact.email}
                </p>
                <p className="flex gap-1">
                  <FaPhoneAlt className="mt-[1px]" /> {contact.phone}
                </p>
                <p className="flex gap-1">
                  <FaMapMarkerAlt className="mt-[1px]" /> {contact.address}
                </p>
              </div>
            )
          )}
        </div>

        {/* Skills */}
        <div className="mt-3 sm:mt-10 w-full">
          <h2 className="text-[13px] sm:text-lg font-semibold">Skills</h2>
          <hr className="bg-white" />
          <div className="flex flex-col gap-2 mt-1 text-[7px] sm:text-sm w-20 md:w-44 sm:w-32">
            {(user.skills?.length ? user.skills : def.skills).map((s) => (
              <span
                key={s.id}
                className="px-1 sm:px-3 sm:py-1 bg-emerald-100 text-indigo-800 rounded-full"
              >
                {s.skill} ({s.level})
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 text-black px-2 py-3 sm:p-6 md:p-10">
        {/* About */}
        <section>
          <h2 className="text-[10px] sm:text-xl font-semibold">About Me</h2>
          <hr className="bg-black" />
          <p className="text-gray-700 mt-1 text-[8px] sm:text-sm">
            {user.about ? user.about : def.about}
          </p>
        </section>

        {/* Education */}
        <section className="mt-3 sm:mt-5">
          <h2 className="text-[10px] sm:text-xl font-semibold">Education</h2>
          <hr className="bg-black" />
          {(user.educations?.length ? user.educations : def.educations).map(
            (edu) => (
              <div
                key={edu.id}
                className="bg-white p-2 sm:p-4 mt-1 rounded shadow"
              >
                <h3 className="font-semibold text-[9px] sm:text-base">
                  {edu.collegeName}
                </h3>
                <p className="text-gray-600 text-[8px] sm:text-sm">
                  {edu.field}
                </p>
                <p className="text-gray-500 text-[8px] sm:text-sm">
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {new Date(edu.endDate).getFullYear()}
                </p>
              </div>
            )
          )}
        </section>

        {/* Experience */}
        <section className="mt-3 sm:mt-5">
          <h2 className="text-[10px] sm:text-xl font-semibold">Experience</h2>
          <hr className="bg-black" />
          {(user.experiences?.length ? user.experiences : def.experiences).map(
            (exp) => (
              <div
                key={exp.id}
                className="bg-white p-2 sm:p-4 mt-1 rounded shadow"
              >
                <h3 className="font-semibold text-[9px] sm:text-base">
                  {exp.companyName}
                </h3>
                <p className="text-gray-600 text-[8px] sm:text-sm">
                  {exp.role}
                </p>
                <p className="text-gray-500 text-[8px] sm:text-sm">
                  {exp.description}
                </p>
                <p className="text-gray-500 text-[8px] sm:text-sm">
                  {new Date(exp.startDate).getFullYear()} -{" "}
                  {new Date(exp.endDate).getFullYear()}
                </p>
              </div>
            )
          )}
        </section>

        {/* Projects */}
        <section className="mt-3 sm:mt-5">
          <h2 className="text-[10px] sm:text-xl font-semibold">Projects</h2>
          <hr className="bg-black" />
          <div className="mt-2 space-y-2">
            {(user.projects?.length ? user.projects : def.projects).map((p) => (
              <div
                key={p.id}
                className="bg-white p-2 sm:p-4 rounded shadow"
              >
                <h3 className="font-semibold text-[9px] sm:text-base">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-[8px] sm:text-sm">
                  {p.description}
                </p>
                <p className="text-[7px] sm:text-xs text-gray-500 mt-1">
                  Tech: {p.tech}
                </p>
                <a
                  className="text-indigo-700 text-[8px] sm:text-sm underline"
                  target="_blank"
                  rel="noreferrer"
                  href={p.link}
                >
                  {p.link}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="mt-3 sm:mt-5">
          <h2 className="text-[10px] sm:text-xl font-semibold">Social Media</h2>
          <hr className="bg-black" />
          <div className="mt-1 space-y-2">
            {(user.socialMedia?.length
              ? user.socialMedia
              : def.socialMedia
            ).map((sm) => (
              <div
                key={sm.id}
                className="bg-white p-2 sm:p-4 flex gap-2 items-center rounded shadow"
              >
                <h3 className="font-semibold text-[9px] sm:text-base capitalize">
                  {sm.platform}
                </h3>
                <a
                  className="text-indigo-700 text-[8px] sm:text-sm underline"
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
      </main>
    </div>
  );
};

export default Template13;
