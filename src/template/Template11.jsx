import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Template11 = ({ user,def }) => {
  if (!user) return null;


  return (
    <div className="sm:min-h-screen bg-blue-100 font-sans py-3 sm:py-12 px-2 sm:px-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500  text-center p-2 sm:p-8">
           {user.image ?
            <img
            src={`data:image/jpeg;base64,${user.image}`}
            alt="Profile"
            className="w-12 h-12 sm:w-28 sm:h-28  rounded-full mx-auto border-4 border-white shadow-lg"
          /> : <img
            src={`${def.image}`}
            alt="Profile"
            className="w-12 h-12 sm:w-28 sm:h-28 rounded-full mx-auto border-4 border-white shadow-lg"
          />
          }

          <h1 className="text-[13px] sm:text-2xl md:text-4xl capitalize font-bold mt-1 sm:mt-3">{user.name? user.name : def.name }
</h1>
          <p className="text-[9px] sm:text-lg md:text-xl">{user.title? user.title : def.title }
</p>
        </div>

        {/* About */}
        <div className=" p-3 sm:p-6 text-center">
          <p className="text-gray-700 text-[7px]  sm:text-lg">{user.about? user.about : def.about }
</p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 p-3 sm:p-6">
          <div>
            <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold text-blue-600 mb-1 sm:mb-3">Education</h2>
            {(user.educations?.length ? user.educations : def.educations).map((edu) => (
              <div key={edu.id} className="bg-blue-50 p-2  sm:p-4 rounded-lg mb-1 sm:mb-3 shadow text-black">
                <h3 className="font-semibold text-[8px] sm:text-sm md:text-lg">{edu.collegeName}</h3>
                <p className="text-[8px] sm:text-sm md:text-lg">{edu.field}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold text-purple-600 mb-1 sm:mb-3">Experience</h2>
            {(user.experiences?.length ? user.experiences : def.experiences)   
.map((exp) => (
              <div key={exp.id} className="bg-purple-50 p-2 sm:p-4 rounded-lg mb-1 sm:mb-3 shadow text-black">
                <h3 className="font-semibold capitalize text-[8px] sm:text-sm md:text-lg ">{exp.companyName}</h3>
                <p className="text-[8px] sm:text-sm md:text-lg capitalize">{exp.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="p-3 sm:p-6">
          <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold text-pink-600 mb-1 sm:mb-3">Projects</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {(user.projects?.length ? user.projects : def.projects) 
.map((proj) => (
              <div key={proj.id} className="bg-pink-50 p-2 sm:p-4 rounded-lg shadow text-black">
                <h3 className="font-semibold capitalize text-[8px] sm:text-sm md:text-lg">{proj.title}</h3>
                <p className="text-[7px]  sm:text-lg">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="p-3 sm:p-6 text-center">
          <h2 className="text-[9px] sm:text-xl md:text-2xl font-bold text-green-600 mb-1 sm:mb-3">Skills</h2>
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {(user.skills?.length? user.skills : def.skills)   
.map((s) => (
              <span key={s.id} className="px-1 sm:px-3 sm:py-1 bg-green-200 rounded-full text-[7px] sm:text-sm text-black">
                {s.skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        {(user.contacts?.length? user.contacts : def.contacts).map((contact)=>(
          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-3 sm:p-6 text-center" key={contact.id}>
            <p className="flex justify-center text-[8px] sm:text-sm md:text-base gap-1 sm:gap-2"><FaEnvelope className="mt-[2px]"/> {contact.email}</p>
            <p className="flex justify-center text-[8px] sm:text-sm md:text-base gap-1 sm:gap-2"><FaPhoneAlt /> {contact.phone}</p>
            <p className="flex justify-center text-[8px] sm:text-sm md:text-base gap-1 sm:gap-2"><FaMapMarkerAlt /> {contact.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template11;
