import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);
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
      {playlists?.items?.map((playlist, id) => (
        <SidebarOptions key={id} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
