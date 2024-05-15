import React from "react";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5 flex-auto">
      <div className="flex gap-10 flex-wrap">
        
        {/* Youtube */}
        <a
          href="https://www.youtube.com/channel/UCbsmtBpfwsoO4sCi19wIDYA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a>

        {/* Tik Tok */}
        <a
          href="https://www.tiktok.com/@reaksmeyrt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTiktok
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a>

        {/* Instagram 
        <a
          href="https://www.instagram.com/reaksmey58/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a>
*/}
        {/* FaceBook */}
        <a
          href="https://www.facebook.com/reaksmey.rt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/reakmsey-than-499b27ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a>

      </div>

      <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor cursor-pointer transition-all text-3xl font-semibold"
        >
          DevHorizon
        </Link>
      </div>
    </div>
  );
};

export default Footer;
