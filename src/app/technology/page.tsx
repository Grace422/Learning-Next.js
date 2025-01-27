import Navbar from "../../../components/Navbar";
import Image from "next/image";

const Technology = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(/assets/technology/background-technology-desktop.jpg)]">
      <Navbar />
      <div className="h-full pt-40">
        <h1 className="text-white text-xl relative top-0 left-40 tracking-wide">
          <span className="mr-5 text-gray-500">03</span>Space launch 101
        </h1>
        <div className="flex flex-col absolute left-40 bottom-20 items-center space-y-7">
          <div className="w-10 h-10 rounded-full bg-muted border text-center text-white">
            1
          </div>
          <div className="w-10 h-10 rounded-full bg-muted border text-center text-white">
            2
          </div>
          <div className="w-10 h-10 rounded-full bg-muted border text-center text-white">
            3
          </div>
        </div>
        <div className="flex space-x-5 text-white mt-10 ml-60 items-center justify-evenly font-serif">
          <div className="flex flex-col space-y-5 w-1/2 h-full justify-between">
            <p className="text-slate-300">THE TERMINOLOGY...</p>
            <h1 className="text-4xl">LAUNCH VEHICLE</h1>
            <p className="text-slate-300">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
          <div>
            <Image
              src="/assets/technology/image-launch-vehicle-portrait.jpg"
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
