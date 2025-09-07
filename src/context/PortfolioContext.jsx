import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Template1 from "../template/Template1";
import Template2 from "../template/Template2";
import Template3 from "../template/Template3";
import Template4 from "../template/Template4";
import Template5 from "../template/Template5";
import Template6 from "../template/Template6";
import Template7 from "../template/Template7";
import Template8 from "../template/Template8";
import Template9 from "../template/Template9";
import Template12 from "../template/Template12";
import Template10 from "../template/Template10";
import Template11 from "../template/Template11";
import Template13 from "../template/Template13";
import personPic from "../assets/personIcon.jpg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Portfolio1 from "../portfolio/Portfolio1";
import Portfolio2 from "../portfolio/Portfolio2";
import Portfolio3 from "../portfolio/Portfolio3";
import Portfolio4 from "../portfolio/Portfolio4";
import Portfolio5 from "../portfolio/Portfolio5";
import Portfolio6 from "../portfolio/Portfolio6";
import Portfolio7 from "../portfolio/Portfolio7";
import Portfolio8 from "../portfolio/Portfolio8";
import Portfolio9 from "../portfolio/Portfolio9";
import Portfolio10 from "../portfolio/Portfolio10";

export const PortfolioContext = createContext();

const PortfolioProvider = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [token, setToken] = useState(()=>localStorage.getItem("token") || null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [name, setName] = useState(localStorage.getItem("name") || null);
  const navigate = useNavigate();
  const [selectTemplate, setSelectedTemplate] = useState(
    localStorage.getItem("template") || null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [switchType, setSwitchType] = useState('portfolio');


  const [userData, setUserData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ open: false, section: null, item: null });
  const [openSection, setOpenSection] = useState({});
  const [saveDownload, setSaveDownload] = useState(()=>{ try {
    const stored = localStorage.getItem("downloads");
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Failed to parse downloads from localStorage:", err);
    return [];
  }});
   

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const defaultData = [
    {
      id: 0,
      name: "New User",
      title: "Your Title Here",
      about: "Tell us about yourself...",
      image: `${personPic}`,
      contacts: [
        {
          id: 0,
          email: "Not added",
          phone: "Not added",
          address: "Not added",
        },
      ],
      educations: [
        {
          id: 0,
          schoolName: "School not added",
          collegeName: "College not added",
          field: "Field not added",
          startDate: "not added",
          endDate: "not added",
        },
      ],
      experiences: [
        {
          id: 0,
          companyName: "Company not added",
          role: "Role not added",
          description: "Description not added",
          startDate: "00:00:0000",
          endDate: "00:00:0000",
        },
      ],
      projects: [
        {
          id: 0,
          description: "No projects added yet",
          title: "Add your project",
          tech: "Tech stack not added",
          link: "#",
        },
      ],
      skills: [
        {
          id: 0,
          skill: "No skills added",
          level: "Beginner",
        },
      ],
      socialMedia: [
        {
          id: 0,
          platform: "LinkedIn",
          url: "Not added",
        },
        {
          id: 1,
          platform: "GitHub",
          url: "Not added",
        },
        {
          id: 2,
          platform: "Twitter",
          url: "Not added",
        },
      ],
    },
  ];

  const portTemplate = [{ id: 1, name: "dark web view", component: Portfolio1,type:"portfolio" },
    {id:2,name:'light crayan color design web view',component:Portfolio2,type:'portfolio'},
    {id:3,name:'A left sidebar',component:Portfolio3,type:'portfolio'},
    {id:4,name:'white animation layout card',component:Portfolio4,type:'portfolio'},
    {id:5,name:'white animation card light design',component:Portfolio5,type:'portfolio'},
    {id:6,name:'white animation card light design',component:Portfolio6,type:'portfolio'},
    {id:7,name:"Dark theme with neon accents (modern techy look)",component:Portfolio7,type:'portfolio'},
    {id:8,name:"bright, pastel, card-styled, and animated",component:Portfolio8,type:'portfolio'},
    {id:9,name:"a split-sidebar, dark, animated design (desktop sidebar + mobile topbar)",component:Portfolio9,type:'portfolio'},
    {id:10,name:'futuristic glassmorphism portfolio (bright gradients, translucent cards, soft glow)',component:Portfolio10,type:'portfolio'}
  ]
  const templates = [
    
    { id: 1, name: "light white centered card based", component: Template1 ,type:"resume"},
    { id: 2, name: "Dark Gradient, Centered Layout", component: Template2,type:"resume" },
    { id: 3, name: "Light white modern gradient", component: Template3,type:"resume" },
    {
      id: 4,
      name: "Light Professional white Clean résumé, serif, print-friendly",
      component: Template4,type:"resume"
    },
    { id: 5, name: "Sidebar color professional split", component: Template5,type:"resume" },
    {
      id: 6,
      name: "Pastel card grid (projects-centric) professional light white",
      component: Template6,type:"resume",
    },
    { id: 7, name: "dark centered layout professional ", component: Template7,type:"resume" },
    {
      id: 8,
      name: "Modern Glassmorphism dark (Dark + Neon Glow)",
      component: Template8,type:"resume"
    },
    { id: 9, name: "Gradient & Modern Cards color", component: Template9,type:"resume" },
    { id: 10, name: "color block light modern ", component: Template10,type:"resume" },
    {
      id: 11,
      name: "Vibrant Portfolio Grid color fancy",
      component: Template11,type:"resume"
    },
    {
      id: 12,
      name: "Split Layout (Sidebar Profile + Content)",
      component: Template12,type:"resume"
    },
    {
      id: 13,
      name: "Side Split green (Sidebar Profile + Content)",
      component: Template13,type:"resume"
    },
  ];

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendURL}/api/auth/login`,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.username);
      localStorage.setItem("userId", response.data.userId);

      setToken(response.data.token);
      setUserId(response.data.userId);
      setName(response.data.username);

      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("name"));
      console.log(localStorage.getItem("userId"));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const submitSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      alert("Password do not match");
    }

    try {
      const response = await axios.post(
        `${backendURL}/api/auth/register`,
        {
          username,
          password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      alert(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.username);
      localStorage.setItem("userId", response.data.userId);

      setToken(response.data.token);
      setUserId(response.data.userId);
      setName(response.data.username);

      navigate("/");
    } catch (error) {}
  };

  const fetchUserData = async () => {
    if (!token || !userId) return;
    try {
      const response = await axios.get(`${backendURL}/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menubarClose = () => {
    setMenuOpen(false);
  };

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  const filterResumes = templates.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const filterPortfolios = portTemplate.filter((template)=>
  template.name.toLowerCase().includes(search.toLowerCase()));
  const onSelect = (id,type) => {
    
    if(type === "resume"){
      navigate(`/template/${id}`);
    }
    if(type === "portfolio"){
      navigate(`/portfolio/${id}`);
    }
  };
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (section) => {
    setForm({ section });
    setFormData(data);
  };

  const handleForm = () => {
    setForm(false);
  };

  const printRef = useRef();

  const handleDownloadPdf = async (id) => {
    console.log(id);
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("template.pdf");

    const pdfBlob = pdf.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const thumbnail = canvas.toDataURL('image/jpeg',0.2)

   setSaveDownload((prev) => {
    const updated = [...prev];
    const index = updated.findIndex((t) => t.id === id);

    const entry = {
      id,
      downloaded: true,
      filename: `template-${id}.pdf`,
      thumbnail,         
      type: "pdf",
    };

    if (index !== -1) {
      updated[index] = { ...updated[index], ...entry };
    } else {
      updated.push(entry);
    }

    localStorage.setItem("downloads", JSON.stringify(updated));
    return updated;
  });

    navigate('/downloads');
    
  };
  
  

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleProfileSave = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.title || !formData.about) return;

    try {
      const updatedData = {
        name: formData.name,
        title: formData.title,
        about: formData.about,
      };

      const response = await axios.put(
        `${backendURL}/api/users/${userId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setUserData((prev) => [
        {
          ...prev[0],
          ...updatedData,
        },
      ]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSave = async () => {
    try {
      const field = form.section?.toLowerCase();

      if (field === "image" && formData.image) {
        const base64 = await toBase64(formData.image);
        const response = await axios.put(
          `${backendURL}/api/users/${userId}`,
          { image: base64 },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserData((prev) =>
          prev ? [{ ...prev[0], ...response.data }] : prev
        );
        return;
      }

      if (["name", "title", "about"].includes(field)) {
        const response = await axios.put(
          `${backendURL}/api/users/${userId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserData((prev) =>
          prev ? [{ ...prev[0], ...response.data }] : prev
        );
        return;
      }

      if (form.item && formData.id) {
        // Editing existing item
        const response = await axios.put(
          `${backendURL}/api/users/${field}/${userId}/${formData.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserData((prev) =>
          prev.map((user, index) =>
            index === 0
              ? {
                  ...user,
                  [field]: Array.isArray(user[field])
                    ? user[field].map((item) =>
                        item.id === formData.id ? response.data : item
                      )
                    : [response.data],
                }
              : user
          )
        );
      } else {
        // Adding new item
        const response = await axios.post(
          `${backendURL}/api/users/${field}/${userId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserData((prev) => {
          if (!prev) return prev;

          return [
            {
              ...prev[0],
              [field]: formData.id
                ? prev[0][field].map((item) =>
                    item.id === formData.id ? response.data : item
                  ) // edit
                : [...(prev[0][field] || []), response.data], // add
            },
          ];
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const handleDelete = async () => {
    if (!form.item.id && !form.section) return;
    const itemId = form.item.id;
    const section = form.section;
    try {
      const response = await axios.delete(
        `${backendURL}/api/users/${section}/${userId}/${itemId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);

      setUserData((prev) =>
        prev.map((user, index) =>
          index === 0
            ? {
                ...user,
                [section]: user[section].filter((item) => item.id !== itemId),
              }
            : user
        )
      );
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const finalUser = userData ? userData[0] : null;

  const def = defaultData ? defaultData[0] : null; 
  const defaultTemplate = finalUser || {defaultData};


 const [templateData, setTemplateData] = useState(defaultTemplate);

  
  const handleChangeValue = (key, value) => {
    setTemplateData({ ...templateData, [key]: value });
  };


const handleDownload = async () => {
  if (!previewRef.current) return;

  const canvas = await html2canvas(previewRef.current, { scale: 2});
  const imgData = canvas.toDataURL("image/png");


  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
   const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  pdf.save("template.pdf");


  const pdfBlob = pdf.output("blob");
  const pdfUrl = URL.createObjectURL(pdfBlob);


    setSaveDownload((prev) => {
    const id = Date.now(); 
    const updated = [
      ...prev,
      {
        id,
        downloaded: true,     
        filename: `template-${id}.pdf`,
        type: "pdf",
      },
    ];
    localStorage.setItem("downloads", JSON.stringify(updated));
    return updated;
  });
  setBlocks([]);
  localStorage.removeItem("savedTemplate");
localStorage.removeItem("templateBlocks"); 
  navigate("/downloads");
};


  
  const handleArrayChange = (arrayKey, index, field, value) => {
    const updatedArray = templateData[arrayKey].map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setTemplateData({ ...templateData, [arrayKey]: updatedArray });
  };


  const handleAddItem = (arrayKey, newItem) => {
    setTemplateData({
      ...templateData,
      [arrayKey]: [...templateData[arrayKey], { id: Date.now(), ...newItem }],
    });
  };


  const handleRemoveItem = (arrayKey, index) => {
    const updatedArray = templateData[arrayKey].filter((_, i) => i !== index);
    setTemplateData({ ...templateData, [arrayKey]: updatedArray });
  };


  const handleSaveTemplate = () => {
    const savedTemplates = JSON.parse(localStorage.getItem("userTemplates")) || [];
    localStorage.setItem(
      "userTemplates",
      JSON.stringify([...savedTemplates, templateData])
    );
    alert("Template saved!");
    
  };

   const [addBlockSignal, setAddBlockSignal] = useState(null);

  const handleAddText = () => setAddBlockSignal({ type: "text" });
  const handleAddImage = () => setAddBlockSignal({ type: "image" });
  const handleAddLink = () => setAddBlockSignal({ type: "link" });

    const [blocks, setBlocks] = useState([]);
  const previewRef = useRef();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedTemplate")) || [];
    setBlocks(saved);
  }, [setBlocks]);

 
  const handleTempDone =() =>{
    const blocksString = localStorage.getItem("blocks");
  const blocks = blocksString ? JSON.parse(blocksString) : [];
  console.log(blocks);
    localStorage.setItem("savedTemplate",JSON.stringify(blocks));
    navigate("/preview");

  }

  useEffect(() => {
  localStorage.setItem("blocks", JSON.stringify(blocks));
}, [blocks]);

  useEffect(()=>{
     localStorage.setItem("downloads",JSON.stringify(saveDownload));

  },[saveDownload])

  useEffect(() => {
    localStorage.setItem("template", selectTemplate);
    if (token && userId) {
      fetchUserData();
    }
    if (form.item) {
      setFormData(form.item);
    } else {
      return;
    }
  }, [selectTemplate, token, userId, form]);

  const values = {
    username,
    setUsername,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
    submitLogin,
    submitSignup,
    token,
    navigate,
    menuOpen,
    setMenuOpen,
    menubarClose,
    isDarkMode,
    setIsDarkMode,
    Logout,
    selectTemplate,
    setSelectedTemplate,
    fetchUserData,
    userData,
    setUserData,
    search,
    setSearch,
    filterResumes,
    filterPortfolios,
    editingSection,
    setEditingSection,
    formData,
    setFormData,
    handleEdit,
    handleSave,
    def,
    finalUser,
    onSelect,
    templates,
    handleDownloadPdf,
    printRef,
    handleForm,
    form,
    setForm,
    handleChange,
    handleProfileSave,
    openSection,
    setOpenSection,
    handleDelete,
    saveDownload,
    setSaveDownload,
    handleChangeValue,handleArrayChange,handleAddItem,handleRemoveItem,handleSaveTemplate,templateData,setTemplateData,handleAddText,handleAddImage,handleAddLink,handleTempDone,addBlockSignal, setAddBlockSignal,handleDownload,setBlocks,blocks,previewRef,portTemplate,switchType,setSwitchType
  };

  return (
    <PortfolioContext.Provider value={values}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
