import React from "react";
import { BsFillEnvelopeArrowDownFill } from "react-icons/bs";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaTools } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { TbGlobe, TbWorld } from "react-icons/tb";

const Template10 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-pink-500 via-red-400 to-yellow-400 text-white font-sans sm:min-h-screen px-3 sm:px-6 py-4 sm:py-10">
      {/* Profile */}
      <div className="text-center mb-4 sm:mb-10">
        <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-full border-2 sm:border-4 border-white shadow-lg overflow-hidden">
          <img
            src={user.image ? `data:image/jpeg;base64,${user.image}` : def.image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-[13px] sm:text-xl md:text-3xl font-bold mt-2 sm:mt-4">
          {user.name ? user.name : def.name}
        </h1>
        <p className="text-[9px] sm:text-sm md:text-lg">
          {user.title ? user.title : def.title}
        </p>
        <p className="max-w-2xl mx-auto text-[7px] sm:text-base mt-2 leading-snug sm:leading-relaxed">
          {user.about ? user.about : def.about}
        </p>
      </div>

      {/* Education & Experience */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-2 sm:gap-6">
        {/* Education */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-4 shadow border border-white/30">
          <h2 className="text-[10px] sm:text-lg font-semibold mb-2 flex gap-2"><FaGraduationCap className="text-black text-xs sm:text-xl mt-1" /> Education</h2>
          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div key={edu.id} className="mb-2">
              <h3 className="font-semibold text-[8px] sm:text-base">{edu.collegeName}</h3>
              <p className="text-[7px] sm:text-sm">{edu.field}</p>
              <p className="text-[6px] sm:text-xs">
                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-4 shadow border border-white/30">
          
            
              <h2 className="text-[10px] sm:text-lg font-semibold mb-2 flex gap-2"> 
              <FaBriefcase className="text-red-800 mt-1" />Experience</h2>
              
          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div key={exp.id} className="mb-2">
              <h3 className="font-semibold text-[8px] sm:text-base">{exp.companyName}</h3>
              <p className="text-[7px] sm:text-sm">{exp.role}</p>
              <p className="text-[6px] sm:text-xs">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto mt-4 sm:mt-10">
        <h2 className="text-[10px] sm:text-lg font-semibold mb-2 flex gap-2 "><FaProjectDiagram className="mt-1 sm:text-xl" /> Projects</h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-6">
          {(user.projects?.length ? user.projects : def.projects).map((proj) => (
            <div
              key={proj.id}
              className="bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-4 shadow border border-white/30"
            >
              <h3 className="font-semibold text-[8px] sm:text-base">{proj.title}</h3>
              <p className="text-[7px] sm:text-sm">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-yellow-200 underline text-[7px] sm:text-sm"
              >
                {proj.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="flex justify-between sm:px-3">
        <div className="max-w-3xl  mt-4 sm:mt-10 ">
        <h2 className="text-[10px] sm:text-lg font-semibold mb-2 flex gap-2"><FaTools className="mt-1" /> Skills</h2>
        <div className="flex flex-wrap  gap-1 sm:gap-3">
          {(user.skills?.length ? user.skills : def.skills).map((s) => (
            <span
              key={s.id}
              className="px-1 sm:px-3 py-0.5 sm:py-1 bg-yellow-500 rounded-full text-[7px] sm:text-sm"
            >
              {s.skill} ({s.level})
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className=" mt-4 sm:mt-10">
        <h2 className="text-[10px] sm:text-lg font-semibold mb-2 flex gap-2"><BsFillEnvelopeArrowDownFill className="mt-1 text-pink-600" /> Contact</h2>
        {(user.contacts?.length ? user.contacts : def.contacts).map((contact) => (
          <div key={contact.id} className="space-y-1 sm:space-y-2 text-left text-[8px] sm:text-sm">
            <p className="flex  gap-1 sm:gap-2"><FaEnvelope /> {contact.email}</p>
            <p className="flex items-center  gap-1 sm:gap-2"><FaPhoneAlt /> {contact.phone}</p>
            <p className="flex items-center  gap-1 sm:gap-2"><FaMapMarkerAlt /> {contact.address}</p>
          </div>
        ))}
      </div>

      </div>
      

      {/* Social Media */}
      <div className="mt-4 sm:mt-10">
        <h2 className="text-[10px] sm:text-lg font-semibold mb-2 flex gap-1"><GiWorld className="mt-[3px] sm:mt-1 text-blue-400"/>
 Social Media</h2>
        <div className="grid sm:grid-cols-2 gap-1 sm:gap-4 mt-1 sm:mt-2">
          {(user.socialMedia?.length ? user.socialMedia : def.socialMedia).map((sm) => (
            <div key={sm.id} className="flex gap-1 sm:gap-3">
               <p className="text-[8px] sm:text-sm capitalize">{sm.platform}</p>
              
              <a
                className="text-emerald-200 underline text-[7px] sm:text-sm"
                target="_blank"
                rel="noreferrer"
                href={sm.link}
              >
                {sm.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template10;
