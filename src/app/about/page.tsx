import Navbar from "../../../components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(/assets/destination/background-destination-desktop.jpg)]">
      <Navbar />
      <div className="h-full pt-40">
        <h1 className="text-white text-xl relative top-0 left-40 tracking-wide">
          <span className="mr-5 text-gray-500">01</span>PICK YOUR DESTINATION
        </h1>
        <div className="flex justify-evenly text-white mt-10 ml-40 mr-40 items-center font-serif">
          <div>
            <Image
              src="/assets/destination/image-mars.png"
              alt="moon-image"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col space-y-5 w-1/3 h-full justify-between">
            <ul className="flex space-x-4 text-sm text-slate-500">
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
            <h1 className="text-8xl">MARS</h1>
            <p className="text-slate-500">
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
            <hr />
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-slate-500">AVG DISTANCE</p>
                <h5 className="text-2xl">225 MIL. KM</h5>
              </div>
              <div>
                <p className="text-sm text-slate-500">EST. TRAVEL TIME</p>
                <h5 className="text-2xl">9 MONTHS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
