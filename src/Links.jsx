import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const linkStyle = {
  display: 'inline-block',
  // padding: '10px',  // Optional, you can adjust or remove this if you don't want any spacing around the icons
  textDecoration: 'none',
};

const SocialMediaIcons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '0' }}>
      <a href="https://www.linkedin.com/company/tekk-it" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <FaLinkedin size={50} color="#071013" />
      </a>
      {/* <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <FaTwitter size={40} color="#1DA1F2" />
      </a>
      <a href="https://www.instagram.com/tekkitllc?igsh=ZDN3bW1qM201OTlu" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <FaInstagram size={40} color="#C13584" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
