import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import Section from "../components/Section";
import SaveForm from "../components/SaveForm";
import { BiEdit } from "react-icons/bi";

const Dashboard = () => {
  const {
    finalUser,
    def,
    userData,
    form,
    formData,
    handleChange,
    handleProfileSave,
    setForm,
  } = useContext(PortfolioContext);

  if (!userData) {
    return (
      <div className="p-8 text-center  sm:ml-44">
        <p className=" mt-12">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 space-y-8 sm:ml-44 ">
      {/* Username / Profile Section */}
      <h1 className="mt-10  font-semibold text-lg sm:text-2xl">Your Account</h1>
      <div className="relative w-32 h-32 sm:w-64 sm:h-64 mx-auto opacity-100">
  {finalUser.image ? (
    <img
      src={`data:image/jpeg;base64,${finalUser.image}`}
      alt="Profile"
      className="w-full h-full rounded-full object-cover"
    />
  ) : (
    <img
      src={`${def.image}`}
      alt="Profile"
      className="w-full h-full rounded-full object-cover"
    />
  )}

  {/* Edit button attached to image */}
  <button
    onClick={() =>
      setForm({ open: true, section: "image", item: null })
    }
    className="absolute bottom-0 right-0 translate-x-[-15px] translate-y-[-1px] bg-white p-2 rounded-full shadow hover:bg-gray-100"
  >
    <BiEdit className="text-blue-500 text-xl sm:text-2xl" />
  </button>
</div>
      <div className="bg-white dark:bg-gray-800 dark:text-white shadow rounded-xl p-3 sm:p-6 space-y-2 text-xs sm:text-sm">
        <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">
          Profile
        </h2>
        <p className="">
          <b>Username : </b> {finalUser.username}
        </p>

        <div className="space-y-3">
         <div className="w-full flex justify-between">
           <p>
            <b>Name : </b>
             {(finalUser.name) ? (finalUser.name) :<span className="text-gray-500">Add your name</span>} 
          </p>
          <button
            className="px-3 sm:px-4 py-1 w-14 h-6 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() =>
              setForm({ open: true, section: "name".toLowerCase(), item: null })
            }
          >
           {formData.name ? "Edit":"Add"}
          </button>
         </div>
         <div className="w-full flex justify-between text-xs sm:text-sm">
           <p>
            <b>Title : </b>
            {(finalUser.title) ? (finalUser.title) : <span className="text-gray-500">Add your title (role)</span>} 
          </p>
          <button
            className="px-3 sm:px-4  w-14 h-6 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() =>
              setForm({
                open: true,
                section: "title".toLowerCase(),
                item: null,
              })
            }
          >
          {formData.title ? "Edit":"Add"}
          </button>
         </div>
          <div className="w-full text-xs sm:text-sm flex justify-between">
          <p>
            <b>About : </b>
             {(finalUser.about) ? (finalUser.about) : <span className="text-gray-500">describe about yourself</span>} 
          </p>
          <button
            className="px-3 sm:px-4 py-1 w-14 h-6 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() =>
              setForm({
                open: true,
                section: "about".toLowerCase(),
                item: null,
              })
            }
          >
           {formData.about ? "Edit":"Add"}
          </button>
          </div>
         
        </div>
      </div>

      {/* Contact Section */}
      <Section
        title="Contacts"
        items={finalUser.contacts}
        renderItem={(contact) => (
          <div className="space-y-2">
            <p>
              <b>Email :</b> {contact.email}{" "}
            </p>
            <p>
              <b>Phone number :</b> {contact.phone}
            </p>
            <p>
              <b>Address :</b> {contact.address}
            </p>
          </div>
        )}
      />

      {/* Education Section */}
      <Section
        title="Educations"
        items={finalUser.educations}
        renderItem={(edu) => (
          <div className="space-y-2">
            <p>
              <b>College name : </b> {edu.collegeName}
            </p>
            <p>
              <b>Field :</b> {edu.field}
            </p>
            <p>
              <b>School name : </b>
              {edu.schoolName}
            </p>
            <p>
              <b>Date : </b>
              {new Date(edu.startDate).getFullYear()} -{" "}
              {new Date(edu.endDate).getFullYear()}
            </p>
          </div>
        )}
      />

      {/* Experience Section */}
      <Section
        title="Experiences"
        items={finalUser.experiences}
        renderItem={(exp) => (
          <div className="space-y-2">
            <p>
              <b>Company name : </b>
              {exp.companyName}
            </p>
            <p>
              <b>Description : </b>
              {exp.description}
            </p>
            <p>
              <b>Role : </b>
              {exp.role}
            </p>
            <p>
              <b>Date : </b>
              {new Date(exp.startDate).getFullYear()} -{" "}
              {new Date(exp.endDate).getFullYear()}
            </p>
          </div>
        )}
      />

      {/* Projects Section */}
      <Section
        title="Projects"
        items={finalUser.projects}
        renderItem={(proj) => (
          <div className="space-y-2">
            <p>
              <b>Title : </b>
              {proj.title}
            </p>
            <p>
              <b>Description : </b>
              {proj.description}
            </p>
            <p>
              <b>Tech : </b>
              {proj.tech}
            </p>
            <p>
              <b>Link : </b>
              <span className="text-blue-500 hover:cursor-pointer">
                {proj.link}
              </span>
            </p>
          </div>
        )}
      />

      {/* Skills Section */}
      {/* Skills Section */}
      <Section
        title="Skills"
        items={finalUser.skills}
        renderItem={(skillObj) => (
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-700 rounded">
              {skillObj.skill}
            </span>
            <span className="text-sm text-gray-500">({skillObj.level})</span>
          </div>
        )}
      />

      <Section
        title="Socialmedia"
        items={finalUser.socialMedia}
        renderItem={(socialObj) => (
          <div className="spcae-y-2">
            <p>
              {socialObj.platform} :{" "}
              <span className="text-blue-500 hover:cursor-pointer">
                {socialObj.url}
              </span>
            </p>
          </div>
        )}
      />

      {form && <SaveForm />}
    </div>
  );
};

export default Dashboard;
