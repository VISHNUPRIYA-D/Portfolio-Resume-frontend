import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const SaveForm = () => {
  const { form, setForm, formData,handleChange, handleSave, handleDelete } =
    useContext(PortfolioContext);

  if (!form.open) return null;



  // 👉 function to render fields dynamically based on section
  const renderFields = () => {
    switch (form.section) {
      case "image":
        return (
          <>
            <div>
              <label>Image : </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleChange("image", e.target.files[0])}
                
              />
            </div>
            
          </>
        );
      case "name":
        return (
          <>
            <div>
              <label>Name : </label>
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter Name"
              />
            </div>
            
          </>
        );
         case "title":
        return (
          <>
            <div>
              <label>Title : </label>
              <input
                type="text"
                value={formData.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter Title"
              />
            </div>
            
          </>
        );

         case "about":
        return (
          <>
            <div>
              <label>Name : </label>
              <input
                type="text"
                value={formData.about || ""}
                onChange={(e) => handleChange("about", e.target.value)}
                placeholder="About me.."
              />
            </div>
            
          </>
        );

      case "contacts":
        return (
          <>
            <div>
              <label>Email : </label>
              <input
                type="email"
                value={formData.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label>Phone : </label>
              <input
                type="text"
                value={formData.phone || ""}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Enter Phone Number"
              />
            </div>
            <div>
              <label>Address : </label>
              <input
                type="text"
                value={formData.address || ""}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Enter Address"
              />
            </div>
          </>
        );

      case "educations":
        return (
          <>
            <div>
              <label>School Name : </label>
              <input
                type="text"
                value={formData.schoolName || ""}
                onChange={(e) => handleChange("schoolName", e.target.value)}
                placeholder="Enter School Name"
              />
            </div>
            <div>
              <label>College Name : </label>
              <input
                type="text"
                value={formData.collegeName || ""}
                onChange={(e) => handleChange("collegeName", e.target.value)}
                placeholder="Enter College Name"
              />
            </div>
            <div>
              <label>Field : </label>
              <input
                type="text"
                value={formData.field || ""}
                onChange={(e) => handleChange("field", e.target.value)}
                placeholder="Enter Field"
              />
            </div>
            <div>
              <label>Start Date : </label>
              <input
                type="date"
                value={formData.startDate || ""}
                onChange={(e) => handleChange("startDate", e.target.value)}
              />
            </div>
            <div>
              <label>End Date : </label>
              <input
                type="date"
                value={formData.endDate || ""}
                onChange={(e) => handleChange("endDate", e.target.value)}
              />
            </div>
          </>
        );

      case "experiences":
        return (
          <div>
            <div>
              <label>Company name : </label>
              <input type="text" placeholder="Enter company.." value={formData.companyName}
              onChange={(e)=>handleChange("companyName",e.target.value)}/>
            </div>
            <div>
              <label>Role : </label>
              <input type="text" placeholder="Enter Role" 
              value={formData.role}
              onChange={(e)=>handleChange("role",e.target.value)}/>
            </div>
            <div>
              <label>Description : </label>
              <input type="text " placeholder="Enter description" 
              value={formData.description}
              onChange={(e)=>handleChange('description',e.target.value)}/>
            </div>
            <div>
              <label>Start Date : </label>
              <input
                type="date"
                value={formData.startDate || ""}
                onChange={(e) => handleChange("startDate", e.target.value)}
              />
            </div>
            <div>
              <label>End Date : </label>
              <input
                type="date"
                value={formData.endDate || ""}
                onChange={(e) => handleChange("endDate", e.target.value)}
              />
            </div>
          </div>
        );
        break;

        case "projects":
            return(
                <div>
                    <div>
                        <label>Description : </label>
                        <input type="text" placeholder="Enter Description"
                        value={formData.description}
              onChange={(e)=>handleChange('description',e.target.value)}/>
                    </div>
                    <div>
                        <label>Title : </label>
                        <input type="text" placeholder="Enter Title" 
                        value={formData.title}
                        onChange={(e)=>handleChange("title",e.target.value)}/>
                    </div>
                    <div>
                        <label>Tech : </label>
                        <input type="text" placeholder="technology"
                        value={formData.tech}
                        onChange={(e)=>handleChange("tech",e.target.value)}/>
                    </div>
                    <div>
                        <label>Link : </label>
                        <input type="text" placeholder="Enter Your Project Link"
                        value={formData.link}
                        onChange={(e)=>handleChange('link',e.target.value)}/>
                    </div>
                </div>
            );

            break;

        case "skills":
            return (
                <div>
                    <div>
                        <label>Skill : </label>
                        <input type="text" placeholder="Enter your Skill"
                        value={formData.skill}
                        onChange={(e)=>handleChange("skill",e.target.value)}/>
                    </div>
                    <div>
                        <label>Level : </label>
                        <input type="text" placeholder="Your Level...
                        " value={formData.level}
                        onChange={(e)=>handleChange("level",e.target.value)}/>
                    </div>
                </div>
             );
             break;

        case "socialmedia":
            return(
                <div>
                   <div>
                        <label>Enter Platform : </label>
                        <input type="text" placeholder="Enter Platform" value={formData.platform || ""}
                        onChange={(e)=>handleChange("platform",e.target.value)}/>
                    </div>
                    <div>
                        <label>Link : </label>
                        <input type="text" placeholder="Enter URL" value={formData.url || ""} onChange={(e)=>handleChange("url",e.target.value)}/>
                    </div>
                </div>
            );break;
        
        default:
        return (
          <div>
            <label>Value</label>
            <input
              type="text"
              value={formData.value || ""}
              onChange={(e) => handleChange("value", e.target.value)}
              placeholder="Enter Value"
            />
          </div>
        );


    }
  };

  return (
    <div className="fixed inset-0 mt-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-72 p-4 sm:w-96 sm:p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4 capitalize">
          {form.mode!=="delete" ?form.item ? "Edit" : "Add" : " Sure! you want to delete "} {form.section}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            {form.mode !== "delete" ? handleSave() : handleDelete()}
            setForm({ open: false, section: null, item: null });
          }}
        >
          {renderFields()}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() =>
                setForm({ open: false, section: null, item: null })
              }
              className="px-4 py-2 rounded bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
             {form.mode !=="delete" ?form.item ? "Update" : "Save" :"Delete"}
            </button>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default SaveForm;
