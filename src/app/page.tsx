import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(/assets/home/background-home-desktop.jpg)]">
      <Navbar />
      <div className="flex text-white m-0 ml-40 mr-40 items-center font-serif h-full">
        <div className="flex flex-col space-y-2">
          <h6 className="text-xl">SO, YOU WANT TO TRAVEL TO</h6>
          <h1 className="text-9xl mb-4">SPACE</h1>
          <p className="text-sm w-1/2 mt-4 text-justify">
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
