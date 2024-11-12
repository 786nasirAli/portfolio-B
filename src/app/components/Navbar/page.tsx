import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-yellow-700 flex justify-end items-center h-16">
      <ul className="flex gap-4 mr-12">
        <li className="text-white no-underline px-4 py-2 rounded hover:bg-teal-500 transition-colors duration-300">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="text-white no-underline px-4 py-2 rounded hover:bg-teal-500 transition-colors duration-300">
          <Link href="/Project" >
            Project
          </Link>
        </li>
        <li className="text-white no-underline px-4 py-2 rounded hover:bg-teal-500 transition-colors duration-300">
          <Link href="/Contact" >
            Contact
          </Link>
        </li>
        <li className="text-white no-underline px-4 py-2 rounded hover:bg-teal-500 transition-colors duration-300">
          <Link href="https://console.dialogflow.com/api-client/demo/embedded/bd2d4613-6dd7-4da8-80de-3b89ea038279" target="_blank" rel="noopener noreferrer" >
            Chatbot
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
