"use client";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import data from "../data/data.json";
import { useState } from "react";

interface CrewMember {
  name: string;
  bio: string;
  role: string;
  image: string;
}
const Crew = () => {
  const crew = data.crew;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="h-screen bg-cover bg-center bg-fixed bg-[url(/assets/crew/background-crew-desktop.jpg)]">
      <Navbar />
      <div className="h-full pt-40">
        <h1 className="text-white text-xl relative top-0 left-40 tracking-wide">
          <span className="mr-5 text-gray-500">02</span>MEET YOUR CREW
        </h1>
        <div className="flex space-x-8 text-white mt-10 ml-30 mr-30 items-center justify-evenly font-serif">
          <div className="flex flex-col space-y-5 w-1/3 h-full justify-between">
            <h2 className="text-slate-300 text-2xl">
              {crew[activeIndex].role}
            </h2>
            <h1 className="text-5xl">{crew[activeIndex].name}</h1>
            <p className="text-slate-300">{crew[activeIndex].bio}</p>
            <div className="flex items-center space-x-4 pt-20">
              {crew.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    activeIndex === index ? "bg-white" : "bg-gray-500"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="relative w-96 h-96">
            <Image
              src={crew[activeIndex].images.png}
              alt={crew[activeIndex].name}
              layout="fill"
              objectFit="contain"
              className="z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
