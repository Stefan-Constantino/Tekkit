import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const linkStyle = {
    display: 'inline-block',
    padding: '10px',
    backgroundColor: '#0A66C2',
    borderRadius: '50%',
    textDecoration: 'none',
  };

  const SocialMediaIcons = () => {
    return (
      <div>
        <a href="https://www.linkedin.com/company/tekk-it" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="#0A66C2" style={{ marginRight: '10px' }} />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} color="#1DA1F2" style={{ marginRight: '10px' }} />
        </a>
        <a href="https://www.instagram.com/tekkitllc?igsh=ZDN3bW1qM201OTlu" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} color="#C13584" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;



