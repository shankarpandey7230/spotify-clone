import React from "react";
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <p>ALbum and songs details</p>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousOutlinedIcon className="footer_icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer_icon"
        />
        <SkipNextOutlinedIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <p>Volume Controls</p>
      </div>
    </div>
  );
};

export default Footer;
