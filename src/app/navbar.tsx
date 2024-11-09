import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button"
// Importing the logo image directly
import logo from '../../../public/assets/Profile/gmu logo.png';

export const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-blue-900 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-b-blue-900 mb-4 md:mb-0">
            {/* Using the imported logo image */}
            <Image
              src={logo}
              alt="gmu logo"
              width={100}
              height={100}
              className="w-[58px]"
            />
            <span className="ml-3 text-xl">GHULAM MUNEER UDDIN</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#Skill"} className="mr-5 hover:text-red-600">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-red-600">
              Contact
            </Link>
          </nav>
          <Link href="/assets/CV/Muneer Cv.pdf" target="_blank" download>
            <Button className="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">
              CV Download
              <FaCloudDownloadAlt className="text-xl ml-2" />
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
};
