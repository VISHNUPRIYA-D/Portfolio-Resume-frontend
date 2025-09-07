import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-[#fcfbd4b8] min-h-screen">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
