import Navbar from "../../../components/Navbar";
import Image from "next/image";

const Crew = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(/assets/crew/background-crew-desktop.jpg)]">
      <Navbar />
      <div className="h-full">
        <h1 className="text-white text-xl relative bottom-12">
          <span>01</span>PICK YOUR DESTINATION
        </h1>
        <div className="flex space-x-8 text-white mt-10 ml-40 mr-40 align-center font-serif">
          <div>
            <Image
              src="/assets/destination/image-mars.png"
              alt="moon-image"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col space-y-5 w-1/3 h-full justify-between">
            <ul className="flex space-x-4 text-sm">
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
            <h1 className="text-8xl">MARS</h1>
            <p>
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
            <hr />
            <div className="flex justify-between">
              <div>
                <p>AVG DISTANCE</p>
                <h5>225 MIL.KM</h5>
              </div>
              <div>
                <p>EST. TRAVEL TIME</p>
                <h5>9 MONTHS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
