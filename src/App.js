import "./App.css";
import Inamigo from "../src/Picture/Inamigo.jpg";
import Image from "../src/Picture/Final.jpg";

const BachpanshalaPoster = () => {
  return (
    <div
    className=" bg-yellow w-full h-screen  bg-no-repeat bg-contain md:bg-cover  "
    style={{ backgroundImage: `url(${Image})` }}
  >
  
  {/* Logo at the top center */}
      <div className="w-full flex justify-center mb-6">
        <img className="h-24 object-contain" src={Inamigo} alt="InAmigos Logo" />
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="relative z-10 w-full max-w-2xl mx-auto bg-yellow-100 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-6 text-center font-sans">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Project Bachpanshala</h1>
          <h2 className="text-xl text-gray-700 font-semibold mb-6">
            An Initiative by InAmigos Foundation
          </h2>

          <p className="text-lg text-gray-800 mb-4">
            🌍 Our mission: <span className="font-semibold">Bridge the education gap for underprivileged children</span> by providing accessible, joyful, and impactful learning experiences.
          </p>

          <p className="text-lg font-semibold text-green-700 mb-6">
            💡 Join us in shaping a #BetterFuture — every child deserves a chance to learn and grow.
          </p>

          <div className="text-sm text-gray-600 mb-2">
            <p>#InAmigos #ProjectBachpanshala #BetterFuture #NGO</p>
          </div>

          <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
            Support the Cause
          </button>
        </div>
      </div>
    </div>
  );
};

export default BachpanshalaPoster;
