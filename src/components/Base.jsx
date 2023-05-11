import React from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

const Base = ({ title = "Hello this is title", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavbar />
      {children}
      <Footer/>
    </div>
    
  );
};

export default Base;
