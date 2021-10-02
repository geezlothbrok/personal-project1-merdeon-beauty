import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import { IconContext } from 'react-icons';
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer">
      <IconContext.Provider value={{ color: "#fff", size: '20px' }}>
        <div className="email col-md-6 col-xs-6">
          <MdIcons.MdEmail />
          <p id="paragraph">merdeonbeauty@gmail.com</p>
        </div>
        <div className=" email col-md-6 col-xs-6">
          <FaIcons.FaFacebookSquare />
          <p id="paragraph">merdeonbeauty</p>
        </div>
        <div className="email col-md-6 col-xs-6">
          <FaIcons.FaPhoneAlt />
          <p id="paragraph">+233 2334 4546 4</p>
        </div>
        <div className="email col-md-6 col-xs-6">
          <FaIcons.FaTwitter />
          <p id="paragraph">@merdeonbeauty</p>
        </div>
        <div className="email col-md-6 col-xs-6">
          <MdIcons.MdLocationOn />
          <p id="paragraph">East Legon</p>
        </div>
        <div className="email col-md-6 col-xs-6">
          <AiIcons.AiFillInstagram />
          <p id="paragraph">@merdeon_beauty</p>
        </div>

        <div className="copy-right col-md-6 col-xs-6">
        <CgIcons.CgCopyright />
          <h6>merdeonbeauty All Rights Reserved 2021</h6>
        </div>
        <div className="copy-right col-md-6 col-xs-6">
        <IoIcons.IoIosGlobe />
          <h6>merdeonbeauty.gh.com</h6>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Footer;
