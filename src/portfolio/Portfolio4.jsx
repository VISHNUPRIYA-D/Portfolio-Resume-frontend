import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Portfolio4 = ({ user, def }) => {
  if (!user) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center text-center py-3 sm:py-6 md:py-12 lg:py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={user?.image ? `data:image/jpeg;base64,${user.image}` : def.image}
          alt="Profile"
          className="w-20 h-20 sm:w-40 sm:h-40 lg:w-52 lg:h-52 mx-auto rounded-full border-4 border-gray-400 shadow-lg object-cover"
        />
        <h1 className="text-[13px] sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 sm:mt-4 capitalize">
          {user.name || def.name}
        </h1>
        <p className="text-[10px] sm:text-lg md:text-xl lg:text-2xl text-purple-600 sm:mt-2">
          {user.title || def.title}
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="px-2 sm:px-4 md:px-10 lg:px-20 py-3 sm:py-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white p-3 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-[10px] sm:text-2xl lg:text-3xl font-semibold text-purple-600 mb-1  sm:mb-4">
            About Me
          </h2>
          <p className="text-gray-700 text-[7px] sm:text-base leading-relaxed">
            {user.about || def.about}
          </p>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="px-2 sm:px-10 lg:px-20 py-3 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[10px] sm:text-2xl lg:text-3xl font-semibold text-purple-600  mb-1  sm:mb-4">
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
          {(user?.educations?.length ? user.educations : def.educations).map(
            (edu, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-black"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 + i * 0.1 }}
              >
                <h3 className="font-bold text-[9px] sm:text-lg">{edu.collegeName}</h3>
                <p className="text-purple-600 text-[8px] sm:text-base">{edu.field}</p>
                <p className="text-[8px] sm:text-sm text-gray-500">
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {new Date(edu.endDate).getFullYear()}
                </p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="px-2 sm:px-10 lg:px-20 py-3 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[10px] sm:text-2xl lg:text-3xl font-semibold text-purple-600 mb-1  sm:mb-4">
          Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
          {(user?.experiences?.length ? user.experiences : def.experiences).map(
            (exp, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 + i * 0.1 }}
              >
                <h3 className="font-bold capitalize text-[9px] sm:text-lg">{exp.role}</h3>
                <p className="text-purple-600 text-[8px] capitalize sm:text-base">{exp.companyName}</p>
                <p className="text-[8px] sm:text-sm capitalize text-gray-500">
                  {new Date(exp.startDate).getFullYear()} -{" "}
                  {new Date(exp.endDate).getFullYear()}
                </p>
                <p className="text-gray-600 text-[7px] sm:text-sm mt-1 sm:mt-2">{exp.description}</p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="px-2 sm:px-10 lg:px-20 py-3 sm:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[10px] sm:text-2xl lg:text-3xl font-semibold text-purple-600  mb-1 sm:mb-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
          {(user?.projects?.length? user.projects : def.projects).map((proj, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
            >
              <h3 className="font-bold text-[9px] sm:text-lg capitalize">{proj.title}</h3>
              <p className="text-gray-600 text-[7px] sm:text-base">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="px-4 sm:px-10 lg:px-20 py-3 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[10px] sm:text-2xl lg:text-3xl font-semibold text-purple-600 mb-1  sm:mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {(user?.skills?.length? user.skills : def.skills).map((s, i) => (
            <motion.span
              key={i}
              className="bg-blue-100 text-blue-800 px-2  sm:px-4 sm:py-2 rounded-full text-[8px] sm:text-sm md:text-base shadow-sm"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 + i * 0.1 }}
            >
              {s.skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="px-4 sm:px-10 lg:px-20 py-3 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white p-3 sm:p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-[10px] sm:text-2xl lg:text-3xl font-semibold text-purple-600  mb-1  sm:mb-4">
            Contact Me
          </h2>
          {(user?.contacts?.length ? user.contacts : def.contacts).map(
            (cont, i) => (
              <div key={i} className="text-[8px] sm:text-base space-y-1 sm:space-y-2">
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <FaEnvelope /> {cont.email}
                </p>
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <FaPhoneAlt /> {cont.phone}
                </p>
                <p className="flex items-center justify-center gap-2 text-gray-700">
                  <FaMapMarkerAlt /> {cont.address}
                </p>
              </div>
            )
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio4;
