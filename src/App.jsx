import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Template from "./pages/Template";
import Create from "./pages/Create";
import Downloads from "./pages/Downloads";
import Preview from "./pages/Preview";
import PortDesign from "./pages/PortDesign";

const App = () => {
  return (
    <div className="scroll-smooth">
    <Routes >
      
      <Route path="/login" element ={<Login />}/>
      <Route path="/signup" element={<Signup />} />
    
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/settings" element={<Settings />} />

        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>}/>

        <Route path="/template/:id" element={<Template />}/>

        <Route path="/portfolio/:id" element={<PortDesign />}/>


        <Route path="/new" element={<Create />}/>

        <Route path="/downloads" element={<Downloads />}/>

        <Route path="/preview" element={<Preview />}/>


    </Routes>

    </div>
  );
};

export default App;
