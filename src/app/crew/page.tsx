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
    <div className="h-screen bg-cover bg-center bg-fixed bg-[url(/assets/crew/background-crew-mobile.jpg)] sm:bg-[url(/assets/crew/background-crew-desktop.jpg)]">
      <Navbar />
      <div className="h-full pt-40">
        <h1 className="text-center text-white text-xl relative top-0 sm:left-40 sm:text-left tracking-wide">
          <span className="mr-5 text-gray-500">02</span>MEET YOUR CREW
        </h1>
        <div className="flex flex-col sm:flex sm:flex-row space-x-8 text-white mt-10 sm:ml-30 sm:mr-30 text-center sm:text-left items-center justify-evenly font-serif">
          <div className="flex flex-col sm:w-1/3 h-full order-2 justify-between">
            <div className="space-y-5 order-3 sm:order-2">
              <h2 className="text-slate-300 text-2xl">
                {crew[activeIndex].role}
              </h2>
              <h1 className="text-5xl">{crew[activeIndex].name}</h1>
              <p className="text-slate-300 ml-10 mr-10 sm:text-left sm:ml-0 sm:mr-0">{crew[activeIndex].bio}</p>
            </div>
            <div className="flex items-center space-x-4 pt-10 pb-10 ml-40 sm:ml-0">
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
          <div className="w-64 h-64 relative order-1 sm:order-3 sm:w-96 sm:h-96 ">
            <Image
              src={crew[activeIndex].images.png}
              alt={crew[activeIndex].name}
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

export default Crew;
