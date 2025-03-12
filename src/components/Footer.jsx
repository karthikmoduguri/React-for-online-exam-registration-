const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} ExamPortal. All rights reserved.</p>
          <p className="text-sm">
            Designed for online exam registration.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  