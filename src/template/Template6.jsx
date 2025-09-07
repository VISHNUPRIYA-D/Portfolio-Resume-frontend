import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


const Template6 = ({ user,def }) => {
  if (!user) return null;


  return (
    <div className="sm:min-h-screen flex">
      {/* Sidebar */}
      <aside className=" w-24 sm:w-48 md:w-1/3 bg-emerald-600 text-white p-3 sm:p-5 md:p-10 flex flex-col items-center">
        
 {user.image ?
            <img
            src={`data:image/jpeg;base64,${user.image}`}
            alt="Profile"
            className="w-16 h-16 sm:w-28 sm:h-28 rounded-full border-4 border-white object-cover"
          /> : <img
            src={`${def.image}`}
            alt="Profile"
            className="w-16 h-16 sm:w-28 sm:h-28 rounded-full border-4 border-white object-cover"
          />
          }
        <h1 className="text-[14px] sm:text-2xl capitalize font-bold mt-3 sm:mt-4">{user.name? user.name : def.name }
</h1>
        <p className="text-emerald-100 text-[10px] sm:text-[lg]">{user.title? user.title : def.title }
</p>
<div>
 <h1 className="mt-4 sm:mt-8 md:mt-12 text-[13px] sm:text-xl font-semibold  ">Contact</h1>
 <hr className=" bg-white "/>
        {(user.contacts?.length? user.contacts : def.contacts).map((contact)=>(
          <div className=" text-[7px] text-left sm:text-sm space-y-2 mt-2 sm:mt-4" key={contact.id}>
            <p className="flex gap-1"><FaEnvelope className="mt-[2px] sm:mt-2"/>{contact.email}</p>
            <p className="flex gap-1"><FaPhoneAlt />{contact.phone}</p>
            <p className="flex gap-1"><FaMapMarkerAlt />{contact.address}</p>
          </div>
        ))}
</div>
<div>
  <section className="mt-4 sm:mt-8">
          <h2 className="text-[13px] sm:text-xl font-semibold">Skills</h2>
 <hr className=" bg-white "/>

          <div className="flex flex-col gap-2 mt-2 text-[7px] sm:text-sm w-20 md:w-44 sm:w-32">
            {(user.skills?.length? user.skills : def.skills)   
.map((s) => (
              <span key={s.id} className="px-1 sm:px-3 sm:py-1 bg-emerald-100 text-emerald-700 rounded-full">
                {s.skill} ({s.level})
              </span>
            ))}
          </div>
        </section>

</div>
         
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-50 p-4 py-5 sm:p-6 md:p-10 text-black">
        {/* About */}
        <section>
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">About Me</h2>
 <hr className=" bg-black "/>

          <p className="text-gray-700 mt-2 text-[7px] sm:text-sm md:text-base">{user.about? user.about : def.about }
</p>
        </section>
            {/* Education */}
        <section className=" mt-3 sm:mt-5 md:mt-7">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
            Education
          </h2>
 <hr className=" bg-black "/>

          {(user.educations?.length ? user.educations : def.educations).map((edu) => (
            <div key={edu.id} className="bg-white  p-1 sm:p-4 mb-2 sm:mb-3">
              <h3 className="font-semibold text-[8px] sm:text-base">{edu.collegeName}</h3>
              <p className="text-gray-600 text-[7px] sm:text-sm">{edu.field}</p>
              <p className="text-gray-500 text-[7px] sm:text-sm">
                {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </section>

        {/* Experience */}
         <section className="mt-3 sm:mt-5 md:mt-7">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
            Experience
          </h2>
 <hr className=" bg-black "/>

          {(user.experiences?.length ? user.experiences : def.experiences).map((exp) => (
            <div key={exp.id} className="bg-white  p-1 sm:p-4 mb-2 sm:mb-3">
              <h3 className="font-semibold text-[8px] sm:text-base">{exp.companyName}</h3>
              <p className="text-gray-600 text-[7px] sm:text-sm">{exp.role}</p>
              <p className="text-gray-500 text-[7px] sm:text-sm">{exp.description}</p>
              <p className="text-gray-500 text-[7px] sm:text-sm">
                {new Date(exp.startDate).getFullYear()} - {new Date(exp.endDate).getFullYear()}
              </p>
            </div>
          ))}
        </section>
        
        {/* Projects */}
        <section className="mt-3 sm:mt-5 md:mt-7">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-2">Projects</h2>
          <hr  className="bg-black"/>
          <div className="grid md:grid-cols-2 md:gap-4 mt-1 sm:mt-2">
            {(user.projects?.length ? user.projects : def.projects) 
.map((p) => (
              <div key={p.id} className="bg-white p-2 sm:p-4 ">
                <h3 className="font-semibold text-[9px] sm:text-sm">{p.title}</h3>
                <p className=" text-gray-600 text-[7px] sm:text-sm">{p.description}</p>
                <p className="text-[6px] sm:text-xs text-gray-500 mt-1">Tech: {p.tech}</p>
                <a className="text-emerald-700 text-[7px] sm:text-sm underline" target="_blank" rel="noreferrer" href={p.link}>
                  {p.link}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Socialmedia */}
         <section className="mt-3 sm:mt-5 md:mt-7">
          <h2 className="text-[10px] sm:text-lg md:text-xl font-semibold mb-2">Social media</h2>
          <hr  className="bg-black"/>

          <div className="grid md:grid-cols-2 md:gap-4 mt-1 sm:mt-2">
            {(user.socialMedia?.length ? user.socialMedia : def.socialMedia) 
.map((sm) => (
              <div key={sm.id} className="bg-white p-2 sm:p-4 flex gap-3 ">
                <h3 className="font-semibold text-[8px] capitalize sm:text-sm">{sm.platform}</h3>
                <a className="text-emerald-700 text-[7px] sm:text-sm underline" target="_blank" rel="noreferrer" href={sm.link}>
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

export default Template6;
