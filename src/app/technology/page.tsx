"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import data from "../data/data.json";
import { useState } from "react";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  const activeData = data.technology.find(
    (tech) => tech.id === activeTab
  );

  if (!activeData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen bg-cover bg-center bg-fixed bg-[url(/assets/technology/background-technology-mobile.jpg)] sm:bg-[url(/assets/technology/background-technology-desktop.jpg)]">
      <Navbar />
      <div className="h-full flex flex-col justify-center items-center pt-20 sm:pt-40 sm:justify-start sm:items-start">
        <h1 className="text-center text-white text-xl relative top-0 sm:left-40 sm:text-left tracking-wide">
          <span className="mr-5 text-gray-500">03</span>Space launch 101
        </h1>
        <div className="flex flex-col text-white items-center justify-evenly sm:text-left sm:flex-row sm:ml-20 sm:ml-40 font-serif">
          <div className="flex flex-row space-x-8 pt-20 order-2 sm:order-1 sm:pt-0 sm:space-x-0 sm:flex-col sm:space-y-7">
            {data.technology.map((tech) => (
              <div
                key={tech.id}
                onClick={() => handleTabClick(tech.id)}
                className={`w-10 h-10 rounded-full bg-muted border items-center flex justify-center ${
                  activeTab === tech.id ? "bg-white text-black" : "text-white"
                }`}
              >
                {tech.id}
              </div>
            ))}
          </div>
          <div className="flex flex-col order-2 text-center justify-center sm:text-left space-y-5 sm:w-1/2 sm:justify-between">
            <p className="text-slate-300 pt-10 sm:pt-0">THE TERMINOLOGY...</p>
            <h1 className="text-4xl">{activeData.name.toUpperCase()}</h1>
            <p className="text-slate-300 ml-10 mr-10 sm:text-left sm:ml-0 sm:mr-0">{activeData.description}</p>
          </div>
          <div className="w-full h-64 order-1 sm:order-3 relative sm:w-96 sm:h-96 top-10 ">
            <Image
              src={activeData.images.portrait}
              alt={activeData.name}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
