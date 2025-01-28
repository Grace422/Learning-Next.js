"use client"
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import data from "../data/data.json";
import { useState } from "react";

const Technology = () => {
  const [activeTab, setActiveTab] = useState("Moon");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const activeData = data.technology.find(tech => tech.name.toLowerCase() === activeTab.toLowerCase());

  if (!activeData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen bg-cover bg-center bg-fixed bg-[url(/assets/technology/background-technology-desktop.jpg)]">
      <Navbar />
      <div className="h-full pt-40">
        <h1 className="text-white text-xl relative top-0 left-40 tracking-wide">
          <span className="mr-5 text-gray-500">03</span>Space launch 101
        </h1>
        <div className="flex space-x-5 text-white ml-40 items-center justify-evenly font-serif">
          <div className="flex flex-col items-start space-y-7">
            <div className="w-10 h-10 rounded-full bg-muted border items-center flex justify-center text-white">
              1
            </div>
            <div className="w-10 h-10 rounded-full bg-muted border items-center flex justify-center text-white">
              2
            </div>
            <div className="w-10 h-10 rounded-full bg-muted border items-center flex justify-center text-white">
              3
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-1/2 justify-between">
            <p className="text-slate-300">THE TERMINOLOGY...</p>
            <h1 className="text-4xl">{activeData.name}</h1>
            <p className="text-slate-300">{activeData.description}</p>
          </div>
          <div>
            <Image
              src={activeData.images.landscape}
              alt="moon-image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
