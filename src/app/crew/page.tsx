import Navbar from "../../../components/Navbar";
import Image from "next/image";

const Crew = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(/assets/crew/background-crew-desktop.jpg)]">
      <Navbar />
      <div className="h-full pt-40">
        <h1 className="text-white text-xl relative top-0 left-40 tracking-wide">
          <span className="mr-5 text-gray-500">02</span>MEET YOUR CREW
        </h1>
        <div className="flex space-x-8 text-white mt-10 ml-30 mr-30 items-center justify-evenly font-serif">
          <div className="flex flex-col space-y-5 w-1/3 h-full justify-between">
            <h2 className="text-slate-300 text-2xl">FLIGHT ENGINEER</h2>
            <h1 className="text-5xl">Anousheh Ansari</h1>
            <p className="text-slate-300">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
            <div className="flex items-center space-x-4 pt-20">
              <div className="w-3 h-3 rounded-full bg-slate-500" />
              <div className="w-3 h-3 rounded-full bg-slate-500" />
              <div className="w-3 h-3 rounded-full bg-slate-500" />
              <div className="w-3 h-3 rounded-full bg-slate-500" />
            </div>
          </div>
          <div>
            <Image
              src="/assets/crew/image-anousheh-ansari.png"
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

export default Crew;
