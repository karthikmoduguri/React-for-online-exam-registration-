import { Link } from "react-router-dom";

const Home = () => {
  // Mock data for ongoing exams
  const ongoingExams = [
    { id: 1, name: "Math Test", date: "March 10, 2025", time: "10:00 AM" },
    { id: 2, name: "Physics Quiz", date: "March 12, 2025", time: "2:00 PM" },
    { id: 3, name: "Chemistry Exam", date: "March 15, 2025", time: "9:00 AM" },
    { id: 4, name: "English Test", date: "March 20, 2025", time: "1:00 PM" },
  ];

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section: Ongoing Exams */}
      <div className="w-full md:w-3/4">
        <h1 className="text-2xl font-bold mb-4">Ongoing Exams</h1>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul>
            {ongoingExams.map((exam) => (
              <li key={exam.id} className="border-b last:border-none p-3">
                <h2 className="text-lg font-semibold">{exam.name}</h2>
                <p className="text-gray-600">{exam.date} | {exam.time}</p>
              </li>
            ))}
          </ul>
        </div>
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
      </div>
    </div>
  );
};

export default Home;
