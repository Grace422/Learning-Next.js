"use client"
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import data from "../data/data.json";

const About = () => {
  const [activeTab, setActiveTab] = useState("Moon");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const activeData = data.destinations.find(dest => dest.name.toLowerCase() === activeTab.toLowerCase());

  if (!activeData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen bg-cover bg-center bg-fixed bg-[url(/assets/destination/background-destination-desktop.jpg)]">
      <Navbar />
      <div className="h-full pt-40">
        <h1 className="text-white text-xl relative top-0 left-40 tracking-wide">
          <span className="mr-5 text-gray-500">01</span>PICK YOUR DESTINATION
        </h1>
        <div className="flex justify-evenly text-white mt-10 ml-40 mr-40 items-center font-serif">
          <div>
            <Image
              src={activeData.images.png}
              alt={activeData.name}
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col space-y-5 w-1/3 h-full justify-between">
            <ul className="destination-links flex space-x-4 text-sm text-slate-500">
              {data.destinations.map((dest) => (
                <li
                  key={dest.name}
                  onClick={() => handleTabClick(dest.name)}
                  className={`relative text-white ${activeTab === dest.name ? "active" : ""}`}
                >
                  {dest.name.toUpperCase()}
                </li>
              ))}
            </ul>
            <h1 className="text-8xl">{activeData.name.toUpperCase()}</h1>
            <p className="text-slate-500">{activeData.description}</p>
            <hr />
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-slate-500">AVG DISTANCE</p>
                <h5 className="text-2xl">{activeData.distance}</h5>
              </div>
              <div>
                <p className="text-sm text-slate-500">EST. TRAVEL TIME</p>
                <h5 className="text-2xl">{activeData.travel}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
