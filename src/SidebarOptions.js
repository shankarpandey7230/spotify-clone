import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ title, Icon }) => {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOptions_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOptions;
