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
    <div className="h-screen bg-cover bg-center bg-fixed  bg-[url(/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(/assets/destination/background-destination-desktop.jpg)]">
      <Navbar />
      <div className="h-full pt-40">
        <h1 className="text-center text-white text-xl relative top-0 sm:left-40 sm:text-left tracking-wide">
          <span className="mr-5 text-gray-500">01</span>PICK YOUR DESTINATION
        </h1>
        <div className="flex flex-col sm:flex sm:flex-row justify-evenly text-white mt-10 sm:ml-40 sm:mr-40 items-center font-serif">
          <div className="w-64 h-64 sm:w-96 sm:h-96 relative">
            <Image
              src={activeData.images.png}
              alt={activeData.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col space-y-5 sm:w-1/3 h-full justify-between pt-10 sm:pt-0">
            <ul className="destination-links flex space-x-4 text-sm text-slate-500 sm:text-left justify-evenly sm:justify-start">
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
            <h1 className="text-7xl text-center sm:text-8xl sm:text-left">{activeData.name.toUpperCase()}</h1>
            <p className="text-slate-500 text-center sm:text-left">{activeData.description}</p>
            <hr />
            <div className="flex flex-col text-center pt-10 sm:pt-0 sm:flex sm:flex-row justify-between">
              <div>
                <p className="text-sm text-slate-500">AVG DISTANCE</p>
                <h5 className="text-2xl">{activeData.distance}</h5>
              </div>
              <div>
                <p className="text-sm text-slate-500 pt-10 sm:pt-0">EST. TRAVEL TIME</p>
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
