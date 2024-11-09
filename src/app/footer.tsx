import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-blue-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black-900">
          <Image src={require("../../../public/assets/Profile/gmu logo.png")} 
            alt="Ghulam Muneer uddin" 
            width={100} 
            height={100} 
            className="w-[60px]"/>
            <span className="ml-3 text-xl">GHULAM MUNEER UDDIN</span>
          </a>
          <p className="text-sm text-blue-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 GHULAM MUNEER UDDIN
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-blue-500">
             <Link 
             target="_blank"
             href={'https://www.facebook.com/ghulam.muneeruddin'}
             className="text-gray-500" 
             > 
            <FaFacebook className="text-3xl hover:text-[#0000FF]"/>
            </Link>
            </a>
            <a className="ml-3 text-gray-500">
             <Link 
             target="_blank"
             href={'https://github.com/00Muneer12'}
             className="text-gray-500"
             >
              <FaGithub className="text-3xl hover:text-[#2b3137]"/>
             </Link>
            </a>
            <a className="ml-3 text-gray-500">
            <Link 
             target="_blank"
             href={'https://discord.com/channels/@me'}
             className="text-gray-500"
             >
              <FaDiscord className="text-3xl hover:text-[#155084]"/>
             </Link>            
             </a>
            <a className="ml-3 text-gray-500">
            
            </a>
            <a className="ml-3 text-gray-500">
            <Link 
             target="_blank"
             href={'https://www.linkedin.com/in/ghulam-muneer-uddin-shaikh-942a8728b/'}
             className="text-gray-500"
             >
              <FaLinkedin className="text-3xl hover:text-[#00008B]"/>
             </Link>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
