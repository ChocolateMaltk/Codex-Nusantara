import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

const Home = () => {
  return (
    <div>
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl">
            Logo
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome To Flora Fauna Indonesia!</h1>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia feugiat lacus, id auctor magna egestas vel.</p>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-blue-600">
          Get Started
        </a>
      </main>

      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2023 Kelompok 7 Kelas C. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
