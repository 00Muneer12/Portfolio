import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 mt-[5rem]">
            {/* {Projects} */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/Profile/Screenshot_Student id Card.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Student ID Card Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Student ID Card
                  </h1>
                  <p className="leading-relaxed">
                    This is my Student ID Card project which i created for practice and learning.
                  </p>
                  <Link href={"https://milestone1-static-resume-azure.vercel.app/"}>
                  <p className="leading-relaxed text-blue-500 mb-1 hover:underline"> View Project.. </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/Profile/Screenshot_milestone1-static-resume-azure.vercel.app.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Static Resume Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Static Resume
                  </h1>
                  <p className="leading-relaxed">
                    This is my Static Resume project which i created for practice and learning.
                  </p>
                  <Link href={"https://milestone1-static-resume-azure.vercel.app/"}>
                  <p className="leading-relaxed text-blue-500 mb-1 hover:underline"> View Project.. </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
            
              <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/Profile/Screenshot_Resume Builder.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Resume Builder Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Resume Builder
                  </h1>
                  <p className="leading-relaxed">
                    This is my Resume Builder project which is created for practice and learning.
                  </p>
                  <Link href={""}>
                  <p className="leading-relaxed text-blue-500 mb-1 hover:underline"> View Project.. </p>
                  </Link>
                    
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Project;
