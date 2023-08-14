import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOptions Icon={SearchOutlinedIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicOutlinedIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      <SidebarOptions title="Hiphop" />

      <SidebarOptions title="Rock" />

      <SidebarOptions title="Dohori" />
    </div>
  );
};

export default Sidebar;
