export const NavBar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Christopher Talavera</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#content" className="hover:text-gray-400">Content</a>
        </div>
        <button
          className="
            bg-gradient-to-r 
            from-yellow-400 
            to-blue-600 
            text-white 
            hidden 
            md:inline 
            transform 
            transition-transform 
            duration-300 
            hover:scale-105 
            px-4 
            py-2 
            rounded-full
          "
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};