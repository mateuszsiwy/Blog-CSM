import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Mój Blog</h1>
        <div className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-500">O mnie</a>
          <a href="#specializations" className="text-gray-700 hover:text-blue-500">Specjalizacje</a>
          <a href="#blog" className="text-gray-700 hover:text-blue-500">Blog</a>
          <a href="#presentations" className="text-gray-700 hover:text-blue-500">Prezentacje</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
