import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center bg-fixed bg-[url(/assets/home/background-home-mobile.jpg)] sm:bg-[url(/assets/home/background-home-desktop.jpg)]">
      <Navbar />
      <div className="flex flex-col text-white pt-40 ml-40 mr-40 items-center font-serif h-full justify-evenly sm:flex-row">
        <div className="flex flex-col space-y-4 text-center sm:text-left">
          <h6 className="text-xl">SO, YOU WANT TO TRAVEL TO</h6>
          <h1 className="text-8xl sm:text-9xl mb-4">SPACE</h1>
          <p className="text-sm w-full mt-4 sm:text-justify sm:w-1/2">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="rounded-full h-60 w-60 bg-white p-20">
          <p className="text-2xl text-black relative top-5 right-1">EXPLORE</p>
        </div>
      </div>
    </div>
  );
}
