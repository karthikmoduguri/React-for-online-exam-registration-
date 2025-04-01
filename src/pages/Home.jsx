import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import studyAnimation from "../assets/study-boy.json"; // Import the JSON file
import { MoveLeft } from "lucide-react";

const Home = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 items-center">
      {/* Left Section: Animated Boy Studying */}
      <div className="w-full md:w-3/4 flex justify-center ">
        <Player
          autoplay
          loop
          src={studyAnimation} // JSON animation file
          style={{ height: "700px", width: "800px" ,position:MoveLeft }}
        />
      </div>

      {/* Right Section: Register & Login Buttons */}
      <div className="w-full md:w-1/4 flex flex-col gap-4">
        <Link to="/register">
          <button className="bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-green-600 text-white p-3 rounded-lg w-full hover:bg-green-700">
            Login
          </button>
        </Link>
        <Link to="/logout">
          <button className="bg-green-600 text-white p-3 rounded-lg w-full hover:bg-green-700">
            Logout
          </button>
        </Link>





      </div>
    </div>
  );
};

export default Home;
