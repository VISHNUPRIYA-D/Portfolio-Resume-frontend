import React from "react";

const Template7 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-rose-50 via-white to-sky-50 sm:min-h-screen px-2 sm:px-6 md:px-10 py-3 sm:py-6 md:py-10">
      {/* Header */}
      <header className="flex flex-col items-center text-center mb-2 sm:mb-6 md:mb-10">
        <img
          src={user.image ? `data:image/jpeg;base64,${user.image}` : def.image}
          alt="Profile"
          className="w-14 md:w-32 md:h-32 sm:w-24 h-14 sm:h-24 rounded-full shadow-lg border-2 border-rose-300 object-cover"
        />
        <h1 className="text-[13px] md:text-3xl sm:text-xl font-bold mt-2 sm:mt-4 capitalize">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-[9px] sm:text-sm md:text-lg text-rose-600">
          {user.title ? user.title : def.title}
        </p>
        <p className="text-[7px] sm:text-base text-gray-700 leading-snug sm:leading-relaxed max-w-2xl mt-2">
          {user.about ? user.about : def.about}
        </p>
      </header>

      {/* Projects */}
      <section className="max-w-5xl mx-auto sm:mt-4 md:mt-10">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-4 text-rose-700 text-center">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
          {(user.projects?.length ? user.projects : def.projects).map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-lg shadow p-1 sm:p-4 flex-1 min-w-[220px] max-w-[300px]"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">{proj.title}</h3>
              <p className="text-gray-600 text-[6px] sm:text-sm">{proj.description}</p>
              <p className="text-gray-500 text-[6px] sm:text-sm sm:mb-1">
                Tech: {proj.tech}
              </p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 underline text-[7px] sm:text-sm"
              >
                {proj.link}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Experience */}
      <div className="flex flex-2 justify-center gap-1 sm:gap-8 max-w-5xl mx-auto mt-2 sm:mt-6 md:mt-10">
        <section className="flex-1 min-w-[100px] sm:min-w-[220px]">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-rose-700 text-center">
            Education
          </h2>
          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-lg shadow p-1 sm:p-4 mb-2 sm:mb-3"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">
                {edu.collegeName}
              </h3>
              <p className="text-gray-600 text-[7px] sm:text-sm">{edu.field}</p>
              <p className="text-gray-500 text-[7px] sm:text-sm">
                {new Date(edu.startDate).getFullYear()} -{" "}
                {new Date(edu.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </section>

        <section className="flex-1 min-w-[100px] sm:min-w-[220px]">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-rose-700 text-center">
            Experience
          </h2>
          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-lg shadow p-1 sm:p-4 mb-2 sm:mb-3"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">
                {exp.role} @ {exp.companyName}
              </h3>
              <p className="text-gray-500 text-[7px] sm:text-sm">
                {new Date(exp.startDate).getFullYear()} -{" "}
                {new Date(exp.endDate).getFullYear()}
              </p>
              <p className="text-gray-600 text-[7px] sm:text-sm">{exp.description}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Skills */}
      <section className="max-w-3xl mx-auto mt-2 sm:mt-6 md:mt-10 text-center">
        <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-4 text-rose-700">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-3">
          {(user.skills?.length ? user.skills : def.skills).map((s) => (
            <span
              key={s.id}
              className="px-1 md:px-4 sm:px-2 sm:py-1 md:py-2 bg-rose-100 text-rose-700 rounded-full text-[7px] sm:text-sm"
            >
              {s.skill} ({s.level})
            </span>
          ))}
        </div>
      </section>

       <section className="mt-3 sm:mt-5 md:mt-7">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold  text-rose-700">Social media</h2>
          <div className="grid md:grid-cols-2 md:gap-4 mt-1 sm:mt-2">
            {(user.socialMedia?.length ? user.socialMedia : def.socialMedia) 
.map((sm) => (
              <div key={sm.id} className="bg-white p-2 sm:p-4 flex gap-3 ">
                <h3 className="font-semibold text-[8px] capitalize sm:text-sm text-black">{sm.platform}</h3>
                <a className="text-emerald-700 text-[7px] sm:text-sm underline" target="_blank" rel="noreferrer" href={sm.link}>
                  {sm.url}
                </a>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
};

export default Template7;
