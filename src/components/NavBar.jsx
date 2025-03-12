import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          ExamPortal
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/register-exam" className="hover:underline">Register Exam</Link></li>
          <li><Link to="/exam-schedule" className="hover:underline">Exam Schedule</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white space-y-3 p-4">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/register-exam" onClick={() => setIsOpen(false)}>Register Exam</Link></li>
          <li><Link to="/exam-schedule" onClick={() => setIsOpen(false)}>Exam Schedule</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
